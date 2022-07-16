<template>
  <v-app>
    <header>
      <v-app-bar app dark>
        <!--v-app-bar-nav-iconがクリックされたら、drawerという変数へtrueという値を代入するという意味-->
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon
        ><!--v-app-va-nav-iconタグ(ハンバーガーメニューのアイコンを表示できる。)を追加、クリックイベントを追加(@clickでjsの実行が可能になる、scriptタグ内にデータ定義-->
        <v-toolbar-title>One Creative</v-toolbar-title>
        <v-tabs dark>
          <v-tab
            v-for="(menuItem, index) in menuItems" :key="index" :to="menuItem.url"
          >
            {{ menuItem.name }}
          </v-tab>
        </v-tabs>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer"  temporary fixed>
        <!--v-navigation-drawer：サイドメニューを表示するＵＩコンポーネント fixed:サイドメニューが画面左側いっぱいに表示される temporary:アプリケーションの一番上の層で表示させることが可能。サイドメニューの一部がヘッダーから隠れたりするのを防ぐ v-model:双方向データバインディングができる-->
        <v-list nav dense
          ><!--nav;リストの各アイテムの要素をいい感じに丸みをつけてmarginを設定してくれる。dense:リスト全体のフォントを小さくし、いい感じにmarginを設定してくれる。-->
          <v-list-item-group>
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
              :to="menuItem.url"
            >
              <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
  </v-app>
</template>

<script>
import constants from '../styles/common/constants'
// Vue.jsのコンポーネント内で変数を定義したいときは、scriptタグ内に以下のようにコーディングする。
// ES6の書き方
export default {
  name: 'AppHeader',
  data () {
    return {
      // オブジェクト形式でデータ定義を行う。
      // 変数名：値
      drawer: false,
      menuItems: constants.menuItems // import文で作成したconstants.jsを読み込み、menuItemsという変数にリストを格納 constants.menuItemsと指定することでconstants.jsで指定したオブジェクトのvalueを取得できる。
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-application--wrap {
    min-height: fit-content;
  }
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
.v-tabs {
  display: none;
  @include display_pc {
    display: block !important;
  }
}
</style>
