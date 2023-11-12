<script>
export default{
    name: 'my-input',
    props:{
        modelValue: [String, Number]
    },
    methods:{
        updateInput(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<template>
<input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<style scoped>
.input {
    width: 100%;
    border: 2px solid darkred;
    margin-bottom: 5px;
    padding: 15px 10px;
}
</style>