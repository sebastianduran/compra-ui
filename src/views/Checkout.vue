<template>
  <div class="div_class">
    <h3>... pago ...</h3>


    <button class="btn btn-primary" @click="goToCheckout">Realizar pago</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      stripeAPIToken:
        'pk_test_51Hr18ILR0wfBoBqmrZFhIWWOk0CA8PFS3cEMwh4S1S6jRUzVucZ26dbGIYRk5ezdYlMgUkQmYHGJOsKR35uEHgvV00IXALUhYx',
      stripe: '',
      token: null,
      checkoutBodyArray: [],
    };
  },
  name: 'Checkout',
  props: ['baseURL'],
  methods: {
    getAllItems() {
      axios
        .get(`${this.baseURL}cart/?token=${this.token}`)
        .then((response) => {
          if (response.status == 200) {
            let products = response.data;
            for (let i = 0; i < products.cartItems.length; i++) {
              this.checkoutBodyArray.push({
                price: products.cartItems[i].product.price,
                quantity: products.cartItems[i].quantity,
                productName: products.cartItems[i].product.name,
                productId: products.cartItems[i].product.id,
              });
            }
          }
        })
        .catch((err) => console.log(err));
    },
    goToCheckout() {
      console.log('checkoutBodyArray', this.checkoutBodyArray);
      axios
        .post(
          `${this.baseURL}order/create-checkout-session`,
          this.checkoutBodyArray
        )
        .then(() => {
          swal({
                        text: "Producto agregado",
                        icon: "success"
                    });
            this.$router.push({ name: 'PaymentSuccess' });
        })
        .catch((err) => console.log(err));
        
    },
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.getAllItems();
  },
};
</script>
<style scoped>
.alert {
  width: 50%;
}
.div_class {
  margin-top: 5%;
  margin-left: 30%;
}
</style>