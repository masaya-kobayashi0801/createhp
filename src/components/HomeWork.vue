<template>
  <section class="home-work">
    <div class="section__title">
      <div class="section__title-text">2. My Work</div>
    </div>
    <v-container>
      <v-row class="home-work__contents">
        <v-col sm="8" class="home-work__contents-img">
          <v-carousel
            hide-delimiters
            height="auto"
          ><!--カルーセルの作成 hide-delimiters:カルーセルの下の区切り記号を非表示にする。-->
            <v-carousel-item
              v-for="(workItem, index) in workItems"
              :key="index"
              :to="workItem.url"
            >
              <img :src="workItem.src" alt="" class="img-fluid">
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import constants from '../styles/common/constants.js'
export default {
  data () {
    return {
      workItems: constants.workItems
    }
  }
}
</script>
<style  lang="scss" scoped>
.home-work__contents {
  margin-top: 20px;
  justify-content: center;
}
.home-work__contents-img {
  text-align: center;
}
</style>
