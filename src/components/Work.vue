<template>
  <section class="work">
    <AppBackgroundHolder :title="title" />
    <v-container>
      <!--first block-->
      <v-row justify="center" class="mt-8 mb-8" style="margin: 20px; ">
        <v-col cols="12" class="text-h3" align="center">取り組み</v-col>
        <v-col cols="12" class="text-h6" align="center">
         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        </v-col>
      </v-row>
      <v-divider class="mt-10"></v-divider>
      <!--second block-->
      <v-row justify="center" class="mt-5" id="work-1">
        <v-col cols="12" class="text-h5" align="center">●●に向けた活動<br/><span style="font-size: 15px;">subtitle</span></v-col>
        <v-col>
          <img
            src="../styles/common/AdobeStock_336843058.jpeg"
            class="img-fluid"
          />
        </v-col>
        <v-col cols="12" class="text-h5 mb-10">見出し</v-col>
        <v-row>
          <v-col cols="6" class="text-h5" style="text-decoration: underline; text-decoration-color:yellow;">タイトルタイトルタイトルタイトルタイトル</v-col>
          <v-col cols="6" class="text-h5" style="text-decoration: underline; text-decoration-color:yellow;">タイトルタイトルタイトルタイトルタイトル</v-col>
        </v-row>
        <v-row>
          <v-col cols="6" style="font-size:15px;">
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </v-col>
          <v-col cols="6" style="font-size:15px;">
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </v-col>
        </v-row>
      </v-row>
      <v-divider class="mt-10"></v-divider>
       <!--third block-->
      <v-row justify="center" class="mt-5" id="work-2">
        <v-col cols="12" class="text-h5" align="center">●●に向けた活動<br/><span style="font-size: 15px;">subtitle</span></v-col>
        <v-col>
          <img
            src="../styles/common/AdobeStock_300168494.jpeg"
            class="img-fluid"
          />
        </v-col>
        <v-col cols="12" class="text-h5 mb-10">見出し</v-col>
        <v-row>
          <v-col cols="6" class="text-h5" style="text-decoration: underline; text-decoration-color:yellow;">タイトルタイトルタイトルタイトルタイトル</v-col>
          <v-col cols="6" class="text-h5" style="text-decoration: underline; text-decoration-color:yellow;">タイトルタイトルタイトルタイトルタイトル</v-col>
        </v-row>
        <v-row>
          <v-col cols="6" style="font-size:15px;">
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </v-col>
          <v-col cols="6" style="font-size:15px;">
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </v-col>
        </v-row>
      </v-row>
      <v-divider class="mt-10"></v-divider>
      <!--fourth block-->
      <v-row justify="center" class="mt-5" id="work-3">
        <v-col cols="12" class="text-h5" align="center">●●に向けた活動<br/><span style="font-size: 15px;">subtitle</span></v-col>
        <v-col>
          <img
            src="../styles/common/AdobeStock_314836279.jpeg"
            class="img-fluid"
          />
        </v-col>
        <v-col cols="12" class="text-h5 mb-10">見出し</v-col>
        <v-row>
          <v-col cols="6" class="text-h5" style="text-decoration: underline; text-decoration-color:yellow;">タイトルタイトルタイトルタイトルタイトル</v-col>
          <v-col cols="6" class="text-h5" style="text-decoration: underline; text-decoration-color:yellow;">タイトルタイトルタイトルタイトルタイトル</v-col>
        </v-row>
        <v-row>
          <v-col cols="6" style="font-size:15px;">
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </v-col>
          <v-col cols="6" style="font-size:15px;">
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </v-col>
        </v-row>
      </v-row>
      <v-divider class="mt-10"></v-divider>
    </v-container>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
export default {
  data () {
    return {
      title: 'Work'
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>
<style lang="scss" scoped>
#work-1 {
  height: 1200px;
  // align-items :center;
}
#work-2 {
  height: 1200px;
}
#work-3 {
  height: 1200px;
}
.underline {
  background: linear-gradient(
    transparent 50%, yellow 50%
  );
}
</style>
