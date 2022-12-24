import axios from "axios";
import {
  GetPizzaFailed,
  GetPizzaRequest,
  GetPizzaSuccess,
} from "../reducer/pizzaReducer";

export const getAllPizzas = () => async (dispatch) => {
  dispatch(GetPizzaRequest());
  try {
    const res = await axios.get("/api/pizzas/getallpizzas");
    dispatch(GetPizzaSuccess(res.data));
  } catch (error) {
    dispatch(GetPizzaFailed(error));
  }
};
