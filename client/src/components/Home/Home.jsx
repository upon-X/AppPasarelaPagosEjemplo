import React from "react";
import styles from './Home.module.css'
import Productos from "../Productos/Productos";

export default function Home() {
    return (
        <>
            <h1>Todos los productos disponibles</h1>
            <Productos />
        </>
    )
}