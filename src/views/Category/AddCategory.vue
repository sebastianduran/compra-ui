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
        addCategory(){
            const newCategoty = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl
            };

            const baseUrl = "https://app-cocompra.herokuapp.com";

            axios({
                method: 'POST',
                url: `${baseUrl}/category/create`,
                data: JSON.stringify(newCategoty),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(()=>{
                sweetalert({
                    text: "Categoria agregada con exito",
                    icon: "success"
                })
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>
<style scope></style>