<template>
  <div id="app">
    <br>
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <br>
    <div class="mx-auto" style="width: 300px;">
      <div class="col-30">
        <form>
          <div class="form-group">
              <input type="text" class="form-control" id="usuario" placeholder="USUARIO">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="contrasenia" placeholder="CONTRASEÑA">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Recordar Usuario</label>
          </div>
          <button type="submit" class="btn btn-primary mt-3" id="boton">INGRESAR</button>
        </form>
      </div>
    </div>
  </div>
  

</template>


<style>
#app {
  text-align: center;
  background-color: #F1E4F0 ;
  min-height: 100vh; /* Para que el background abarque toda la pantalla */ 
}
#boton{
  background: rgb(116, 90, 114);
  border-color:rgb(116, 90, 114);
  width: 75%;
}
</style>
