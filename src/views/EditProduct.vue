<template>
  <section>
    <div class="container justify-content-center col-6 mt-5">
      <div>
        <h3 class="text-center bg-info rounded shadow text-white">Edit Product</h3>
        <hr>
        <form class="my-4" @submit.prevent="editPage">
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
    this.fetchProductById ()
  },
  methods: {
    fetchProductById () {
      let productId = this.$route.params.id
      axios({
        url: `http://localhost:3000/products/${productId}`,
        method: 'put',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data, '<===== product')
          this.name = data.name
          this.image_url = data.image_url
          this.price = data.price
          this.stock = data.stock
        })
        .catch(err => {
          console.log(err, '<===== error ')
        })
    },
    // editProduct () {
    //   const productId = this.$route.params.id
    //   const payload = {
    //     name: this.name,
    //     image_url: this.image_url,
    //     price: this.price,
    //     stock: this.stock
    //   }
    //   axios({
    //     url
    //   })
    // }
  }

}
</script>

<style>

</style>
