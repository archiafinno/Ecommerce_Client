<template>
    <div class="bungkus">
        <div class="outer-login-con mt-5 container-fluid d-flex row justify-content-center align-items-center">
            <div class="card mb-3" style="max-width: 50%;" id="innerConLogin">
                <div class="row no-gutters">
                    <div class="col-md-6">
                        <img src="https://cf.shopee.co.id/file/42124bbb9aa1a3ff6af3218faf2d03fc" class="card-img" alt="...">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <form id="formLogin" @submit.prevent="login">
                                <h2>Wellcome!</h2>
                                <div class="container-fluid form-group">
                                    <input v-model="userData.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address">
                                </div>
                                <div class="container-fluid form-group">
                                    <input v-model="userData.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                </div>
                                <button type="submit" class="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
      return {
          userData: {
              email: '',
              password: ''
          }
      }
  },
  methods: {
      login() {
          const payload = {
              email: this.userData.email,
              password: this.userData.password
          }
          console.log(payload)
          this.$store.dispatch('login',payload)
      }
  }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: rgb(46, 103, 228);
    }
    #formLogin {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #formLogin input {
        margin: auto;
        border-radius: 35px;
        width: 80%;
        height: 50px;
        cursor: pointer;
    }
    #formLogin h1 {
        text-align: center;
    }
    #formLogin .btn {
        border: none;
        border-radius: 35px;
        width: 75%;
        height: 50px;
    }
    .card-img {
        height: 100%;
    }
</style>
