<template>
    <div id="formAdd">
        <Banner/>
        <form @submit.prevent="addProduct">
            <h3>Add Product</h3>
            <hr><br>
            <div class="form-group">
                <input v-model="product.productName" type="text" class="form-control long" id="exampleFormControlInput1" placeholder="Product Name">
            </div>
            <div class="form-group">
                <select class="form-control long" id="exampleFormControlSelect1" v-model="product.category">
                <option value="sneakers">sneakers</option>
                <option value="boots">boots</option>
                <option value="trekking">trekking</option>
                <option value="brogue">brogue</option>
                </select>
            </div>
            <div class="custom-file long">
                <input @change="imageUpload" type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose image</label>
            </div>
            <div id="number" class="">
                <div class="form-group in-number col-6">
                    <label for="stock">Stock: </label>
                    <input v-model="product.stock" class="form-control short" type="number" id="stock" name="stock">
                </div>
                <div class="form-group in-number col-6">
                    <label for="price">Price: </label>
                    <input v-model="product.price" class="form-control short" type="number" id="price" name="price">
                </div>
            </div>
            <button v-if="!isUploading" type="submit" class="btn btn-primary">Submit</button>
            <button v-else class="btn btn-primary">... Uploading</button>
        </form>
    </div>
</template>
<script>
import firebase from 'firebase'
import Banner from '../components/Banner.vue'

export default {
  name: 'FormProduct',
  components: {
    Banner
  },
  data () {
    return {
      product: {
        productName: '',
        imageUrl: '',
        price: '',
        stock: '',
        category: ''
      },
      uploadImage: null,
      isUploading: false
    }
  },
  methods: {
    addProduct () {
      console.log('form add kesubmit')
      if (this.uploadImage) {
        this.firebaseUpload()
        this.isUploading = true
      } else {
        this.isUploading = true
        const payload = {
          productName: this.product.productName,
          imageUrl: this.product.imageUrl,
          stock: this.product.stock,
          price: this.product.price,
          category: this.product.category
        }
        this.$store.dispatch('addProduct', payload)
          .then(() => {
            this.isUploading = false
            this.product.productName = ''
            this.product.imageUrl = ''
            this.product.stock = ''
            this.product.price = ''
            this.product.category = ''
            this.$toasted.show('Successfully added new Product', {
              theme: 'bubble',
              position: 'top-right',
              duration: 3000,
              type: 'success'
            })
            this.$router.push('/dashboard')
          })
          .catch(err => {
            console.log(err)
            this.isUploading = false
            this.$toasted.show(err.response.data.errors[0].message, {
              theme: 'toasted-primary',
              position: 'top-right',
              duration: 3000,
              type: 'error'
            })
          })
      }
    },
    imageUpload (event) {
      this.uploadImage = event.target.files[0]
      console.log(this.uploadImage)
    },
    firebaseUpload () {
      return new Promise((resolve, reject) => {
        const task = firebase.storage().ref(`products/${this.uploadImage.name}`).put(this.uploadImage)
        const taskProgress = snapshot => {}
        const taskError = reject
        const taskCompleted = () => {
          task.snapshot.ref
            .getDownloadURL()
            .then(resolve => {
              console.log(resolve)
              const payload = {
                productName: this.product.productName,
                imageUrl: resolve,
                stock: this.product.stock,
                price: this.product.price,
                category: this.product.category
              }
              return this.$store.dispatch('addProduct', payload)
            })
            .then(() => {
              this.isUploading = false
              this.product.productName = ''
              this.product.imageUrl = ''
              this.product.stock = ''
              this.product.price = ''
              this.product.category = ''
              this.$toasted.show('Successfully added new Product', {
                theme: 'bubble',
                position: 'top-right',
                duration: 3000,
                type: 'success'
              })
              this.$router.push('/dashboard')
            })
            .catch(err => {
              console.log(err)
              this.isUploading = false
              this.$toasted.show(err.response.data.errors[0].message, {
                theme: 'toasted-primary',
                position: 'top-right',
                duration: 3000,
                type: 'error'
              })
            })
        }
        task.on('state_changed', taskProgress, taskError, taskCompleted)
      })
    }
  }
}
</script>
<style>
    #formAdd {
        padding: 20px 0;
        border-radius: 10px;
        border: 1px solid lightgray;
        background-color: whitesmoke;
        width: 80%;
        margin: 50px auto;
        box-shadow: 7px 7px 7px 0 grey
    }
    .long {
        margin: auto;
        width: 68%;
    }
    .short {
        margin: auto;
        width: 100%;
    }
    #number {
        width: 70%;
        margin: auto;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .btn {
        margin-top: 20px;
        width: 200px;
    }
    @media screen and (max-width: 1024px) {
      #formAdd {width: 100%;}
    }

</style>
