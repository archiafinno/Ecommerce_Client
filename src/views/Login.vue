<template>
  <div class="container-fluid backLogin">
      <form class="box" @submit.prevent="login">
        <h1>login</h1>
        <input v-model="userData.email" type="email" name="email" placeholder="email">
        <input v-model="userData.password" type="password" name="password" placeholder="Password">
        <input v-if="!loginProgress" type="submit" name="btn" value="Login">
        <button v-else class="btnProgress">Please Wait ...</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userData: {
        email: '',
        password: ''
      },
      loginProgress: false
    }
  },
  methods: {
    login () {
      this.loginProgress = true
      const payload = {
        email: this.userData.email,
        password: this.userData.password
      }
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          this.loginProgress = false
          this.$toasted.show('Hi! Welcome Back', {
            theme: 'bubble',
            position: 'top-right',
            duration: 3000,
            type: 'success'
          })
          console.log('success login')
          const token = data.token
          localStorage.setItem('token', token)
          this.$router.push('/dashboard')
          this.$store.dispatch('getProducts')
        })
        .catch(err => {
          this.loginProgress = false
          console.log('ini error', err)
          this.$toasted.show(err.response.data.errors[0].message, {
            theme: 'toasted-primary',
            position: 'top-right',
            duration: 3000,
            type: 'error'
          })
        })
    }
  }
}
</script>

    <style>
        .backLogin {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background: url('../assets/bgLogin.jpg');
            background-repeat: no-repeat;
            overflow-y: hidden;
            height: 100vh;
        }
        .box{
            width: 25%;
            padding: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #191919;
            text-align: center;
            border-radius: 20px;
        }
        .box h1 {
            color: white;
            text-transform: uppercase;
            font-weight: 500;
        }
        .box input[type = "email"],.box input[type = "password"] {
            border: 0;
            background: none;
            display: block;
            margin: 20px auto;
            text-align: center;
            border: 2px solid #3498db;
            padding: 14px 10px;
            width: 200px;
            outline: none;
            color: white;
            border-radius: 24px;
            transition: 0.25s;
        }
        .box input[type = "email"]:focus,.box input[type = "password"]:focus {
            width: 280px;
            border-color: #2ecc71;
        }
        .box input[type = "submit"]{
            border: 0;
            background: none;
            display: block;
            margin: 20px auto;
            text-align: center;
            border: 2px solid #2ecc71;
            padding: 14px 40px;
            outline: none;
            color: white;
            border-radius: 24px;
            transition: 0.25s;
            cursor: pointer;
        }
        .box input[type = "submit"]:hover{
            background: #2ecc71;
        }
        .btnProgress {
            border: 0;
            background: #2ecc71;
            display: block;
            margin: 20px auto;
            text-align: center;
            border: 2px solid #2ecc71;
            padding: 14px 40px;
            outline: none;
            color: white;
            border-radius: 24px;
            transition: 0.25s;
            cursor: pointer;
        }
    </style>
