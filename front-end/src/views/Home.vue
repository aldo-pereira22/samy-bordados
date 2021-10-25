<template>
  <div class="main-container">
    <div class="main">
      <div class="principal" > <h2>Página Inicial !</h2> </div>
    
      <div class="depoimentos"> 
        <h2>Depoimentos</h2>
      </div>

    <div class="clientes">
      <h2>Fotos de clientes</h2>
    </div>


    </div>
    <!-- <div class="produtos">

      <div class="produto">
      <Avental />

      </div>

      <div class="produto">

      <Bone />
      </div>
    </div> -->

    <router-view />
  </div>
</template>

<script>
import Avental from "./Avental.vue";
// import Bone from './Bone.vue'

export default {
  components: {
    Avental,
  },
  data() {
    return {
      logo_src: "/img/logo1.jpg",
      alt: "Samy-Bordados",
    };
  },
};
</script>
<style scoped>

.main{
  display: flex;
  flex-direction: column;

}
.main div {
  margin: 30px 30px;
  border-bottom: 1px solid black;
}
/* .main-container { */
/* background-image: url(../../public/img/background.jpg); */
/* background-repeat: no-repeat; */
/* background-size: cover; */
/* background-position: center; */
/* } */
</style>