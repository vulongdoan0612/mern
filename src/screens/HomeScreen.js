import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomeScreen.css";
import Pizza from "../components/Pizza";
import data from "../pizzadata";
import { getAllPizzas } from "../action/pizzaAction";
import axios from "axios";
export default function HomeScreen() {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.pizzaReducer);
  console.log(pizzaState.request);
  useEffect(() => {
    dispatch(getAllPizzas());
    // getAllPizzas();
  }, [dispatch]);
  return (
    <div>
      <h1>{data.length}</h1>
      {pizzaState.request ? (
        <h1>Loading ...</h1>
      ) : pizzaState.failed ? (
        <h1>Error</h1>
      ) : (
        <>
          <div className="pizzaList">
            {data.map((pizza) => {
              return (
                <div key={pizza._id}>
                  <Pizza pizzaData={pizza}></Pizza>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
