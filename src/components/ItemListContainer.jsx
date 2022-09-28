import React from "react";
import Title from "./Title";
import Navbar from "./Navbar";
import BurguerButton from "./BurguerButton";
import ItemCount from "./ItemCount";

export const ItemListContainer = ({texto}) => {

    const onAdd = (quantity) =>{
        console.log(`Se añadieron ${quantity} unidades al carrito`);
    }
    return (
        <>
        <Title greeting= {texto} />
        <ItemCount initial={ 1 } stock = { 5 } onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;
