import React, { useState } from "react";
import styles from './Productos.module.css'
import productos from '../../../productos.json'
import axios from 'axios'

export default function Productos() {
    const handleBuy = async (producto) => {
        const response = await axios.post("http://localhost:4000/Mercado_Pago", producto)
        window.location.href = response.data
    }
    // const tarjetaDePrueba = {
    //     numero: "5031 7557 3453 0604",
    //     codSeg: "123",
    //     fechaVenc: "11/25"
    // }
    return (
        <>
            <div className={styles.container_product}>
                {productos.map((e) => (
                    <div className={styles.producto}>
                        <img className={styles.img_producto} src={e.imagen} />
                        <p className={styles.nombre_producto}>{e.nombre}</p>
                        <p className={styles.precio_producto}>{`$ ${e.precio}`}</p>
                        <button onClick={() => handleBuy(e)}>Comprar</button>
                    </div>
                ))}
            </div>
        </>
    )
}
