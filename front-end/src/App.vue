<template>
  <NavBar :logo="logo_src" :alt="app_name" />
  <!-- <Home /> -->
  <router-view/>
  <Footer />
</template>

<script>
import NavBar from './components/navbar/NavBar.vue'
import Footer from './components/footer/Footer.vue'
// import Home from './views/Home.vue'

export default {
  components:{
    NavBar,
    Footer
    // Home
  },
  data(){
    return{
      logo_src:"/img/logo1.jpg",
      alt:"Samy-Bordados"
    }
  }
}
</script>
<style>


*{
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main-container{
  margin: 50px;
  min-height: 550px;
}

h1{
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
