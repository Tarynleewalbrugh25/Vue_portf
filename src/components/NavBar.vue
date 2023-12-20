<template>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <RouterLink to="/">
        <img class="img-fluid" src="https://drive.google.com/uc?id=1AUnaRlzA0LFOHdaMqJQ1hAIlUX13ccyu" alt="logo" loading="lazy">
   </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active">
            Home
          </RouterLink>
        </li>
        <li class="nav-item">
           <RouterLink class="nav-link" to="./about">
            About
           </RouterLink>
        </li>
        <li class="nav-item">
           <RouterLink class="nav-link" to="./resume">
            Resume
           </RouterLink>
        </li>
        <li class="nav-item">
           <RouterLink class="nav-link" to="./project">
            Project
           </RouterLink>
        </li>
        <li class="nav-item">
           <RouterLink class="nav-link" to="./testimonials">
            Testimonials
           </RouterLink>
        </li>
        <li class="nav-item">
           <RouterLink class="nav-link" to="./contact">
            Contact
           </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
       
    }
</script>

<style scoped>

</style>