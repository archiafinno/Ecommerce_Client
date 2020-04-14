<template>
    <div id="formAdd">
        <form @submit.prevent="addProduct">
            <h3>Add Product</h3>
            <hr><br>
            <div class="form-group">
                <input v-model="product.productName" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product Name">
            </div>
            <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1" v-model="product.category">
                <option value="sneakers">sneakers</option>
                <option value="boots">boots</option>
                <option value="trekking">trekking</option>
                <option value="brogue">brogue</option>
                <option value="derby">derby</option>
                </select>
            </div>
            <div class="custom-file">
                <input @change="imageUpload" type="file" class="custom-file-input" id="customFile">
                <label class="custom-file-label" for="customFile">Choose image file or url</label>
            </div>
            <div id="number">
                <div class="form-group in-number col-6">
                    <label for="stock">Stock: </label>
                    <input v-model="product.stock" class="form-control" type="number" id="stock" name="stock">
                </div>
                <div class="form-group in-number col-6">
                    <label for="price">Price: </label>
                    <input v-model="product.price" class="form-control" type="number" id="price" name="price">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
  name: 'FormProduct',
  data() {
      return {
          product: {
              productName: '',
              imageUrl: '',
              price: 0,
              stock: 0,
              category: ''
          }
      }
  },
  methods: {
      addProduct() {
        const payload = {
            productName: this.product.productName,
            imageUrl: this.product.imageUrl,
            stock: this.product.stock,
            price: this.product.price,
            category: this.product.category
        }
        this.$store.dispatch('addProduct', payload)
      },
      imageUpload(event) {
          this.product.imageUrl = event.target.files[0]
      }
  }
}
</script>
<style>
    #formAdd {
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
