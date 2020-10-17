<template>
  <section>
    <div class="container" id="login-page">
      <div class="row mt-4 mb-4">
        <div class="col-md-8" style="background-color: #0f4c75;">
          <img src="../images/undraw_web_shopping_dd4l.svg" class="rounded mx-auto d-block" style="width: 80%;" alt="">
        </div>
        <div class="col-4" style="background-color: #dddddd;">
          <!-- <div class="card">
            <div class="card-body"> -->
              <h5 class="card-title text-center mt-4"><b>Bolaedward store</b></h5>
              <p class="card-text text-center">Login</p>
              <form action=""  @submit.prevent="login">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input v-model="email" type="email" class="form-control" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </form>
            <!-- </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        url: 'http://localhost:3000/login',
        method: 'post',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          console.log(data, '<==== data login')
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err, '<==== error login')
        })
    }
  }
}
</script>

<style>

</style>
