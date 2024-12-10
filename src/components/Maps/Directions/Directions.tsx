"use client"

import {useState, useEffect} from "react";
import {useMap, useMapsLibrary} from "@vis.gl/react-google-maps";
import LatLng = google.maps.LatLng;
import "./_direction.scss";

interface BDirectionProps extends google.maps.DirectionsRendererOptions {
    origin: LatLng;
    destination: LatLng;
}

export default function Directions({
    origin,
    destination,
    suppressMarkers
}: BDirectionProps) {
    const map = useMap();
    const routesLibrary = useMapsLibrary('routes');
    const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
    const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
    const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
    const [routeIndex, setRouteIndex] = useState(0);
    const selected = routes[routeIndex];
    const leg = selected?.legs[0];

    useEffect(() => {
        if (!routesLibrary || !map) return;
        setDirectionsService(new routesLibrary.DirectionsService());
        setDirectionsRenderer(new routesLibrary.DirectionsRenderer({
            map,
            suppressMarkers: suppressMarkers
        }));
    }, [routesLibrary, map]);

    useEffect(() => {
        if (!directionsService || !directionsRenderer) return;
        
        directionsService
            .route({
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: false,
            })
            .then(response => {
                directionsRenderer.setDirections(response);
                setRoutes(response.routes);
            });

        return () => directionsRenderer.setMap(null);
    }, [directionsService, directionsRenderer]);

    useEffect(() => {
        if (!directionsRenderer) return;
        directionsRenderer.setRouteIndex(routeIndex);
    }, [routeIndex, directionsRenderer]);

    if (!leg) return null;
    
    return (
        <div className="directions">
            <div className="originDestination">
                <span><i className="pi pi-map-marker"></i> <span className="originDestinationLabel">Origem:</span> {leg.start_address.split(',')[0]}</span>
                <i className="pi pi-angle-double-down"></i>
                <span><i className="pi pi-map-marker"></i> <span className="originDestinationLabel">Destino:</span> {leg.end_address.split(',')[0]}</span>
            </div>
            <div className="originDestination">
                <span><i className="pi pi-map"></i> <span className="originDestinationLabel">Distância:</span> {leg.distance?.text}</span>
                <span><i className="pi pi-clock"></i> <span className="originDestinationLabel">Tempo de viagem:</span> {leg.duration?.text}</span>
            </div>
        </div>
    );
};