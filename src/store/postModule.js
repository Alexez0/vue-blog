import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostLoading: false,
        selectedSort: '',
        searchResult: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
            {value: 'title', name: 'by name'},
            {value: 'body', name: 'by description'},
        ],
    }),
    getters:{
        sortedPosts(state) {
            return [...state.posts].sort((a, b) => {
                return a[state.selectedSort]?.localeCompare(b[state.selectedSort])
            })
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchResult.toLowerCase()))
        }
    },
    mutations:{
        setPosts(state, posts){
            state.posts = posts
        },

        setLoading(state, bool){
            state.isPostLoading = bool
        },

        setPage(state, page){
            state.page = page
        },

        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort
        },

        setTotalPage(state, totalPages){
            state.totalPages = totalPages
        },

        setSearchResult(state, searchResult){
            state.searchResult = searchResult
        },

        setRemovePost(state, postId){
            state.posts = state.posts.filter(post => post.id !== postId);
        }
    },
    actions:{
        async getPosts({state, commit}) {
            try {
                commit("setLoading", true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit("setTotalPage", Math.ceil(response.headers['x-total-count'] / state.limit))
                commit("setPosts", response.data)
                commit("setLoading", false)
            } catch (e) {
                alert('Error!')
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit("setPage", state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit("setTotalPage", Math.ceil(response.headers['x-total-count'] / state.limit))
                commit("setPosts",[...state.posts, ...response.data])
            } catch (e) {
                alert('Error!')
            }
        },

    },
    namespaced: true
}