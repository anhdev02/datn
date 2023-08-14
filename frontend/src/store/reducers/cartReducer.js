var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : { numberCart: 0, carts: [] };

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NUMBER_CART":
      return {
        ...state.numberCart,
      };
    case "ADD_CART":
      const productId = action.payload.id;
      const existingCartItem = state.carts.find(
        (item) => item.id === productId
      );

      if (existingCartItem) {
        const updatedCarts = state.carts.map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });

        return {
          ...state,
          carts: updatedCarts,
          numberCart: state.numberCart + action.payload.quantity,
        };
      } else {
        const newCart = {
          id: action.payload.id,
          quantity: action.payload.quantity,
          name: action.payload.name,
          image: action.payload.image,
          sale: action.payload.sale,
          price: action.payload.price,
        };
        const updatedCarts = [...state.carts, newCart];

        return {
          ...state,
          carts: updatedCarts,
          numberCart: state.numberCart + action.payload.quantity,
        };
      }

    case "INCREASE_QUANTITY":
      state.numberCart++;
      state.carts.find((item) => {
        return item.id == action.payload;
      }).quantity++;
      localStorage.setItem("CART", JSON.stringify(state));
      return {
        ...state,
      };
    case "DECREASE_QUANTITY": {
      state.numberCart--;
      state.carts.find((item) => {
        return item.id == action.payload;
      }).quantity--;
      localStorage.setItem("CART", JSON.stringify(state));
      return {
        ...state,
      };
    }
    case "DELETE_CART": {
      const deletedItem = state.carts[action.payload];
      if (!deletedItem) {
        return state;
      }
      const newState = {
        ...state,
        numberCart: state.numberCart - deletedItem.quantity,
        carts: state.carts.filter((item) => item.id !== deletedItem.id),
      };
      localStorage.setItem("CART", JSON.stringify(newState));
      return newState;
    }
    

    case "UPDATE_CART":
      let old_quantity = state.carts.find((item) => {
        return (item.id = action.payload);
      }).quantity;
      state.carts.find((item) => {
        return (item.id = action.payload);
      }).quantity = action.payload.quantity;
      state.numberCart -= old_quantity;
      state.numberCart += action.payload.quantity;
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default cartReducer;
