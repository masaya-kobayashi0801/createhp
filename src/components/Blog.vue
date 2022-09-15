<template>
  <section class="blog">
    <AppBackgroundHolder :title="title" />
    <p>
      Ask a yes/no quetion:
    <input v-model="question"/>
    </p>
    <p>{{info}}</p>
    <p>{{error}}</p>
    <p>{{message}}</p>
  </section>
</template>
<script>
// import { watch } from 'fs';
import AppBackgroundHolder from './AppBackgroundHolder.vue'
import axios from 'axios'

export default {
  data () {
    return {
      title: 'Blog',
      quetion: '',
      info: '',
      error: '',
      message: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },
  components: {
    AppBackgroundHolder
  },
  watch: {
    quetion (newQuetion, oldQuetion) {
      if (newQuetion.includes('?')) {
        this.getAnswer()
      }
    }
  },
  mounted () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => (this.info = response.data.time))
    .catch(e => this.error = e)
    .finally(msg => this.message = {title: 'finallyを実行しました',message: msg})
  },
  methods: {
    async getAnswer () {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not reach the API. ' + error
      }
    }
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
