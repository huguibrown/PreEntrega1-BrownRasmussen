import React from "react";
import { Link } from "react-router-dom";


const ropa = [
    {id:1, image: "./images/CARTERA2.jpeg", category:"accesorios", title: "Cartera NGR"},
    {id:2, image: "./images/MARTI TOP.jpeg", category:"top", title: "Top SKADE"},
    {id:3, image: "./images/TOPBUZONEGRO2.jpeg", category:"top", title: "BUZO SKADE"},
    {id:4, image: "./images/TABAQUERAS.jpeg", category:"accesorios", title: "Tabaquera NGR"},
];

const Item =({info}) => { 
    return (
        <Link to={"/detalle/${info.id}"} className="ropa">
            <img src={info.image} alt="" />
            <p>{info.title}</p>
        </Link>
    );

}

export default Item; 