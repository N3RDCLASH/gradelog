import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import { firestorePlugin } from 'vuefire'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



const firebaseConfig = {
  apiKey: "AIzaSyCNhOD-40tl6jh2FSwtgWJ16ao0AKEu_ZU",
  authDomain: "gradelog-dev.firebaseapp.com",
  databaseURL: "https://gradelog-dev.firebaseio.com",
  projectId: "gradelog-dev",
  storageBucket: "gradelog-dev.appspot.com",
  messagingSenderId: "468701805966",
  appId: "1:468701805966:web:33edc0e3f74bf3cb4cb8df",
  measurementId: "G-7EJF7TZ2NS"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(
  () => {
    let app
    if (!app) {
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')

    }
  }
)

Vue.config.productionTip = false, IconsPlugin

Vue.use(BootstrapVue, IconsPlugin, firestorePlugin)



