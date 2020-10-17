<template>
  <section>
    <div class="container">
      <button type="button" class="btn btn-primary mt-5 mb-3 float-left" @click="toAddProduct">Add Product</button>
      <button type="button" class="btn btn-danger mt-5 mb-3 float-right" @click="logout">Logout</button>

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
import Swal from 'sweetalert2'

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
    },
    logout () {
      // localStorage.clear()
      // this.$router.push({ name: 'Login' })
      Swal.fire({
        title: 'Are you sure wanna logout?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Logout!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            // this.$store.dispatch('deleteProduct', this.product.id)
            localStorage.clear()
            this.$router.push({ name: 'Login' })
              .then(response => {
                console.log(response)
                Swal.fire(
                  'Logout!',
                  // 'Product has been deleted.',
                  'success logout'
                )
              })
              .catch(err => {
                console.log(err)
              })
          }
        })
    }
  }
}
</script>
