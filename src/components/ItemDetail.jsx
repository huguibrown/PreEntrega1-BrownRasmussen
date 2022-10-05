import React, {useState} from "react";
import '../App.css';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';


const ropa = [
    {id:1, image: "./images/CARTERA2.jpeg", category:"accesorios", title: "Cartera NGR"},
    {id:2, image: "./images/MARTI TOP.jpeg", category:"top", title: "Top SKADE"},
    {id:3, image: "./images/TOPBUZONEGRO2.jpeg", category:"top", title: "BUZO SKADE"},
    {id:4, image: "./images/TABAQUERAS.jpeg", category:"accesorios", title: "Tabaquera NGR"},
];


export const ItemDetail = ({data}) => {
    const [goToCart, setGotToCart]= useState(false);
    const onAdd = (quantity) =>{
        setGotToCart(true);
    }
    return (
        <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1> {data.title} </h1>
                    {
                        goToCart 
                        ? <Link to='/cart'> Realizar compra</Link>
                        : <ItemCount initial={ 1 } stock = { 5 } onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;