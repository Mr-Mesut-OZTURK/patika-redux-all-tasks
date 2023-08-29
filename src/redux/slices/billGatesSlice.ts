import { createSlice } from "@reduxjs/toolkit"


export interface BillGatesType {
    totalMoney: number,
    totalCost: number,
    productList: [
        {
            description: string,
            id: number,
            title: string,
            category: string,
            image: string,
            count: number,
            price: number,
        }
    ] | [],

    chart: [
        {
            count: number,
            product: {
                id: number,
                title: string,
                category: string,
                image: string,
                count: string,
                description: string,
                price: number
            }
        }
    ],
}
// console.log(JSON.parse(
//     sessionStorage.getItem("billGates") ?? '{"totalMoney":10000}'
//     ))

const initialState: BillGatesType = {
    totalMoney: Number(JSON.parse(sessionStorage.getItem("billGates") || '{"totalMoney":10000}')?.totalMoney) ?? 10000,
    totalCost: Number(JSON.parse(sessionStorage.getItem("billGates") || '{"totalCost":0}')?.totalCost) ?? 0,
    productList: [],
    chart: JSON.parse(sessionStorage.getItem("billGates") || '{"chart":[]}')?.chart ?? []
}

export const billGatesSlice = createSlice({
    name: "billGates",
    initialState,
    reducers: {
        setProductList: (state, actions) => {
            state.productList = actions.payload
        },
        addToChart: (state, actions) => {
            const control = state.chart.find((item) => item?.product.id === actions.payload?.id)
            const product = state.productList.find((item) => item?.id === actions.payload?.id)
            if (control) {
                control.count += 1
            } else {
                state.chart.push({
                    count: 1,
                    product: actions.payload
                })
            }

            if (product) {
                product.count -= 1
                state.totalMoney -= product.price

            }

            // const totalCost = state.chart.map(item => item.count * item.product.price).reduce((a, b) => a + b, 0)

            sessionStorage.setItem("billGates", JSON.stringify(state))
        },
        removeFromChart: (state, actions) => {
            const control = state.chart.find((item) => item?.product.id === actions.payload?.id)
            const product = state.productList.find((item) => item?.id === actions.payload?.id)

            if (control) {
                control.count -= 1
            }
            // else{
            //     state.chart.push({
            //         count:0,
            //         product:actions.payload
            //     })
            // }

            if (product) {
                product.count += 1
                state.totalMoney += product.price

            }

            sessionStorage.setItem("billGates", JSON.stringify(state))
        },
    },
})

export const { setProductList, addToChart, removeFromChart } = billGatesSlice.actions

export default billGatesSlice.reducer