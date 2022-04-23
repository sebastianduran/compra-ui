<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">Agregar Categoria</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label>Nombre de la Categoria</label>
                        <input type="text" class="form-control" v-model="categoryName"/>
                    </div>
                    <div class="form-group">
                        <label>Descripción de la Categoria</label>
                        <textarea type="text" class="form-control" v-model="description"/>
                    </div>
                    <div class="form-group">
                        <label>Imagen de la Categoria</label>
                        <input type="text" class="form-control" v-model="imageUrl"/>
                    </div>
                    <button type="button" class="btn btn-primary" @click="addCategory">Agregar</button>
                </form>  
            </div>
            <div class="col-3"></div>
            
        </div>
    </div>
    
</template>

<script>

const axios = require("axios");
const sweetalert = require("sweet-alert");

export default {
    
    data() {
        return {
            categoryName: "",
            description: "",
            imageUrl: ""
        }
    },
    methods: {
        
    }
}
</script>
<style scope></style>