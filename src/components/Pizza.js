import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { add } from "../action/cartAction";
export default function Pizza(props) {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const { pizzaData } = props;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClickAdd = () => {
    dispatch(add(pizzaData, quantity, varient));
  };
  return (
    <div>
      <div onClick={handleShow}>
        <h1>{pizzaData.name}</h1>

        <img src={pizzaData.image.pic} alt=""></img>
      </div>
      <div>
        <div>
          <span>Varients</span>
          <select value={varient} onChange={(e) => setVarient(e.target.value)}>
            {pizzaData.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div>
          <span>Quantity</span>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div>
        <div className="">
          {/* pizzaData.price[0][varient] => price[0] hoặc theo [varient]*/}
          <h1>Price: {pizzaData.prices[0][varient] * quantity} </h1>
        </div>
        <div>
          <button onClick={handleClickAdd}>Add To Cart</button>
        </div>
      </div>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{pizzaData.name}</p>
            <img src={pizzaData.image.pic} alt=""></img>
            <p>{pizzaData.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <button onClick={handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>{" "}
    </div>
  );
}
