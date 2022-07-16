<template>
  <section class="blog">
    <AppBackgroundHolder :title="title"/>
    <h2>小林将也のブログ</h2>
     <!-- 値： {{ selectedSweet }} -->
    <v-select
      v-model="selectedSweet"
      item-text="label"
      item-value="value"
      :items="sweets"
      label="好きなお菓子"
      return-object
    />
    <p class="text-subtitle-2">textsize test</p>
    <p>fontsize test</p>
    {{files}}
     <div>
        <ul>
            <li v-for="file in files" :key="file">{{ file.name }}</li>
        </ul>
    </div>
    <div
      class="drop_area"
      @dragenter="dragEnter"
      @dragleave="dragLeave"
      @dragover.prevent="dragOver"
      @drop.prevent="dropFile"
      :class="{enter: isEnter}"
    >
      ファイルアップロード
    </div>
    <div>
        <ul>
            <li v-for="file in files" :key="file">{{ file.name }}</li>
        </ul>
    </div>
    <table ref="table">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
    </table>
    <button @click="downloadExcelFile()">エクセルファイルをダウンロード</button>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
import XLSX from 'xlsx'

export default {
  data () {
    return {
      title: 'blog',
      files: [],
      selectedSweet: { label: 'チョコ', sweetsId: 1 }, // 初期値
      sweets: [
        { label: 'チョコ', sweetsId: 1 },
        { label: 'バナナ', sweetsId: 2 },
        { label: 'グミ', sweetsId: 3 }
      ],
      isEnter: false
    }
  },
  components: {
    AppBackgroundHolder
  },
  methods: {
    dragEnter () {
      this.isEnter = true
    },
    dragLeave () {
      this.isEnter = false
    },
    dragOver () {
      console.log('DragOver')
    },
    dropFile () {
      console.log(event.dataTransfer.files)
      this.files = [...event.dataTransfer.files]
      this.isEnter = false
    },
    downloadExcelFile () {
      const data = this.$refs.table
      const wb = XLSX.utils.table_to_book(data)
      XLSX.writeFile(wb, 'demo.xlsx')
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
