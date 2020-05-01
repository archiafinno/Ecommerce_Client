<template>
    <div>
        <div id="tableOrder">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Checkout</th>
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
  #tableOrder {
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
  .sent i {
    margin-right: 10px;
  }
  @media screen and (max-width: 1024px) {
    #tableOrder {overflow-x: scroll;}
  }
</style>
