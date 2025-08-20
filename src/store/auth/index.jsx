import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: "sevvallkarahann",
        fullname: "Şevval Karahan",
        avatar: 'https://pbs.twimg.com/profile_images/1882772890505863168/I7CKMqRk_400x400.jpg'
    },
    accounts: [
        {
            id: 1,
            username: "sevvallkarahann",
            fullname: "Şevval Karahan",
            avatar: 'https://pbs.twimg.com/profile_images/1882772890505863168/I7CKMqRk_400x400.jpg'
        },
        {
            id: 2,
            username: "amerikanhastanesi",
            fullname: "Amerikan Hastanesi",
            avatar: 'https://pbs.twimg.com/profile_images/1858438661718650880/hWytGZ54_400x400.jpg'
        },
    ]

}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter((account) => account.id !== action.payload)
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer