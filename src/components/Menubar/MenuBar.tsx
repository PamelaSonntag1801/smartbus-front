"use client"

import styles from "./_menuBar.module.scss";
import Image from "next/image";
import clsx from "clsx";
import Grid from "@/components/GridSystem/Grid/Grid";
import LineFluid from "@/components/GridSystem/LineFluid/LineFluid";
import {Bairros} from "@/api/data";
import {useState} from "react";
import BSelect from "@/components/Select/BSelect";
import {useRouter} from "next/navigation";
import BMaps from "@/components/Maps/Maps";
import Modal from "@/components/Modal/Modal";
import {Button} from "primereact/button";
import Input from "@/components/Input/InputText";

export default function MenuBar() {
    const [origem, setOrigem] = useState<any>(null);
    const [destino, setDestino] = useState<any>(null);
    const router = useRouter();
    const [openMap, setOpenMap] = useState<boolean>(false);
    const [contact, setContact] = useState<boolean>(false)
    
    const handleOpenMap = () => {
        setOpenMap(!openMap);
    }

    const handleContact = () => {
        setContact(!contact);
    }
    
    const handleOrigemChange = (option: any) => {
        if (option)
            return setOrigem({lat: option.lat, lng: option.lng});
        return setOrigem(null);
    }

    const handleDestinoChange = (option: any) => {
        if (option) 
            return setDestino({lat: option.lat, lng: option.lng});
        return setDestino(null);
    }
    
    const getPath = () => {
        handleOpenMap();
    }

    const defaultContainer = clsx(
        styles.menuContent,
        {
            [styles.subContainer]: true
        }
    )
    
    const goesTo = (path: string) => {
        router.push(path);
    }
    
    return (
        <>
            <nav
                className={`${styles.menu}`}
            >
                <div className={defaultContainer}>
                    <div className={styles.menuOptions}>
                        <div style={{cursor: "pointer"}} onClick={() => goesTo('/')}>
                            <Image
                                src="/newIcon.png"
                                width={50}
                                height={50}
                                alt="Icone da SmartBus"
                                onClick={() => goesTo("/")}
                            />
                        </div>
                    </div>
                    <div className={styles.menuLinks}>
                        <span>Inicio</span>
                        <span onClick={handleContact}>Contate-nos</span>
                        <span onClick={() => router.push('/admin')}>Entrar</span>
                    </div>
                </div>
            </nav>
            <div className={styles.page}>
                <div style={{
                    maxHeight: "450px",
                    height: "100%",
                    position: "relative",
                    marginBottom: "60px"
                }}>
                    <Image
                        src="/onibus.jpg"
                        alt="Imagem de onibus"
                        fill
                    />
                    <div style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyItems: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 100,
                        flexDirection: "column",
                        position: "absolute",
                    }}>
                        <h1 style={{color: "#fff"}}>Bem-vindo ao SmartBus</h1>
                        <p style={{color: "#fff"}}>
                            O SmartBus é um sistema inovador que fornece informações em tempo real sobre o transporte
                            público.
                        </p>
                    </div>
                    <div
                        className={`${styles.searchBox}`}
                    >
                        <div style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            justifyItems: "center",
                            marginBottom: "15px",
                            fontSize: "20px",
                            fontWeight: 600
                        }}>
                            <span>Digite para onde você deseja ir</span>
                        </div>
                        <Grid>
                            <BSelect
                                name="origem"
                                label="Origem"
                                placeholder="Selecione a sua origem"
                                options={Bairros}
                                onChange={handleOrigemChange}
                                col={5}
                            />
                            <BSelect
                                name="destino"
                                label="Destino"
                                placeholder="Selecione o seu destino"
                                options={Bairros}
                                onChange={handleDestinoChange}
                                col={5}
                            />
                            <LineFluid
                                col={2}
                                fillHeight
                            >
                                <Button
                                    severity="success"
                                    onClick={getPath}
                                    className="pi pi-search"
                                    style={{
                                        width: "100%",
                                        maxHeight: "76px",
                                        height: "100%"
                                    }}
                                    disabled={origem && destino ? false : true}
                                />
                            </LineFluid>
                        </Grid>
                    </div>
                </div>
                {openMap && origem && destino ?
                    <>
                        <Modal
                            headerLabel="Caminho"
                            resizable
                            draggable
                            visible={openMap}
                            callback={handleOpenMap}
                        >
                            <BMaps
                                origin={origem}
                                destination={destino}
                            />
                        </Modal>
                    </> :
                    <></>
                }
            </div>
            {contact ?
                <>
                    <Modal
                        headerLabel="Entre em contato com a SmartBus"
                        visible={contact}
                        callback={handleContact}
                    >
                        <Grid>
                            <Input
                                name={"nome"}
                                label={"Nome completo"}
                                placeholder={"Nome completo"}
                                col={12}
                            />
                            <Input
                                name={"number"}
                                label={"Número"}
                                placeholder={"Número"}
                                col={12}
                            />
                            <Input
                                name={"email"}
                                label={"Email"}
                                placeholder={"Email"}
                                col={12}
                            />
                            <LineFluid col={12}>
                                <Button label="Enviar" style={{
                                    width: "100%",
                                    height: "28px"
                                }}/>
                            </LineFluid>
                        </Grid>
                    </Modal>
                </> :
                <></>
            }
        </>
    );
}