
<template>

<Teste />

</template>

<script>
import Teste from '../components/teste/Teste.vue'
export default {
  components: {
    Teste
  },
};
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