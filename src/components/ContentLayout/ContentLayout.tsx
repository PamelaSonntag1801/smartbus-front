"use client"

import {PropsWithChildren} from "react";
import styles from "./_contentPage.module.scss";
import React from "react";

export default function ContentLayout({ children }: PropsWithChildren) {
    return (
        <>
            <div
                className={`${styles.content} ${styles.open}`}
                style={{
                    position: "relative",
                    padding: "5px",
                }}
            >
                {children}
            </div>
        </>
    );
}