<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">1. About Me</div>
      <div class="section__title-text">2. About Me</div>
    </div>
    <v-container>  <!--サイトコンテンツを中央寄せして、自動余白設定-->
      <v-row class="home-about__contents"><!--行の定義をして、自動余白設定-->
        <v-col md="5" class="home-about__contents-img"><!--列の定義をして自動余白設定-->
          <img
            src="../styles/common/AdobeStock_185362582.png"
            alt="about"
            class="img-fluid"
          /><!--列に表示する画像指定-->
        </v-col>
        <v-col md="5" class="home-about__contents-text" align="center"><!--md(ノートPCのブレイクポイント5カラムに設定)-->
          <p>
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
           XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </p>
        </v-col>
      </v-row>
      <AppButton
        :button-text="buttonText"
        :url="url"
      /><!--ケバブケースでで変数を宣言して、propsで指定した変数を指定する-->
    </v-container>
  </section>
</template>
<script>
import AppButton from './AppButton.vue' // AppButtonをインポートしてボタンコンポーネントを利用できるようにする。
export default {
  data () {
    // dataプロパティ―を宣言 リアクティブシステムの実行
    return {
      buttonText: '詳しく見る', // テキストをセット
      url: '/about' // 遷移先をセット
    }
  },
  components: {
    // componentsプロパティを設定してローカルコンポーネントを定義する。
    AppButton // ローカルでAppButtonを利用できるようにする。
  }
}
</script>
<style lang="scss" scoped>
.home-about__contents {
  margin-top: 20px;
  justify-content: center; /*要素を左寄せにしたり真ん中に寄せたりするプロパティ*/
  &-img {
    text-align: center;
  }
  &-text {
    word-wrap: break-word;
  }
}
.section__title {
  padding-top: 120px;
  text-align: center;
  &-text {
    font-weight: 700;
    font-size: 40px;
    color: #e65f78;
  }
}
</style>
