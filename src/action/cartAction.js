import { addToCart } from "../reducer/cartReducer";
export const add = (pizza, quantity, varient) => (dispatch) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  dispatch(addToCart(cartItem));

};
