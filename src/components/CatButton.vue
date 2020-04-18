<template>
    <div id="topTable">
        <div class="dropdown show mb-0">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                List By Category
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item text-white" @click="getByCategory('sneakers')">sneakers</a>
                <a class="dropdown-item text-white" @click="getByCategory('trekking')">trekking</a>
                <a class="dropdown-item text-white" @click="getByCategory('boots')">boots</a>
                <a class="dropdown-item text-white" @click="getByCategory('brogue')">brogue</a>
            </div>
        </div>
        <!-- <form class="form-inline my-2 my-lg-0" @submit.prevent="search">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="modelName">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search By Name</button>
        </form> -->
    </div>
</template>
<script>
export default {
  name: 'CatButton',
  data () {
    return {
      modelName: ''
    }
  },
  methods: {
    getByCategory (category) {
      this.$store.dispatch('getProducts', category)
    }
  }
}
</script>
<style>
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
</style>
