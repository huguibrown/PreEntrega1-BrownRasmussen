import Item from "./Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map (ropa=> <Item key={ropa.id} info={ropa}/>)
    );
}

export default ItemList;