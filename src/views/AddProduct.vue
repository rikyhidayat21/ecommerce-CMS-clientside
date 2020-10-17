<template>
  <section>
    <div class="container justify-content-center col-4 mt-5 mb-5">
      <div>
        <h3 class="text-center bg-info rounded shadow text-white">Add Product</h3>
        <hr>
        <form class="my-4" @submit.prevent="addNewProduct">
          <div class="form-group">
            <label for="name">name</label>
            <input type="text" v-model="name" class="form-control" name="add-name" id="add-name"/>
          </div>
          <div class="form-group">
            <label for="image_url">image url</label>
            <input type="text" v-model="image_url" class="form-control" name="add-image_url" id="add-image_url" />
          </div>
          <div class="form-group">
            <label for="price">price</label>
            <input type="integer" v-model="price" class="form-control" name="add-price" id="add-price" />
          </div>
          <div class="form-group">
            <label for="stock">stock</label>
            <input type="integer" v-model="stock" class="form-control" name="add-stock" id="add-stock" />
          </div>

          <button id="btn-add" type="submit" class="btn btn-info float-left">
            Submit
          </button>
        </form>
          <button id="btn-add" type="submit" @click.prevent="backToHomePage" class="btn btn-danger float-right">
            Cancel
          </button>
      </div>
    </div><br>
  </section>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    addNewProduct () {
      this.$store.dispatch('addNewProduct', {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      })
      this.$router.push({ name: 'Home' })
    },
    backToHomePage () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>
