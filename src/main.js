import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import "../node_modules/ag-grid/dist/styles/ag-grid.css";
import "../node_modules/ag-grid/dist/styles/ag-theme-balham.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'ag-grid-enterprise';


Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
