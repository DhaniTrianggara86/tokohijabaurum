import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
    router,
    el: '#app',
    render: h => h(App)
}).$mount('#app')