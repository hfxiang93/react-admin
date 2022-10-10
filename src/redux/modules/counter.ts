/*
 * @Descripttion:
 * @Author: xianghaifeng
 * @Date: 2022-10-10 10:07:35
 * @LastEditors: xianghaifeng
 * @LastEditTime: 2022-10-10 10:55:40
 */
import { CounterState } from "@/redux/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterState: CounterState = {
	number1: 0,
	number2: 0
};

const counterSlice = createSlice({
	name: "counter",
	initialState: counterState,
	reducers: {
		setAddNumber1(state: CounterState) {
			state.number1 += 1;
		},
		setReduceNumber1(state: CounterState) {
			state.number1 -= 1;
		},
		setNumber1(state: CounterState, { payload }: PayloadAction<number>) {
			state.number1 = payload;
			state.number2 = payload - 1;
		},
		resetState(state: CounterState) {
			state.number1 = 0;
			state.number2 = 0;
		}
	}
});
export const { setAddNumber1, setReduceNumber1, setNumber1, resetState } = counterSlice.actions;
export default counterSlice.reducer;
