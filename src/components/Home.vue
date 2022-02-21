<template><!--HTMLの領域で見た目の構成を行う-->
  <section class="home"><!--汎用的な区分要素ですので、それを表現するためのより具体的な要素がない場合にのみ使用-->
    <HomeHero /><!--ローカルで登録したHomeHeroを呼び出す-->
    <HomeAbout />
    <HomeWork/>
    <HomeService/>
    <HomeBlog/>
    <HomeAccess/>
  </section>
</template>
<script>
import HomeHero from './HomeHero.vue'// HomeHeroのコンポーネントをインポートしている
import HomeAbout from './HomeAbout.vue'
import HomeWork from './HomeWork.vue'
import HomeService from './HomeService.vue'
import HomeBlog from './HomeBlog.vue'
import HomeAccess from './HomeAccess.vue'

export default {
  components: {
    HomeHero, // ローカル登録する。(Home.vueでのみ利用できる。)
    HomeAbout,
    HomeWork,
    HomeService,
    HomeBlog,
    HomeAccess
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 50px;
}
</style>
