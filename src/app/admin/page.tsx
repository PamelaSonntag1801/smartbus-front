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
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const collect = require('collect.js');

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
            const response = await apiDefault.get(`onibus?page=${page}`);
            // setData(response.data.data.data);
            setTotalRecords(response.data.data.total);
            const teste = response?.data?.data?.data?.map(item => ({
                latitude: Number(item.latitude),
                longitude: Number(item.longitude),
            }));
            console.log(teste)
            setData(teste)
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(pagination.page, pagination.rows);
    }, [pagination]);
    

    return (
        <>
            <BMaps
                fill
                markers={data}
            />
        </>
    );
} 