<template>
  <div class="container">
      <div class="row">
          <h2 class="display-2">Home</h2>
      </div>
      <div class="row" v-if="jobTitle">
          <p class="lead" v-for="job in jobTitle"
           :key="job.title">
           {{ job.title }}
         </p>
      </div>
  </div>
</template>  


<script>

export default {
  computed:{
    jobTitle() {
      return this.$store.state.jobTitle
    }
  },
  mounted() {
    this.$store.dispatch('fetchJobTitle')
  }
}
</script>
