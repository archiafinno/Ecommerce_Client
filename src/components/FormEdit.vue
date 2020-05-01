<template>
    <div id="formEdit">
        <Banner/>
        <form @submit.prevent="editProduct">
            <h3>Edit Product {{product.id}}</h3>
            <hr><br>
            <div class="form-group">
                <input v-model="data.productName" type="text" class="form-control long" id="exampleFormControlInput1" placeholder="Product Name">
            </div>
            <div class="form-group">
                <select class="form-control long" id="exampleFormControlSelect1" v-model="data.category">
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
            <div id="number">
                <div class="form-group in-number col-6">
                    <label for="stock">Stock: </label>
                    <input v-model="data.stock" class="form-control short" type="number" id="stock" name="stock">
                </div>
                <div class="form-group in-number col-6">
                    <label for="price">Price: </label>
                    <input v-model="data.price" class="form-control short" type="number" id="price" name="price">
                </div>
            </div>
            <button v-if="!isUploading" type="submit" class="btn btn-primary">Submit</button>
            <button v-else class="btn btn-primary">... Uploading</button>        </form>
    </div>
</template>
<script>
import firebase from 'firebase'
import Banner from '../components/Banner.vue'

export default {
  name: 'FormProduct',
  props: ['product'],
  components: {
    Banner
  },
  data () {
    return {
      data: {
        id: this.product.id,
        productName: this.product.productName,
        imageUrl: this.product.imageUrl,
        stock: this.product.stock,
        price: this.product.price,
        category: this.product.category
      },
      uploadImage: null,
      isUploading: false
    }
  },
  methods: {
    editProduct () {
      if (this.uploadImage) {
        console.log('masuk ke upload image')
        this.firebaseUpload()
        this.isUploading = true
      } else {
        this.isUploading = true
        const payload = {
          id: this.data.id,
          productName: this.data.productName,
          imageUrl: this.data.imageUrl,
          stock: this.data.stock,
          price: this.data.price,
          category: this.data.category
        }
        this.$store.dispatch('editProduct', payload)
          .then(() => {
            this.$toasted.show('Yeay! Product successfully Edited', {
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
        const task = firebase.storage().refFromURL(this.data.imageUrl).put(this.uploadImage)
        const taskProgress = snapshot => {}
        const taskError = reject
        const taskCompleted = () => {
          task.snapshot.ref
            .getDownloadURL()
            .then(resolve => {
              console.log(resolve)
              const payload = {
                id: this.data.id,
                productName: this.data.productName,
                imageUrl: resolve,
                stock: this.data.stock,
                price: this.data.price,
                category: this.data.category
              }
              return this.$store.dispatch('editProduct', payload)
            })
            .then(() => {
              this.$toasted.show('Yeay! Product successfully Edited', {
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
    #formEdit {
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
      #formEdit {width: 100%;}
    }

</style>
