<script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue"
import MyDialog from "../components/UI/MyDialog.vue";
import MyButton from "../components/UI/MyButton.vue";
import MySelect from "../components/UI/MySelect.vue";
import MyInput from "../components/UI/MyInput.vue";
import {mapState, mapGetters, mapActions, mapMutations} from "vuex"

export default {
    components: {
        MyInput,
        MySelect,
        MyButton,
        MyDialog,
        PostForm,
        PostList
    },
    data() {
        return {
            dialogVisible: false,

        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchResult',
            setSelectedSort: 'post/setSelectedSort',
        }),
        ...mapActions({
            getPosts: 'post/getPosts',
            loadMorePosts: 'post/loadMorePosts'
        }),
        createPost(post) {
            this.posts.unshift(post)
            this.dialogVisible = false
        },
        deletePost(post) {
            this.$store.commit('post/setRemovePost', post.id);
        },
        showDialog() {
            this.dialogVisible = true
        },

    },
    mounted() {
        this.getPosts()
        let options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        let callback = (entries, observer) => {
            if(entries[0].isIntersecting && this.page < this.totalPages){
                this.loadMorePosts()
            }
        };
        let observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.border)
    },
    computed:{
        ...mapState({
            posts: state => state.post.posts,
            isPostLoading: state => state.post.isPostLoading,
            selectedSort: state => state.post.selectedSort,
            searchResult: state => state.post.searchResult,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
    }
}
</script>

<template>
    <div>
        <my-input
                :model-value="searchResult"
                @update:model-value="setSearchQuery"
                placeholder="Search..."/>
        <div class="app__btns">
            <my-button @click="showDialog">Create Post</my-button>

            <my-select :model-value="selectedSort"
                       :options="sortOptions"
                       @update:model-value="setSelectedSort"/>
        </div>


        <my-dialog
            v-model:show="dialogVisible">
            <post-form
                @create="createPost"/>
        </my-dialog>
        <post-list
            :posts="sortedAndSearchedPosts"
            @delete="deletePost"
            v-if="!isPostLoading"
        />
        <div v-else>Loading...</div>
        <div ref="border" class="end"></div>
    </div>
</template>

<style>


.app__btns {
    margin: 15px 0 20px 0;
    display: flex;
    justify-content: space-between;
}
.page__wrapper{
    display: flex;
    margin-top: 15px;
}
.page{
    border: 1px solid darkred;
    padding: 10px;
}
.current-page{
    color: white;
    background-color: darkred;
}
.end{
    height: 30px;
    background: transparent;
}
</style>