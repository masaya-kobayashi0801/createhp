<template>
  <section class="home-hero">
    <v-container fluid fill-height class="home-hero__content">
      <v-row>
        <v-col class="home-hero__content-text text-h2">
          <p>Welcome to MASAYA KOBAYASHI website.</p>
          <!-- <p>We're Design Company.</p> -->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.home-hero__content {
  background: url("../components/art.jpeg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;

  @include display_pc {
      height: 100vh;
  }

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }

  @include display_pc {
      font-size: 60px
  }
}
</style>
