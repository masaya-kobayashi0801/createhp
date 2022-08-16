<template>
  <section class="about">
    <AppBackgroundHolder :title="title"/>
    <v-row justify="center" align-content="center" class="mt-1" >
      <v-col cols="auto">
      <v-card width="1000" height="400">
        <h1 align="center">COMPANY</h1>
        <v-data-table
        :headers="headers"
        :items="desserts"
        hide-default-header
        hide-default-footer
        />
      </v-card>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
export default {
  data () {
    return {
      title: 'About',
      desserts: [
        {
          name: '会社名',
          context: '株式会社●●●●'
        },
        {
          name: '代表取締役',
          context: '鈴木一郎'
        },
        {
          name: '取締役',
          context: '佐藤二郎'
        },
        {
          name: '設立',
          context: 'YYYY-MM-DD'
        },
        {
          name: '所在地',
          context: '東京都○○区'
        },
        {
          name: '事業内容',
          context: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
        }
      ],
      headers: [
        {
          text: '',
          align: 'start',
          value: 'name'
        },
        { text: '', value: 'context' }
      ]
    }
  },
  components: {
    AppBackgroundHolder
  }
}
</script>
<style lang="scss" scoped>
  .about {
  background-color: #ECEFF1;
  height:750px;
}
</style>
