"use client"

import {Dialog, DialogProps} from "primereact/dialog";
import "./_modal.scss";
import {useCallback, useState} from "react";
import Grid from "@/components/GridSystem/Grid/Grid";

interface SModalProps extends DialogProps {
    registerId?: string | number;
    // onHide?: () => void;
    callback?: () => void;
    headerLabel?: string;
    visible?: boolean;
}

export default function Modal({
    children,
    // header,
    // footer,
    draggable = false, 
    resizable = false,
    headerLabel,
    callback,
    visible = false,
    ...props
}: SModalProps) {
    const [isVisible, setIsVisible] = useState(visible);
    
    const handleOnHide = useCallback(() => {
        setIsVisible(false)
        if (callback) callback();
    }, [callback])
    
    const HEADER = (
        <Grid height={50}>
            <span
                style={{
                    paddingLeft: "10px"
                }}
            >
                {headerLabel || '{label}'}
            </span>
        </Grid>
    );
    
    const FOOTER = (
        <Grid
            height={50}
            justify={"end"}
        >
        </Grid>
    );
    
    if (!isVisible) {
        return (
            <>
                {/*<button type="button" onClick={() => setIsVisible(true)}>Abrir mapa</button>*/}
            </>
        )
    }

    return (
        <Dialog
            visible={isVisible}
            header={HEADER}
            footer={FOOTER}
            resizable={resizable}
            draggable={draggable}
            onHide={handleOnHide}
            {...props}
        >
            {children}
        </Dialog>
    );
};