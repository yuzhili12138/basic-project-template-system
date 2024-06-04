/// <reference types="vite/client" />
declare module '*.vue' {
	import { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}

declare module 'vite-plugin-fake-server'
declare module 'vite-plugin-mock'
declare module 'vue3-scroll-seamless'
interface Window {
	$message: any
	$dialog: any
}
