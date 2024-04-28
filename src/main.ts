import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 使用mock数据
if (process.env.NODE_ENV === 'production' && process.env.VITE_MOCK_SERVER === 'true') {
	import('./mockProdServer').then(({ setupProdMockServer }) => {
		setupProdMockServer()
	})
}

const app = createApp(App)
import 'virtual:uno.css'
import '@/styles/index.scss'

app.use(createPinia())
app.use(router)

app.mount('#app')
