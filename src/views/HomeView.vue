<template>
  
    <div class="container-fluid" id="bgimage">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="rotating-text-wrapper">
            <h2 class="d-md-block">Taryn-lee Walbrugh</h2>
            <h2 class="d-md-block">Aspiring Developer</h2>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
#bgimage {
  height: 100vh;
  /*background: url('https://i.postimg.cc/HLzscJxd/orange-green-technology-background-070787698-prevstill.webp');*/
  background-size: cover;
  position: relative;
}
.rotating-text-wrapper {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.rotating-text-wrapper h2 {
  font-size: 4rem;
  margin: 0;
  padding: 0.3em;
  color:black;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}
.rotating-text-wrapper h2:nth-child(1) {
  animation-name: rotating-text-1;
}
@keyframes rotating-text-1 {
  0%, 100% {
    opacity: 0;
    transform: translateY(100%);
  }
  10%, 90% {
    opacity: 1;
    transform: translateY(0);
  }
}
.rotating-text-wrapper h2:nth-child(2) {
  animation-name: rotating-text-2;
}
@keyframes rotating-text-2 {
  0%, 100% {
    opacity: 0;
    transform: translateY(100%);
  }
  30%, 70% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
