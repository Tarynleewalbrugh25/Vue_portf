<template>
    <div class="container">
      <div class="row">
        <h3 class="display-3">Contact</h3>
        <form class="align-center"
          action="https://formspree.io/f/xpzgvddd" 
          method="POST"
          style="margin: 0 auto; max-width: 400px;"
        >
          <input name="name" type="text" class="form-control" placeholder="Taryn-lee">
          <br>
          <input name="surname" type="text" class="form-control" placeholder="Walbrugh">
          <br>
          <input name="email" type="email" class="form-control" placeholder="walbrught@gmail.com">
          <br>
          <textarea name="Message" class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
          <br>
          <button type="submit" class="btn btn-info">Submit</button>
        </form>
      </div>
      <i class="bi bi-facebook">Taryn-lee Walbrugh</i><br>
      <i class="bi bi-whatsapp">0682714785</i><br>
      <i class="bi bi-linkedin">Taryn-lee Walbrugh</i><br>
    </div>
  </template>
  
  <script>
  export default {
    // Your script logic here
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    color:black; /* Set text color to white for better visibility */
  }
  
  .row {
    text-align: center;
    padding: 20px;
  }
  
  input, textarea, button {
    width: 100%;
    margin-bottom: 10px;
  }
  
  /* Add your additional styling here */
  </style>
  