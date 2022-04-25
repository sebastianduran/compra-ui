<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <!--            display image-->
      <div class="col-md-4 col-12">
        <img :src="product.imageURL" class="img-fluid" />
      </div>
      <!--            display product details-->
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.name }}</h4>
        <h6 class="catgory font-italic">{{ category.categoryName }}</h6>
        <h6 class="font-weight-bold">$ {{ product.price }}</h6>
        <h6 class="font-weight-bold">Disponibles: {{ product.stock }}</h6>
        <p>
          {{ product.description }}
        </p>
        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">Cantidad</span>
            </div>
            <input type="number" class="form-control" v-model="quantity" />
          </div>

          <div class="input-group col-md-3 col-4 p-0">
            <button
              class="btn"
              type="button"
              id="add-to-cart-button"
              @click="addToCart"
            >
              Agregar al carrito de compra
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  data() {
    return {
      product: {},
      category: {},
      quantity: 1,
    };
  },
  props: ["baseURL", "products", "categories"],
  methods: {
    // add to cart

    addToCart() {
      if (!this.token) {
        // user is not logged in
        // show some error
        swal({
          text: "Iniciar sesion para agregar productos al carrito de compra",
          icon: "error",
        });
        return;
      }

      // add to cart

      axios
        .post(`${this.baseURL}/cart/add?token=${this.token}`, {
          productId: this.id,
          quantity: this.quantity,
        })
        .then((res) => {
          if (res.status == 201) {
            swal({
              text: "Product added in cart",
              icon: "success",
            });
            this.$emit("fetchData");
          }
        })
        .catch((err) => console.log("err", err));
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find(
      (category) => category.id == this.product.categoryId
    );
    this.token = localStorage.getItem("token");
  },
};
</script>
<style>
.category {
  font-weight: 400;
}
</style>
