<template>
  <div class="content">
        <label for>使用者ID:{{feed.userId}}</label>

    <br />
    <label for>文章內容:{{feed.content}}</label>
  </div>
</template>

<script>
export default {
  name: 'Feeditem',
  props: {
    feed: Object
  }
}
</script>