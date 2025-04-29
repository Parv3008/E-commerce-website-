export const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const exists = state.find((item) => item.id === action.payload.id);
        if (exists) {
          return state?.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item?.quantity + 1 }
              : item
          );
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }
  
      case 'REMOVE_FROM_CART':
        return state.filter((item) => item.id !== action.payload.id);
  
      case 'INCREMENT':
        return state?.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item?.quantity + 1 }
            : item
        );
  
      case 'DECREMENT':
        return state?.map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item?.quantity - 1 }
            : item
        );
  
      default:
        return state;
    }
  };
  