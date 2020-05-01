<template>
    <div>
        <div id="topTable">
          <div class="dropdown show mb-0">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  List By Category
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item text-white" @click="getByCategory()">All Products</a>
                  <a class="dropdown-item text-white" @click="getByCategory('sneakers')">sneakers</a>
                  <a class="dropdown-item text-white" @click="getByCategory('trekking')">trekking</a>
                  <a class="dropdown-item text-white" @click="getByCategory('boots')">boots</a>
                  <a class="dropdown-item text-white" @click="getByCategory('brogue')">brogue</a>
              </div>
          </div>
          <form class="form-inline" >
              <input v-model="search" class="searchBox form-control mr-sm-2" type="search" placeholder="Search by name" aria-label="Search">
          </form>
        </div>
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

                <tbody else v-for="product in shoes" :key="product.id">
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
import firebase from 'firebase'
export default {
  name: 'Table',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    shoes () {
      return this.$store.state.products.filter((el) => {
        return el.productName.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  },
  methods: {
    getByCategory (category) {
      this.$store.dispatch('getProducts', category)
    },
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
  #topTable {
      width: 98%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }
  .dropdown-menu {
      width: 220px;
      background: #4b4276;
      padding: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      border-top: 1px solid rgba(225, 225, 225, 0.05);
  }

  .dropdown {
      cursor: pointer;
      margin: 0 20px
  }
  .dropdown-item {
      cursor: pointer;
      width: 180px;
      background: #4b4276;
      padding: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      border-top: 1px solid rgba(225, 225, 225, 0.05);
  }
  .dropdown-item:hover {
      width: 180px;
      background: #594f8d;
      padding: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      border-top: 1px solid rgba(225, 225, 225, 0.05);
  }
  .searchBox {
    border: 2px solid #4b4276;
    background: none;
    outline: none;
    border-radius: 20px;
    margin-top: 15px;
  }
  .searchBox:focus {
    border: 2px solid #2ecc71;
  }
  @media screen and (max-width: 700px) {
    #tableProduct {overflow-x: scroll;}
  }

</style>
