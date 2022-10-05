import React, {useEffect, useState} from "react";
import Title from "./Title";
import Navbar from "./Navbar";
import BurguerButton from "./BurguerButton";
import ItemList from "./ItemList";

import { useParams } from 'react-router-dom';


const ropa = [
    {id:1, image: "./images/CARTERA2.jpeg", category:"accesorios", title: "Cartera NGR"},
    {id:2, image: "./images/MARTI TOP.jpeg", category:"tops", title: "Top SKADE"},
    {id:3, image: "./images/TOPBUZONEGRO2.jpeg", category:"tops", title: "BUZO SKADE"},
    {id:4, image: "./images/TABAQUERAS.jpeg", category:"accesorios", title: "Tabaquera NGR"},
];

export const ItemListContainer = ({texto}) => {
    
    const [data, setData] = useState([]);

    const {categoriaId}= useParams();

    useEffect(()=> {
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(ropa)
            }, 2000);
            
        });
        if(categoriaId){
            getData.then(res => setData (res.filter(ropa => ropa.category === categoriaId)));
        }else {
            getData.then(res => setData(res))
        }
        
    }, [categoriaId])

    
    return (
        <>
        <Title greeting= {texto} />
        
        <ItemList data={data}/>
        
        </>
    );
}

export default ItemListContainer;
