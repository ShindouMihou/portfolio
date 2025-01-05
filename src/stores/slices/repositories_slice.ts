import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GitHubRepository} from "@/types/GitHubRepository";
export const repositoriesSlice = createSlice({
    name: 'repositories',
    initialState: { repositories: [] as GitHubRepository[], isLoaded: false },
    reducers: {
        setRepositories: (state, action: PayloadAction<GitHubRepository[]>) => {
            state.repositories = action.payload
            state.isLoaded = true
        }
    }
})
export const { setRepositories } = repositoriesSlice.actions
export default repositoriesSlice.reducer