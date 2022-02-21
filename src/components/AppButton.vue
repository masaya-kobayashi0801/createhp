<template><!--HTMLの記述-->
  <v-row class="button"><!--行を指定して余白自動調整-->
    <v-col><!--列を指定して余白自動調整-->
      <v-btn
        large
        color="error"
        min-width="300"
        :to="url"
      ><!--ボタンのUI作成 large:大き目のボタンにするときに指定。color:ボタンの色を指定。error:vuetify側で用意されているカラーを利用。min-width:ボタンの横幅の最小値を設定。to:ボタン押下後の遷移先を指定-->
        ＞＞{{buttonText}}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: { // propsで親コンポーネントのデータを受け取る。
    buttonText: { // 変数名buttonText
      type: String, // 変数の型を設定する。string型でないといけませんよということ。
      required: true // propsのbuttonTextを必須にするために設定、必須なのにbuttonTextが与えられていない場合、警告が表示される。
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss">
.button {
  text-align: center;
}
</style>
