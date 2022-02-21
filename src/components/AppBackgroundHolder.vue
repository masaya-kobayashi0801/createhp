<template>
<section class="background-holder">
  <v-container fluid fill-height class="background-holder__content">
    <v-row>
      <v-col class="background-holder__content-text">
        <p>{{title}}</p><!--propsプロパティの変数を参照できるようにする-->
      </v-col>
    </v-row>
  </v-container>
</section>
</template>
<script>
export default {
  props: { // 親コンポーネントからtitleテキストを受け取れるように設定
    title: { // 変数titleを定義
      type: String, // String型をセット
      required: true // 必須項目としてセット
    }
  }
}
</script>
<style  lang="scss" scoped>
.background-holder__content {
  background: url("../components/art.jpeg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 30vh;
  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>
