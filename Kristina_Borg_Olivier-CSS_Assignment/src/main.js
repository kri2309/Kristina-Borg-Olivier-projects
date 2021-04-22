import { createApp } from 'vue';
import App from './App.vue';
import { VuelidatePlugin } from '@vuelidate/core'

// register router which was installed and define the routes we want to have in app
import { createRouter, createWebHistory } from 'vue-router'
import TheForm from './components/TheForm.vue'
import DisplayData from './components/DisplayData.vue'
import LocalData from './components/LocalData.vue'
import EmployeeData from './components/EmployeeData.vue'
//import TheNavigation from './components/TheNavigation.vue'



const router = createRouter({
  // used to handle the previous pages visited e.g. back button (using the broswer built-in support)
  history: createWebHistory(),
  routes: [
    { path: '/', component: DisplayData },
    { path: '/addMember', component: TheForm },
    { path:'/addMember/:memberId', component: TheForm },
    { path:'/localdata', component: LocalData }
    //{ path:'/displayMember/:id', component: DisplayMember }
  ]
})

const app = createApp(App)
app.component('employee-list', EmployeeData);
app.use(router)
app.use(VuelidatePlugin)
app.mount('#app')