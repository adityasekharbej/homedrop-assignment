import React from "react";
import "./productcard.css";

export const ProductCard = ({ e,i }) => {
    function handleOpen(i){
        let openModal = document.getElementsByClassName('modal')
        openModal[i].style.display = 'block';
        let icon = document.getElementsByClassName('fa-ellipsis-vertical')
        icon[i].style.display = 'none';
    }
    function handleClose(i){
        let openModal = document.getElementsByClassName('modal')
        openModal[i].style.display = 'none';
        let icon = document.getElementsByClassName('fa-ellipsis-vertical')
        icon[i].style.display = 'block';
    }
  return (
    <div className="cardDiv">
      <div className="content" onClick={()=>handleClose(i)}>
      <div className="imageDiv">
        <img src={e.img} alt="" />
      </div>
      <div className="textDiv">
        <p className="brand">{e.brand}</p>
        <p>{e.title}</p>
        <div className="priceDiv">
          <p className="strike">₹{e.strikeoff}</p>
          <p>₹{e.price}</p>
        </div>
        {e.stock > 5 ? (
          <p style={{color:'green'}}>In Stock: {e.stock}</p>
        ) : e.stock <= 5 && e.stock > 0 ? (
          <p style={{color:'orange'}}>Low Stock: {e.stock}</p>
        ) : (
          <p style={{color:'red'}}>Out of Stock</p>
        )}
      </div>
      </div>
      <div className="menuDIv">
        <i class="fa-solid fa-ellipsis-vertical" onClick={()=>handleOpen(i)}></i>
      </div>
      <div className="modal">
        <p>Edit</p>
        <p>Delete</p>
        <p>Print Barcode</p>
      </div>
    </div>
  );
};
