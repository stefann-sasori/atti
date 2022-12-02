import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
router.beforeEach((to, from) => {
    if(to.name !== "Login" && !store.state.logged){
        router.push({name: "Login"});
    }
})