<template>
    <div id="formEdit">
        <form @submit.prevent="editProduct">
            <h3>Edit Product {{product.id}}</h3>
            <hr><br>
            <div class="form-group">
                <input v-model="data.productName" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product Name">
            </div>
            <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1" v-model="data.category">
                <option value="sneakers">sneakers</option>
                <option value="boots">boots</option>
                <option value="trekking">trekking</option>
                <option value="brogue">brogue</option>
                <option value="derby">derby</option>
                </select>
            </div>
            <!-- <div class="custom-file">
                <input @change="imageUpload" type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose image file or url</label>
            </div> -->
            <div class="form-group">
                <input v-model="data.imageUrl" type="text" class="form-control" id="exampleFormControlInput1" placeholder="image url">
            </div>
            <div id="number">
                <div class="form-group in-number col-6">
                    <label for="stock">Stock: </label>
                    <input v-model="data.stock" class="form-control" type="number" id="stock" name="stock">
                </div>
                <div class="form-group in-number col-6">
                    <label for="price">Price: </label>
                    <input v-model="data.price" class="form-control" type="number" id="price" name="price">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'FormProduct',
  props: ['product'],
  data() {
      return {
          data: {
            id: this.product.id,
            productName: this.product.productName,
            imageUrl: this.product.imageUrl,
            stock: this.product.stock,
            price: this.product.price,
            category: this.product.category
          }
        // data: {
        //     productName: '',
        //     imageUrl: '',
        //     stock: '',
        //     price: '',
        //     category: ''
        // }
      }
  },
  methods: {
      editProduct() {
        console.log(`data form edit`)
        const payload = {
            id: this.data.id,
            productName: this.data.productName,
            imageUrl: this.data.imageUrl,
            stock: this.data.stock,
            price: this.data.price,
            category: this.data.category
        }
        console.log(`payload form edit`,payload)
        console.log(`============ini idnya==========`, payload.id)
        console.log(`edit product`)
        console.log( `ini payload.id`,payload.id)
        axios({
            method: 'put',
            url:  `http://localhost:3000/products/${payload.id}`,
            headers: {
            token: localStorage.getItem('token')
            },
            data: payload
        })
        .then(({data}) => {
            console.log(`berhasil edit product`)
            console.log(data)
        })
        .catch(err => {
            console.log(`err editing: `, err.response.data.errors)
        })
        // this.$store.dispatch('editProduct', payload)
        // .then(res => {
        //     console.log(`ressss`,res)
        //     this.data.productName = ''
        //     this.data.imageUrl = ''
        //     this.data.stock = ''
        //     this.data.price = ''
        //     this.data.category = ''
        // })
      },
      imageUpload(event) {
          this.product.imageUrl = event.target.files[0]
      }
  }
}
</script>
<style>
    #formEdit {
        padding: 20px;
        border-radius: 10px;
        border: 1px solid lightgray;
        width: 90%;
        margin: 50px auto;
        box-shadow: 7px 7px 7px 0 grey
    }
    #number {
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .in-number{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

</style>
