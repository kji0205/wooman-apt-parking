import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment';
import firebase from "@/firebase";

Vue.use(VueAxios, axios)
Vue.prototype.$moment = moment
Vue.prototype.$firebase = firebase

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
