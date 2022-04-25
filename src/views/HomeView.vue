<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded" id="heading">
            Titulo </h3>
            <p class="lead mb-0 p-1 rounded"> App Cocompra, para probar api en prueba técnica</p>
        </header>
      </div>
    </div>

    <!--    display categories-->
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3"> Categorias</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="index in this.categorySize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <CategoryBox :category="categories[index-1]" />
        </div>
      </div>
    </div>

  <!--    display top products-->
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3"> Productos</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="index in this.productSize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductBox :product="products[index-1]" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CategoryBox from "../components/Category/CategoryBox";
import ProductBox from "../components/Product/ProductBox";
export default {
  name: "home",
  components: {ProductBox, CategoryBox},
  props: ["categories", "products"],
  data() {
    return {
      categorySize: 0,
      productSize: 0
    }
  },
  mounted() {
    this.categorySize = Math.min(6, this.categories.length );
    this.productSize = Math.min(8, this.products.length);
  }
};
</script>
<style>

  #heading {
    font-weight: 400;
    color: orangered;
  }
  #background-div > div > header > p{
    color: black;
  }
  div > h2{
    color: orangered; 
  }
</style>