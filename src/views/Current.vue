<template>
  <div class="current">
    <h1>Current</h1>
    <form>
      <label for="name">姓名:{{user.name}}</label>
      <label for="age">年齡:{{user.age}}</label>
      <label for="email">電子郵件:{{user.email}}</label>
      <label for="password">密碼:{{user.password}}</label>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Current",
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
  created: function () {
    axios
      .get("http://localhost:4000/api/users/current", {
        headers: { Authorization: localStorage.getItem("jwtToken") },
      })
      .then((response) => {
        console.log(response);
        this.user.name = response.data.name;
        this.user.age = response.data.age;
        this.user.email = response.data.email;
        this.user.password = response.data.password;
      });
  },
  methods: {
    test() {
      alert(JSON.stringify(this.user));
    },
  },
};
</script>

<style lang="scss">
.current {
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
  }
}
</style>