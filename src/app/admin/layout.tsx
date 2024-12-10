import ContentLayout from "@/components/ContentLayout/ContentLayout";
import SideBar from "@/components/SideBar/SideBar";
import React from "react";
import {PrimeReactProvider} from "primereact/api";
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export default function AdminLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <PrimeReactProvider value={{unstyled: false}}>
            <SideBar/>
            <ContentLayout>
                {children}
            </ContentLayout>
        </PrimeReactProvider>

    );
}