<template>
  <div class="myFeed">
    <h1>My Feeds</h1>
    <form v-for="feed in feedList" :key="feed._id">
      <Feeditem :feed="feed"></Feeditem>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Feeditem from "@/components/Feeditem.vue";
export default {
  name: "Myfeed",
  components: {
    Feeditem,
  },
  data() {
    return {
      feedList: [],
    };
  },
  created: function () {
    axios
      .get("http://localhost:4000/api/feeds/myfeeds", {
        headers: { Authorization: localStorage.getItem("jwtToken") },
      })
      .then((response) => {
        this.feedList = response.data;
        console.log(this.feedList);
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
.myFeed{
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
.content {
  padding: 10px;
}
</style>