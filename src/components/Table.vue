<template>
    <div>
        <CatButton></CatButton>
        <div id="tableProduct">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody else v-for="product in this.$store.state.products" :key="product.id">
                    <tr>
                        <td>{{product.productName}}</td>
                        <td><img :src="product.imageUrl" alt=""></td>
                        <td>{{product.stock}}</td>
                        <td>{{product.price | currency}}</td>
                        <td>{{product.category}}</td>
                        <td>
                            <div class="d-flex justify-content-around">
                                <router-link :to="{ name: 'EditProduct', params: { product: product }}">
                                    <a href="#"><i class="fas fa-edit"></i></a>
                                </router-link>
                            <div>
                                <p>|</p>
                            </div>
                                <a href="#" @click="deleteProduct(product.id, product.imageUrl)"><i class="fas fa-trash-alt"></i></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import CatButton from './CatButton.vue'
import firebase from 'firebase'
export default {
  name: 'Table',
  components: {
    CatButton
  },
  methods: {
    deleteProduct (payload, imageUrl) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('delete', payload)
            .then(result => {
              firebase.storage().refFromURL(imageUrl).delete()
              console.log(result)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>
<style>
  #nullProd {
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      font-family: tahoma;
  }
  .table img{
      width: 200px;
  }
  th {
      vertical-align: center;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
      font-family: 'tahoma';
  }
  td {
      vertical-align: center;
      text-align: center;
      font-size: 17px;
      font-weight: bold;
      font-family: 'tahoma';
  }
  .table{
      border: 0.2px solid lightgrey;
  }
  #tableProduct {
      margin: auto;
      width: 98%;
      overflow-y: scroll;
      overflow-x: hidden;
      box-shadow: 10px 10px 10px 0 grey;
      max-height: 85vh;
  }
  ::-webkit-scrollbar {
      width: 5px;
  }

  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 1px;
  }

  ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 2px;
  }
</style>
