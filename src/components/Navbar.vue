<script>

</script>

<template>
<div class="navbar">
    <div @click="$router.push('/')" style="cursor: pointer">My Blog</div>
    <div class="navbar__btns">
        <my-button @click="$router.push('/posts')">Posts</my-button>
        <my-button @click="$router.push('/about')">About us</my-button>
    </div>
</div>
</template>

<style scoped>
.navbar{
    display: flex;
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns{
    margin-left: auto;
}
.navbar__btns button{
    margin-left: 5px;
}
</style>