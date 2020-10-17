<template>
  <section>
    <div class="container">
      <button type="button" class="btn btn-primary mb-3" @click="toAddProduct">Add Product</button>
      <table class="table table-hover mb-3">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Image</th>
            <th scope="col" class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            v-for="product in products"
            :key="product.id"
            :product="product"
          ></TableRow>
        </tbody>

      </table>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
import TableRow from '../components/TableRow'

export default {
  name: 'Home',
  //
  components: {
    TableRow
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  methods: {
    toAddProduct () {
      this.$router.push('/add-product')
    }
  }
}
</script>
