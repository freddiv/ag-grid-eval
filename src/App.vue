<template>
  <div id="app">
    <div class="container">
    <CarGrid />
    <ChemGrid /> 
    </div>  
   
  </div>
</template>

<script>
import CarGrid from './components/CarGrid.vue'
import ChemGrid from './components/ChemGrid.vue'

export default {
  name: 'app',
  components: {
    CarGrid,
    ChemGrid
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>