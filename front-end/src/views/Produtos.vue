
<template>
  <div class="main-container">
    <div class="produtos">
      <div class="produto">
        <router-link to="/avental">
          <h2>Avental</h2>
        </router-link>
      </div>

      <div class="produto">
        <router-link to="">
          <h2>Bonés</h2>
        </router-link>
      </div>

      <div class="produto">
        <router-link to="">
          <h2>Infantil</h2>
        </router-link>
      </div>

      <div class="produto">
        <router-link to="">
          <h2>Uniformes</h2>
        </router-link>
      </div>
      <div class="produto">
        <router-link to="">
          <h2>Cartões de visitas</h2>
        </router-link>
      </div>
      <div class="produto">
        <router-link to="">
          <h2>Máscaras</h2>
        </router-link>
      </div>
      <div class="produto">
        <router-link to="">
          <h2>Toalhas bordadas</h2>
        </router-link>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.produtos {
  display: flex;
}
.produtos a {
  text-decoration: none;
}
.produto {
  margin-left: 10px;
  border: 1px solid #ffd700;
  padding: 20px;
  border-radius: 50px;
}
</style>