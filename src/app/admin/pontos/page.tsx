"use client"

import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {apiDefault} from "@/api/apiDefault";
import {useEffect, useState} from "react";
import Modal from "@/components/Modal/Modal";
import BMaps from "@/components/Maps/Maps";
import {Button} from "primereact/button";

export default function page() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [pagination, setPagination] = useState({ page: 1, rows: 50 });
    const [openMap, setOpenMap] = useState<boolean>(false);
    const [latLong, setLatLong] = useState<any>({latitude: 0, longitude: 0});

    const handleOpenMap = () => {
        setOpenMap(!openMap);
    }
    
    const openMapModal = (latitude: string, longitude: string)=> {
        setLatLong({
            latitude: latitude,
            longitude: longitude
        })
        handleOpenMap()
    }
    
    const streetMap = (item: any) => {
        return (
            <>
                <Button
                    severity="success"
                    onClick={() => openMapModal(item.latitude, item.longitude)}
                    className="pi pi-search"
                    style={{
                        width: "100%",
                        maxHeight: "76px",
                        height: "100%"
                    }}
                />
            </>
        )
    };

    const fetchData = async (page: number) => {
        setLoading(true);
        try {
            const response = await apiDefault.get(`pontos?page=${page}`);
            setData(response.data.data.data);
            setTotalRecords(response.data.data.total);
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(pagination.page, pagination.rows);
    }, [pagination]);

    const onPageChange = (event: any) => {
        setPagination({
            page: event.page + 1,
            rows: event.rows,
        });
    };
    
    return (
        <>
            <DataTable value={data}
                       paginator
                       rows={pagination.rows}
                       totalRecords={totalRecords}
                       lazy
                       loading={loading}
                       onPage={onPageChange}
            >
                <Column field="id" header="id"></Column>
                <Column field="prefixo" header="prefixo"></Column>
                <Column field="linha" header="linha"></Column>
                <Column field="sentido" header="sentido"></Column>
                <Column field="local" header="local"></Column>
                <Column field="Mapa" header="Mapa" body={streetMap}></Column>
            </DataTable>
            {openMap && latLong ?
                <>
                    <Modal
                        headerLabel="Localização do Ponto"
                        resizable
                        draggable
                        visible={openMap}
                        callback={handleOpenMap}
                    >
                        <BMaps
                            center={{lat: Number(latLong.latitude), lng: Number(latLong.longitude)}}
                            markers={[latLong]}
                            fill
                        />
                    </Modal>
                </> :
                <></>
            }
        </>
    );
} 