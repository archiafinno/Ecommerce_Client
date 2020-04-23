<template>
    <div class="wrapper">
        <div class="sidebar">
            <div class="up">
                <h1><i class="fas fa-shoe-prints"></i> Brada</h1>
                <ul>
                    <li><router-link :to="{name: 'Table'}" class="nav-link">
                    <i class="fas fa-align-justify"></i><span>Products Table</span>
                    </router-link></li>
                    <li><router-link :to="{name: 'FormProduct'}" class="nav-link">
                    <i class="fas fa-folder-plus"></i><span>Add Product</span>
                    </router-link></li>
                    <li><router-link :to="{name: 'Order'}" class="nav-link">
                    <i class="fas fa-folder-plus"></i><span>Order</span>
                    </router-link></li>
                </ul>
            </div>
            <div id="right-container">

                <button type="button" id="edit-task" class="btn btn-success m-1" @click="logout">Logout  <i class="fas fa-sign-out-alt"></i></button>
            </div>
        </div>
        <div class="main_content">
            <div class="info">
                <div class="container-fluid">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Dashboard',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
                font-family: 'tahoma';
        /* font-family: 'Josefin Sans', sans-serif; */
    }

    body {
        background: #f3f5f9;
    }

    .wrapper {
        display: flex;
        position: relative;
    }

    .wrapper .sidebar {
        position: fixed;
        width: 300px;
        height: 100%;
        background: #4b4276;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .wrapper .sidebar h1 {
        color: #fff;
        font-family: 'Permanent Marker', cursive;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 30px;
    }

    .wrapper .sidebar ul li {
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        border-top: 1px solid rgba(225, 225, 225, 0.05);
    }

    .wrapper .sidebar ul li a {
        color: #bdb8d7;
        display: block;
    }

    .wrapper .sidebar ul li span {
        font-size: 20px;
        margin-left: 10px;
    }

    .wrapper .sidebar ul li a .fas {
        width: 25px;
    }

    .wrapper .sidebar ul li:hover {
        background: #594f8d;
    }

    .wrapper .sidebar ul li:hover a {
        color: #fff;
    }

    .wrapper .main_content {
        width: 100%;
        margin-left: 300px;
        height: 90vh;
    }

    .wrapper .main_content .header {
        padding: 0px;
        margin-bottom: 50px;
        background: #fff;
        color: #717171;
        border-bottom: 1px solid #e0e4e8;
        box-shadow: 5px 5px 5px 0 grey;
    }

    .wrapper .main_content .info {
        margin: 20px;
        color: #717171;
        line-height: 25px;
    }

    .wrapper .main_content .info div {
        margin-bottom: 20px;
    }

    .dropdown-item {
        width: 100px;
    }

    .sticky-footer {
        height: 50px;
        box-shadow: 0 0 20px 2px grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
