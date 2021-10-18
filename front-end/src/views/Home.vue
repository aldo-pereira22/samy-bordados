<template>
  
  <div class="container">

    <h2>Página Inicial !</h2>
    <h2>Depoimentos</h2>
    <h2>Fotos de clientes</h2>
    <!-- <div class="produtos">

      <div class="produto">
      <Avental />

      </div>

      <div class="produto">

      <Bone />
      </div>
    </div> -->

     <router-view/>
  </div>
 

</template>

<script>

import Avental from './Avental.vue'
import Bone from './Bone.vue'
// import Bone from './Bone.vue'


export default {
  components:{
    Avental,
    Bone
  },
  data(){
    return{
      logo_src:"/img/logo1.jpg",
      alt:"Samy-Bordados"
    }
  }
}
</script>
<style scoped>

/* .main-container { */
  /* background-image: url(../../public/img/background.jpg); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-position: center; */
/* } */

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
  color: black;
}

.produto a {
  color: black;
}

</style>