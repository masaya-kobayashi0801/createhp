<template>
  <section class="blog">
    <AppBackgroundHolder :title="title" />
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'

export default {
  data () {
    return {
      title: 'Blog'
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>
<style>
/* .blog {
    height: 700px;
  } */
p {
  font-weight: bold;
}
.drop_area {
  color: gray;
  font-weight: bold;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 5px solid gray;
  border-radius: 15px;
}
.enter {
  border: 10px dotted powderblue;
}
</style>
