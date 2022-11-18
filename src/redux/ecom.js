import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    product: [],
    loading: false,
    error: "",
};

export const fetchMarket = createAsyncThunk(
    "product/fetchMarket",
    async (url) => {

        const response = await axios.get(url);
        return response.data;
    }
);

const marketSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addJumlah: (state, action) => {
            state.product[action.payload - 1].jumlah += 1
            console.log(state.product[action.payload - 1].jumlah);
        },
        minJumlah: (state, action) => {
            state.product[action.payload - 1].jumlah -= 1
            console.log(state.product[action.payload - 1].jumlah);
        },
        addCart: (state, action) => {
            state.product[action.payload - 1].cart += 1
            console.log(state.product[action.payload - 1].cart);
        },
        minCart: (state, action) => {
            if (state.product[action.payload - 1].cart > 0) {
                state.product[action.payload - 1].cart -= 1
                console.log(state.product[action.payload - 1].cart);
            }
        },
        inputCart: (state, action) => {
            state.product[action.payload.id - 1].cart = action.payload.value
            console.log(action.payload);
        },
        resetCart: (state) => {
            state.product.map((data, ind) => {
                console.log(ind);
                state.product[ind].cart = 0
            })
        },
        setCart: (state, action) => {
            state.product.map((data, ind) => {
                state.product[ind].cart = action.payload[ind]
            })
        },
        addRecap: (state, action) => {
            state.product.map((data, ind) => {
                if (state.product[ind].cart <= state.product[ind].jumlah) {
                    state.product[ind].jumlah -= state.product[ind].cart
                    state.product[ind].recap += state.product[ind].cart
                    state.product[ind].cart = 0
                }
            })
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchMarket.pending, (state) => {
            return { ...state, loading: true };
        });
        builder
            .addCase(fetchMarket.fulfilled, (state, action) => {
                if (state.product.length === 0) {

                    const list = []
                    action.payload.map((val) => (
                        list.push({ val, jumlah: 20, cart: 0, recap: 0 })
                    ))
                    console.log(list);
                    return { ...state, product: list, loading: false };
                } else {
                    console.log('dah berisi');
                    return { ...state, loading: false };
                }
            })
            .addCase(fetchMarket.rejected, (state, action) => {
                console.log("rejected");
                return { ...state, loading: false, error: action.error.message };
            });
    },
});

export const { addCart, minCart, inputCart, resetCart, setCart, addJumlah, minJumlah, addRecap } = marketSlice.actions
export default marketSlice.reducer;
