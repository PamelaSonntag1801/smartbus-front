"use client"

import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {apiDefault} from "@/api/apiDefault";
import {useEffect, useState} from "react";

export default function page() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [pagination, setPagination] = useState({ page: 1, rows: 50 });

    const fetchData = async (page: number) => {
        setLoading(true);
        try {
            const response = await apiDefault.get(`users?page=${page}`);
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
                <Column field="name" header="name"></Column>
                <Column field="email" header="email"></Column>
                <Column field="tipo" header="tipo"></Column>
                <Column field="created_at" header="created_at"></Column>
                <Column field="updated_At" header="updated_At"></Column>
            </DataTable>
        </>
    );
} 