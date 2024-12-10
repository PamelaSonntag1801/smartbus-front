"use client"

import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";
import Directions from "@/components/Maps/Directions/Directions";
import LineFluid from "@/components/GridSystem/LineFluid/LineFluid";
import LatLng = google.maps.LatLng;
import React, {useState} from "react";
import clsx from "clsx";
import styles from "./_maps.module.scss";

interface MapsProps {
    origin?: LatLng;
    destination?: LatLng;
    markers?: any[];
    center?: any;
    street?: boolean,
    fill: boolean
}

const API_KEY = "AIzaSyCb2OqBOY801jMUD7jcI37VGKbhTuF6OC4";

export default function BMaps({
    origin,
    destination,
    markers,
    center,
    street = false,
    fill = false
}: MapsProps) {
    const icon = "https://maps.google.com/mapfiles/kml/shapes/bus.png"
    const [defaultCenter, setDefaultCenter] = useState<any>(center ? center : {lat: -27.2145, lng: -49.6435});

    const mapFill = clsx(
        {
            [styles.map75h]: !fill,
            [styles.mapFill]: fill
        }
    )

    return (
        <LineFluid col={5} fillHeight>
            <APIProvider apiKey={API_KEY}>
                <Map
                    defaultCenter={defaultCenter}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    fullscreenControl={false}
                    className={mapFill}
                >
                    {origin && destination ?
                        <>
                            <Marker
                                position={origin}
                                icon={{
                                    url: icon
                                }}
                            />
                            <Marker
                                position={destination}
                                icon={{
                                    url: icon
                                }}
                            />
                            <Directions
                                origin={origin}
                                destination={destination}
                                suppressMarkers={true}
                            />                            
                        </> :
                        <></>
                    }
                    {markers?.length && !street ? (
                        markers.map((marker: any, index: number) => (
                            <>
                                <Marker
                                    position={{lat: Number(marker.latitude), lng: Number(marker.longitude)}}
                                />
                            </>
                        ))
                    ) : (
                        <></>
                    )}
                    {markers?.length == 1 && street ? (
                        markers.map((marker: any, index: number) => (
                            <>
                               
                            </>
                        ))
                    ) : (
                        <></>
                    )}
                </Map>
            </APIProvider>
        </LineFluid>
    );
};