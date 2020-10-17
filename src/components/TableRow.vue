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
      <button class="btn btn-info mr-2" @click="toEditPage">Edit</button>
      <button class="btn btn-danger ml-2">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: ['product'], // dapat dari binding di home
  methods: {
    toEditPage () {
      this.$router.push(`/edit-product/${this.product.id}`)
    },
    
  },
  // created () {
  //   console.log(this.$route.params.id, '<==== ini id product di tablerow')
  //   this.$store.dispatch('deleteProduct', this.$route.params.id)
  // },
  // computed: {
  //   product () {
  //     return this.$store.state.product
  //   }
  // },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
