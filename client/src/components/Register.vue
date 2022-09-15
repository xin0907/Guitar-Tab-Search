<template>
    <div>
      <h1>Register</h1>
      <input type="email" name="email" placeholder="email" v-model="email" />
      <br>
      <input type="password" name="password" placeholder="password" v-model="password" />
      <br>
      <button @click="register">register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
        email:"",
        password:""
    }
  },
  methods: {
    // 异步任务，等待一个 promise
    async register(){
        const response = await AuthenticationService.register({
            email:this.email,
            password:this.password
        })
        console.log(response.data)
    }
  }
}
</script>


<style scoped>

</style>
