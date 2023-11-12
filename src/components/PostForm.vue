<script>
export default {
    data(){
        return{
            post:{
                title: '',
                body: '',
            }
        }
    },
    methods:{
        createPost(){
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post={
                title: '',
                body: ''
            }
        },
    }
}
</script>

<template>
    <form @submit.prevent>
        <h3>Create post</h3>
        <my-input v-model="post.title" type="text" placeholder="Name"/>
        <my-input v-model="post.body" type="text" placeholder="Description"/>
        <my-button @click="createPost" class="btn" style="align-self: flex-end">Create post</my-button>
    </form>
</template>

<style>


form {
    display: flex;
    flex-direction: column;
}


</style>