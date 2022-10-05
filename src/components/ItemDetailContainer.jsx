import React , {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ropas = [
    {id:1, image: "./images/CARTERA2.jpeg", category:"accesorios", title: "Cartera NGR"},
    {id:2, image: "./images/MARTI TOP.jpeg", category:"top", title: "Top SKADE"},
    {id:3, image: "./images/TOPBUZONEGRO2.jpeg", category:"top", title: "BUZO SKADE"},
    {id:4, image: "./images/TABAQUERAS.jpeg", category:"accesorios", title: "Tabaquera NGR"},
];

export const ItemDetailContainer = () => {
    const [data,setData]= useState({});
    const {detalleId} = useParams()
    useEffect(() => {
        const getData = new Promise ( resolve => {
            setTimeout(()=>{
                resolve(ropas)
            }, 2000 );
        });
        getData.then(res => setData(res.find (ropa=> ropa.id === parseInt(detalleId))));
    }, []);
    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;