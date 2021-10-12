<template>
  <div id="nav">
    <router-link to="/" id="logo_url">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>
    <router-link to="/">HOME</router-link>
    <router-link to="/produtos">PRODUTOS</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["logo", "alt"],
};
</script>

<style>
#nav {
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#nav #logo_url {
  margin: auto;
  margin-left: 0;
}
#logo {
  width: 90px;
  height: 90px;
  border: 5px solid #ffd700;
}

#nav a {
  /* color:#FCBA03; */
  color: #ffd700;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}

#nav a:hover {
  color: #fff;
}
img {
  border-radius: 40px;
}
</style>