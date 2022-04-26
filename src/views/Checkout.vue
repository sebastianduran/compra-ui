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
  props: ['baseURL','products'],
  methods: {
    getAllItems() {
      axios
        .get(`${this.baseURL}cart/?token=${this.token}`)
        .then((response) => {
          if (response.status == 200) {
            let products = response.data;
            
            for (let i = 0; i < products.cartItems.length; i++) {
              this.checkoutBodyArray.push({
                product: products.cartItems[i].product
              });
              console.log('checkoutBodyArray getallitems', this.checkoutBodyArray);
            }
          }
        })
        .catch((err) => console.log(err));
    },
    goToCheckout() {
      const newOrder = {
        productList: this.checkoutBodyArray
      }

      console.log("token: ",this.token);
      console.log('checkoutBodyArray goto', newOrder);

        axios
          .post(
            `${this.baseURL}order/add/?token=${this.token}`,
            newOrder
          )
          .then(() => {
            swal({
              text: "Orden agregada",
              icon: "success",
            })
            //this.$router.push({ name: 'PaymentSuccess' });
          })
          .catch((err) => console.log(err));
      }
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