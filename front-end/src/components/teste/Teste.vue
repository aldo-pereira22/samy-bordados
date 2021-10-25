<template>
    <div class="main-container">
    <div class="produtos">
      <button class="produto" @click="isClicked">
        <h2>Avental</h2>
      </button>
      <div v-if="isActive == true"><Avental/></div>
               
      <button class="produto" @click="isClicked">
          <h2>Bonés</h2>
      </button>
      <button class="produto" @click="isClicked">
          <h2>Infantil</h2>
      </button>
      <button class="produto" @click="isClicked">
          <h2>Uniformes</h2>
      </button>
      <button class="produto" @click="isClicked">
          <h2>Cartões de visitas</h2>
      </button>
      <button class="produto" @click="isClicked">
          <h2>Máscaras</h2>
      </button>
      <button class="produto" @click="isClicked">
          <h2>Toalhas bordadas</h2>
      </button>
    </div>
  </div>
</template>

<script>
import Avental from '@/components/produtos/Avental';

export default {
  components:{
    Avental
  },
  data(){
    return{
      isActive: false
    }
  },
  methods: {
    isClicked: function() {
      console.log("tá clicando"); 
      if(this.isActive){
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    }
  }
}
</script>

<style>

</style>