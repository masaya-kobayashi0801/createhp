<template>
  <section class="blog">
    <AppBackgroundHolder :title="title"/>
    <h2>小林将也のブログ</h2>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
export default {
  data () {
    return {
      title: 'blog'
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>
