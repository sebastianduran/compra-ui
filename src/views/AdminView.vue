<template>
    <router-link :to="{name:'Category'}">
        <button class="btn btn-primary btn-lg">Editar Categorias</button>
    </router-link>
    <br>
    <router-link :to="{name:'Product'}">
        <button class="btn btn-primary btn-lg">Editar Productos</button>
    </router-link>
    <br>
</template>

<script>

export default({
    data() {
        
    },
})
</script>
<style scoped>
.btn{
    margin-bottom: 20px;
}
</style>