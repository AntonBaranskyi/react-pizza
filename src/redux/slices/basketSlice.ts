import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IBasket {
  id: number;
  title: string;
  imageUrl: string
  price: number;
  count: number;
}
interface IState {
  items: IBasket[];

  totalPrice: number;
  totalCount: number;

}
const initialState: IState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const pizzaSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addPizzaItem: (state, action: PayloadAction<IBasket>) => {
      const findId = state.items.find((item) => item.id === action.payload.id);

      if (findId) {
        findId.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      const price = state.items.reduce((acumulator, current) => {
        return acumulator + current.count * current.price;
      }, 0);

      state.totalPrice = price;

      const sumCount = state.items.reduce((sum, current) => {
        return current.count + sum;
      }, 0);
      state.totalCount = sumCount;
    },

    clearAllPizza: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },

    addPizzaPlus: (state, action: PayloadAction<number>) => {
      const index = state.items.find((item) => item.id === action.payload);
      state.totalCount++;
      if (index) {
        index.count++;
      }
    },

    pizzaMinus: (state, action: PayloadAction<number>) => {
      const index = state.items.find((item) => item.id === action.payload);
      state.totalCount--;
      if (index) {
        index.count--;
      }
    },

    deletePizza: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((obj) => obj.id === action.payload);

      const before = state.items.slice(0, index);
      const after = state.items.slice(index + 1);

      state.items = [...before, ...after];
    },
  },
});

export const {
  addPizzaItem,
  clearAllPizza,
  deletePizza,
  addPizzaPlus,
  pizzaMinus,
} = pizzaSlice.actions;
export default pizzaSlice.reducer;
