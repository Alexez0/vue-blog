<script>
  export default {
      name: 'my-button'
  }
</script>

<template>
<button class="btn">
<slot></slot>
</button>
</template>

<style>
.btn {
    padding: 10px;
    border: 2px solid darkred;
    background: none;
    cursor: pointer;
}
</style>