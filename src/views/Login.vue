<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <label for="email">電子郵件</label>
      <input class="email" v-model="user.email" id="email" name="email" placeholder="請輸入電子郵件..." />
      <label for="password">密碼</label>
      <input
        class="password"
        v-model="user.password"
        type="password"
        id="password"
        name="password"
        placeholder="請輸入密碼..."
      />
      <button type = 'button' @click="login">
        送出
        <i class="fa fa-video-camera" style="color: gray;"></i>
      </button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: "Login",
  components: {},
  data() {
    return {
      user: {
        email: "john123@gmail.com",
        password: "john123",
      },
    };
  },
  methods: {
      login(){
      axios.post('http://localhost:4000/api/users/login',this.user)
      .then(response => {
        console.log(response)
        if(response.data.status == 'error')
        {
          alert(response.data.message)
        }
        else{
          const token = response.data.token;
          localStorage.setItem('jwtToken', token)
          alert('登入成功')
        }
      })
    },
    test() {
      alert(JSON.stringify(this.user));
    },
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-width: 3px;
    border-style: dashed;
    border-color: #ffac55;
    padding: 5px;
    input {
      width: 300px;
    }
  }
}
</style>