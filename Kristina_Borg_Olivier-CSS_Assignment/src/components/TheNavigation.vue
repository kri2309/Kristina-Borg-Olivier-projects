<template>
  <header>

    <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand">CSS Assignment</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link"> <router-link to="/">List of Members</router-link></a>
      </li>
       <li class="nav-item active">
        <a class="nav-link" > <router-link to="/addMember" @click="resetPage()">Add Members</router-link></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link"> <router-link to="/localdata">Local Data</router-link></a>
      </li>
    </ul>
  </div>
    </nav>
  </header>
</template>

<script>
  export default {
    methods:{
      resetPage(){
          this.v$.reset;
      }
    }
  }
</script>
<style scoped>
header {
  width: 100%;
  background-color: #58A4B0;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration:none;
  background: transparent;
  /*border: 1px solid transparent;*/
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-exact-active {
color: #D64933;

}
</style>