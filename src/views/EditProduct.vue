<template>
  <section>
    <div class="container justify-content-center col-6 mt-5">
      <div>
        <h3 class="text-center bg-info rounded shadow text-white">Edit Product</h3>
        <hr>
        <form class="my-4" @submit.prevent="editProduct">
          <div class="form-group">
            <label for="name">name</label>
            <input type="text" v-model="name" class="form-control" name="edit-name" id="edit-name"/>
          </div>
          <div class="form-group">
            <label for="image_url">image url</label>
            <input type="text" v-model="image_url" class="form-control" name="edit-image_url" id="edit-image_url" />
          </div>
          <div class="form-group">
            <label for="price">price</label>
            <input type="integer" v-model="price" class="form-control" name="edit-price" id="edit-price" />
          </div>
          <div class="form-group">
            <label for="stock">stock</label>
            <input type="text" v-model="stock" class="form-control" name="edit-stock" id="edit-stock" />
          </div>

          <button id="btn-edit" type="submit" class="btn btn-info">
            Submit
          </button>
        </form>
          <!-- <button id="btn-edit" type="submit" @click.prevent="backToHomePage" class="btn btn-danger float-left">
            Cancel
          </button> -->
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  created () {
    console.log(this.$route.params.id, '====<< ini id product')
    // this.fetchProductById ()
    this.$store.dispatch('fetchProductById', this.$route.params.id)
  },
  computed: { // untuk mengambil datanya
    product () {
      return this.$store.state.product
    }
  },
  watch: {
    product () {
      this.name = this.product.name
      this.image_url = this.product.image_url
      this.price = this.product.price
      this.stock = this.product.stock
    }
  },
  methods: {
    editProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        productId: this.$route.params.id
      }
      this.$store.dispatch('editProduct', payload)
    }
  }

}
</script>

<style>

</style>
