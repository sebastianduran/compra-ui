<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
            <h4>
              Pago recibido
            </h4>
            </div>
        </div>
        <div class="row">
            <!-- Muestra todos los produntos en el componente product box
            <div v-for="product of products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <ProductBox :product="product"/>
            </div>-->
        </div>
    </div>
</template>
<script>
import ProductBox from "../../components/Product/ProductBox.vue"
export default {
  data() {
    return {
      orderItems: [],
      token: null,
      totalCost: 0,
    };
  },
    components: { ProductBox },
    props:["baseURL"],
    methods: {
      listOrders() {
        axios
          .get(`${this.baseURL}order/list?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.orderItems = result.orderItems;
          })
          .catch((err) => console.log('err', err));
      },
    },
    mounted() {
      this.token = localStorage.getItem('token');
      this.listCartItems();
    },
}
</script>