<template>
  <div class="addfeed">
    <h1>Create your feeds</h1>
    <form>
      <label for="userId">使用者ID:{{feed.userId}}</label>
      <br />
      <label for="content">文章內容:</label>
      <br />
      <input
        class="feedcontent"
        v-model="feed.content"
        id="content"
        name="content"
        placeholder="請輸入文章內容..."
      />

      <button type="button" @click="createfeed">
        送出
        <i class="fa fa-video-camera" style="color: gray;"></i>
      </button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "addFeed",
  components: {},

  data() {
    return {
      feed: {
        userId: "",
        content: "",
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
        this.feed.userId = response.data._id;
      });
  },
  methods: {
    createfeed() {
      axios
        .post("http://localhost:4000/api/feeds/add", this.feed, {
          headers: { Authorization: localStorage.getItem("jwtToken") },
        })
        .then((response) => {
          console.log(response);
          alert("新增成功");
        });
    },
    test() {
      alert(JSON.stringify(this.user));
    },
  },
};
</script>


<style lang="scss">
.addfeed {
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
.feedcontent {
  height: 100px;
}
</style>