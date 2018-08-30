<template>
  <div id="app">
    <div class="container-fluid">
    <RichGridExample /> 
    </div>  
   
  </div>
</template>

<script>
import CarGrid from './components/CarGrid.vue'
import ChemGrid from './components/ChemGrid.vue'
import RichGridExample from './rich-grid-example/RichGridExample.vue'

export default {
  name: 'app',
  components: {
    CarGrid,
    ChemGrid,
    RichGridExample
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