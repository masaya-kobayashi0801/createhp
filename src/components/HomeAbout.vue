<template>
  <section class="home-about">
    <div class="section__title">
      <div class="section__title-text">01. About Me</div>
    </div>
    <v-container
      ><!--サイトコンテンツを中央寄せして、自動余白設定-->
      <v-row class="home-about__contents"
        ><!--行の定義をして、自動余白設定-->
        <v-col md="5" class="home-about__contents-img"
          ><!--列の定義をして自動余白設定-->
          <img
            src="../styles/common/AdobeStock_185362582.png"
            alt="about"
            class="img-fluid"
          /><!--列に表示する画像指定-->
        </v-col>
        <v-col md="5" class="home-about__contents-text"
          ><!--md(ノートPCのブレイクポイント5カラムに設定)-->
          <p>
            企画・デザイン・開発を通して顧客と共に成長を目指しますデジタルテクノロジーは、「究極の合理性」を教えてくれました。
            これから先も、テクノロジーは世界を変えていくことでしょう。
            けれど、世界中の情報にアクセスでき、世界中の人が繋がっても、心の問題や社会の問題が減ったようにはみえません。
            人間は、感情で行動する生き物だからです。
            今まさに、合理性と感情の関係の見直しを求められる時代になりつつあります。
            合理性を超えて、好き、と言える機会を増やし、より良い世界を創ることができるのは、やはり人間自身です。
            わたしたちは、テクノロジーと人間の最適な関係を増やす挑戦を続けます。
          </p>
          <p></p>
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
