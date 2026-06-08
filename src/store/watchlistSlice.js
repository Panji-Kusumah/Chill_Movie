import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movieRows: {},
    watchlist: []
}

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        setMoviesByCategory: (state, action) => {
            const { key, movies } = action.payload
            state.movieRows[key] = movies
        },
        addToWatchlist: (state, action) => {
            const movie = action.payload
            const exists = state.watchlist.find(
                item => item.id === movie.id
            )
            if (!exists) {
                state.watchlist.unshift(movie)
            }
        },
        removeFromWatchlist: (state, action) => {
            const movieId = action.payload
            state.watchlist = state.watchlist.filter(
                item => item.id !== movieId
            )
        }
    }
})

export const {
    setMoviesByCategory,
    addToWatchlist,
    removeFromWatchlist
} = watchlistSlice.actions

export default watchlistSlice.reducer