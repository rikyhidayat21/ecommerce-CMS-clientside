<template>
  <tr class="border-bottom">
    <!-- {{ product }} -->
    <th scope="row">{{ product.id }}</th>
    <th style="width: 30%">{{ product.name }}</th>
    <td style="width: 10%">{{ product.price }}</td>
    <td style="width: 10%">{{ product.stock }}</td>
    <td style="width: 15%">
      <img class="rounded" :src="product.image_url" alt="" style="width: 80%">
    </td>
    <td class="text-center" style="width: 20%">
      <button class="btn btn-info mr-2" @click.prevent="toEditPage">Edit</button>
      <button class="btn btn-danger ml-2" @click.prevent="deleteProduct">Delete</button>
    </td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'TableRow',
  props: ['product'], // dapat dari binding di home
  methods: {
    toEditPage () {
      this.$router.push(`/edit-product/${this.product.id}`)
    },
    deleteProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteProduct', this.product.id)
              .then(response => {
                console.log(response)
                Swal.fire(
                  'Deleted!',
                  'Product has been deleted.',
                  'success'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
