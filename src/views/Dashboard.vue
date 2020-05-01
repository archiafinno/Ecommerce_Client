<template>
    <section>
        <div class="sidebar">
            <h1><i class="fas fa-shoe-prints"></i> Brada</h1>
            <div class="wrapA">
                <a><router-link :to="{name: 'Table'}" class="nav-link">
                <i class="fas fa-align-justify"></i><span>Table</span>
                </router-link></a>
                <a><router-link :to="{name: 'FormProduct'}" class="nav-link">
                <i class="fas fa-folder-plus"></i><span>Add Product</span>
                </router-link></a>
                <a><router-link :to="{name: 'Order'}" class="nav-link">
                <i class="fas fa-folder-plus"></i><span>Order</span>
                </router-link></a>
            </div>
            <button type="button" class="btn btnLogout btn-success m-1 mt-4" @click="logout">Logout  <i class="fas fa-sign-out-alt"></i></button>
        </div>

        <div class="main_content">
            <div class="info">
                <div class="container-fluid">
                    <router-view/>
                </div>
            </div>
        </div>
    </section>

    <!-- <div class="wrapper">
        <div class="sidebar">
                <h1><i class="fas fa-shoe-prints"></i> Brada</h1>
                <a><router-link :to="{name: 'Table'}" class="nav-link">
                <i class="fas fa-align-justify"></i><span>Products Table</span>
                </router-link></a>
                <a><router-link :to="{name: 'FormProduct'}" class="nav-link">
                <i class="fas fa-folder-plus"></i><span>Add Product</span>
                </router-link></a>
                <a><router-link :to="{name: 'Order'}" class="nav-link">
                <i class="fas fa-folder-plus"></i><span>Order</span>
                </router-link></a>
                <button type="button" id="edit-task" class="btn btn-success m-1" @click="logout">Logout  <i class="fas fa-sign-out-alt"></i></button>
        </div>
        <div class="main_content">
            <div class="info">
                <div class="container-fluid">
                    <router-view/>
                </div>
            </div>
        </div>
    </div> -->
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
        margin: 0;
    }

    .sidebar {
        margin: 0;
        background: #4b4276;
        padding: 30px 0;
        width: 300px;
        position: fixed;
        height: 100%;
        overflow: auto;
    }

    .sidebar a {
        display: block;
        color: white;
        padding: 16px;
        text-decoration: none;
    }

    .sidebar h1 {
        color: #fff;
        font-family: 'Permanent Marker', cursive;
        text-transform: uppercase;
        text-align: center;
    }

    .sidebar a.active {
        background-color: #4CAF50;
        color: white;
    }

    .sidebar a:hover:not(.active) {
        background: #594f8d;
        color: white;
    }

    .sidebar a span {
        font-size: 20px;
        margin-left: 10px;
    }

    .sidebar a .fas {
        width: 25px;
    }

    div.main_content {
        margin-left: 300px;
        padding: 10px;
        height: 90vh;
    }

    .main_content .header {
        padding: 0px;
        margin-bottom: 50px;
        background: #fff;
        color: #717171;
        border-bottom: 1px solid #e0e4e8;
        box-shadow: 5px 5px 5px 0 grey;
    }
    .main_content .info {
        margin: 5px;
        color: #717171;
        line-height: 25px;
    }

    .main_content .info div {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 1024px) {
        .sidebar {
            width: 100%;
            height: auto;
            position: relative;
        }
        .wrapA {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        .sidebar a {padding: 6px 14px;}
        #tableProduct {overflow-x: scroll;}
        div.main_content {margin-left: 0;}
        div.main_content .info {
            margin: 0px;
        }
    }
    @media screen and (max-width: 400px) {
        .sidebar {
            width: 100%;
            height: auto;
            position: relative;
        }
        .wrapA i {display: none;}
        .sidebar a {padding: 6px 4px;}
        #tableProduct {overflow-x: scroll;}
        div.main_content {margin-left: 0;}
        div.main_content .info {
            margin: 0px;
        }
    }
    /* body {
        background: #f3f5f9;
    }

    .wrapper {
        display: flex;
        position: relative;
    }

    .sidebar {
        position: fixed;
        width: 300px;
        height: 100%;
        background: #4b4276;
        padding: 30px 0;
        overflow: auto;
    }

    .sidebar h1 {
        color: #fff;
        font-family: 'Permanent Marker', cursive;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 30px;
    }

    .sidebar a {
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        border-top: 1px solid rgba(225, 225, 225, 0.05);
        color: #bdb8d7;
        display: block;
    }

    .sidebar a span {
        font-size: 20px;
        margin-left: 10px;
    }

    .sidebar a .fas {
        width: 25px;
    }

    .sidebar a:hover {
        background: #594f8d;
    }
    .main_content {
        width: 100%;
        margin-left: 300px;
        height: 90vh;
    }

    .main_content .header {
        padding: 0px;
        margin-bottom: 50px;
        background: #fff;
        color: #717171;
        border-bottom: 1px solid #e0e4e8;
        box-shadow: 5px 5px 5px 0 grey;
    }
    .main_content .info {
        margin: 20px;
        color: #717171;
        line-height: 25px;
    }

    .main_content .info div {
        margin-bottom: 20px;
    }
    @media screen and (max-width: 700px) {
        .sidebar {
            width: 100%;
            height: auto;
            position: relative;
        }
        .sidebar a {float: left;}
        .main_content {margin-left: 0; width: 100%;}
    }

    @media screen and (max-width: 400px) {
        .sidebar a {
            text-align: center;
            float: none;
        }
    } */

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
