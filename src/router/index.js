import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import Category from '../views/Category/Category.vue'
import Product from '../views/Product/Product.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Success from '../views/payment/Success.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView
  },
  {
    path: '/admin/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  // category edit
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  }
  ,
  // product edit
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },

  // show details of product
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component: Success,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
