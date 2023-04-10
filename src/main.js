import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

const GStore = reactive({ flashMessage: '' })

app.use(createPinia())
app.use(router)
app.provide('GStore', GStore)
app.mount('#app')
