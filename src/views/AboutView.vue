<template>
  <div class="container">
      <div class="row">
          <h2 class="display-2">About</h2>
      </div>
      <div class="row" v-if="aboutMe">
        <p class="lead" v-for="about in aboutMe"
        :key=about>
          {{ about }}
        </p>
      </div>
  </div>
</template>
 

<script>
export default {
  computed:{
    aboutMe() {
      return this.$store.state.aboutMe
    }
  },
  mounted() {
    return this.$store.dispatch('fetchAboutMe')
  }
}
</script>