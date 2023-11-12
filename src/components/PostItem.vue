<script>

export default {
    props:{
        post:{
            type: Object,
            required: true
        }
    },
}
</script>

<template>
    <div class="post">
        <div>
            <div><strong>Id: </strong>{{post.id}}</div>
            <div><strong>Name: </strong>{{ post.title }}</div>
            <div><strong>Description: </strong>{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button @click="$router.push(`/posts/${post.id}`)">Open post</my-button>
            <my-button @click="$emit('delete',post)">Delete post</my-button>
        </div>
    </div>
</template>

<style>
.post {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 2px solid darkred;
    margin-top: 15px;
}
.post__btns button{
    margin-left: 5px;
}
</style>