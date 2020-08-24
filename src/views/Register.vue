<template>
  <div class="register">
    <h1>Create your Account</h1>
    <form>
      <label for="name">姓名</label>
      <input class="name" v-model="user.name" id="name" name="name" placeholder="請輸入名字..." />

      <label for="age">年齡</label>
      <input class="age" type="number" v-model="user.age" id="age" name="age" placeholder="請輸入年齡..." />

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
      <button type = 'button' @click="createAccount">
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
  name: "Register",
  components: {},
  data() {
    return {
      user: {
        name: "",
        age: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    createAccount(){
      axios.post('http://localhost:4000/api/users/register',this.user)
      .then(response => {
        console.log(response)
        if(response.data.status == 'error')
        {
          alert(response.data.message)
        }
        else{
          alert('註冊成功')
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
.register {
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