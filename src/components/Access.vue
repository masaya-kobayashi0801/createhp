<template>
  <section class="access">
    <AppBackgroundHolder :title="title" />
    <h2>アクセス</h2>
    <h3>ここに地図を表示させる。</h3>
    <div ref="map" style="height: 500px; width: 800px"></div>
  </section>
</template>
<script>
import AppBackgroundHolder from './AppBackgroundHolder.vue'
export default {
  data () {
    return {
      title: 'access',
      map: '',
      myLatLng: { lat: -34.397, lng: 150.644 }
    }
  },
  mounted () {
    const script = document.createElement('script')
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDIGGnKiKC9ahvrdYwq1l-S26MFSZzxqsY&callback=initMap'
    script.async = true
    document.head.appendChild(script)

    window.initMap = () => {
      this.map = new window.google.maps.Map(this.$refs.map, {
        center: this.myLatLng,
        zoom: 8
      })
      window.google.maps.Marker({ position: this.myLatLng, map: this.map })
    }
  },

  components: {
    // ローカル環境で利用する
    AppBackgroundHolder
  }
}
</script>
