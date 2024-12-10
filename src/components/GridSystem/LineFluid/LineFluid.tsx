"use client"

import {PropsWithChildren, useCallback} from "react";
import styles from "./_lineFluid.module.scss";
import {Cols} from "@/components/GridSystem/Grid/Grid";

interface SLineFluidProps extends PropsWithChildren {
    col?: Cols;
    gap?: number;
    fillHeight?: boolean
}

export default function LineFluid({children, col = 12, fillHeight = false, ...props}: SLineFluidProps) {    
    const getCol = useCallback(() => {
        return `col-${col}`;
    }, [col]);

    return (
        <div className={`${styles[getCol()]} ${fillHeight ? styles.fillHeight : ''}`} {...props}>
            {children}
        </div>
    );
};