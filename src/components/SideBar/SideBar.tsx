"use client"

import styles from "./_sideBar.module.scss";
import {useRouter} from "next/navigation";

export default function SideBar() {
    const router = useRouter();
    
    return (
        <>
            <aside
                className={`${styles.sideBar} ${styles.open}`}
            >
                <div
                    className={`${styles.sideBarHeader} ${styles.open}`}
                >
                    {/*<i className="pi pi-bars" style={{ fontSize: "2rem" }}></i>*/}
                    <span>Smartbus Admin</span>
                </div>
                <div
                    className={`${styles.listOpen}`}
                >
                    <div className={`${styles.menuListItens}`}>
                        <div className={`${styles.menuItem}`} onClick={() => router.push('/admin/user')}>
                            <span className={`${styles.itemSpan}`}>
                                Usuários
                            </span>
                        </div>
                        <div className={`${styles.menuItem}`} onClick={() => router.push('/admin/pontos')}>
                            <span className={`${styles.itemSpan}`}>
                                Pontos
                            </span>
                        </div>
                        <div className={`${styles.menuItem}`} onClick={() => router.push('/admin/onibus')}>
                            <span className={`${styles.itemSpan}`}>
                                Ônibus
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        zIndex: 100,
                        left: 0,
                        top: "50px"
                    }}
                >
                </div>
            </aside>
        </>
    );
}