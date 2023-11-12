<script>
import PostItem from "./PostItem.vue";
export default{
    props:{
        posts:{
            type: Array
        }
    },
    components:{
        PostItem
    }
}
</script>

<template>
  <div v-if="posts.length > 0">
      <h3>Post list</h3>
      <transition-group name="post-list">
          <post-item v-for="post in posts" :post="post" :key="post.id" @delete="$emit('delete', post)"/>
      </transition-group>
  </div>
  <h2 v-else style="color: darkred; text-align: center">Posts not found</h2>
</template>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid darkred;
    margin-top: 15px;
}
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.5s ease;

}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}



.post-list-move{
    transition: transform 0.5s ease;
}
</style>