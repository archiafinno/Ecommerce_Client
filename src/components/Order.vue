<template>
    <div>
        <!-- <div id="topTable">
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
          <form class="form-inline my-2 my-lg-0" >
              <input v-model="search" class="searchBox form-control mr-sm-2" type="search" placeholder="Search by name" aria-label="Search">
          </form>
        </div> -->
        <div id="tableProduct">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Checkout at</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody v-for="(item, i) in carts" :key="i">
                    <tr>
                      <td>{{i + 1}}</td>
                      <td>{{item.Product.productName}}</td>
                      <td>{{item.quantity}}</td>
                      <td>{{item.totalPrice | currency}}</td>
                      <td>{{new Date(item.updatedAt).toString().substring(4, 25)}}</td>
                      <td><a v-if="!item.isSent" href="#" @click="send(item.Product.productName, item.id, item.UserId, item.Product.imageUrl)"><i class="fas fa-truck"></i></a>
                      <a v-else class="sent" ><i class="fas fa-check-circle"></i>sent</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// import Swal from 'sweetalert2'
// import socket from '../config/socket.js'
export default {
  name: 'Table',
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  methods: {
    send (productName, id, UserId, imageUrl) {
      const payload = {
        productName,
        id,
        UserId,
        imageUrl
      }
      this.$store.dispatch('send', payload)
        .then(({ data }) => {
          console.log('success send')
          this.$store.dispatch('fetchCarts')
          this.$toasted.show('Successfully send the product', {
            theme: 'bubble',
            position: 'top-right',
            duration: 3000,
            type: 'success'
          })
        })
        .catch(err => {
          console.log('err send', err.response.data.errors[0].message)
          this.$toasted.show(err.response.data.errors[0].message, {
            theme: 'bubble',
            position: 'top-right',
            duration: 3000,
            type: 'error'
          })
        })
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
    // socket.on('pleaseFetch', () => {
    //   this.$store.dispatch('fetchCarts')
    // })
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
  .sent i {
    margin-right: 10px;
  }
  /* .dropdown-menu {
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
  }
  .searchBox:focus {
    border: 2px solid #2ecc71;
  } */
</style>
