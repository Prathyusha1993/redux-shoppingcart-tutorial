import { replaceData } from "./cart-slice";
import { uiActions } from "./ui-slice";

// export const fetchData = () => {
//   return async (dispatch) => {
//     const fetchHandler = async () => {
//       const res = await fetch(
//         "https://redux-shopping-cart-12c6b-default-rtdb.firebaseio.com/cartItems.json"
//       );
//       const data = await res.json();
//       return data;
//     };
//     try {
//       const cartData = await fetchHandler();
//       dispatch(replaceData(cartData));
//     } catch (err) {
//       dispatch(
//         uiActions.showNotification({
//           open: true,
//           message: "Sending Request to fetch data is Failed",
//           type: "error",
//         })
//       );
//     }
//   };
// };

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      //SEND state as sending request

      const res = await fetch(
        "https://redux-shopping-cart-12c6b-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      //send state as request is successful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent Request to Database Succesfully",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request Failed",
          type: "error",
        })
      );
    }
  };
};
