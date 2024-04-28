import { fileURLToPath, URL } from 'node:url'
import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// 模拟接口mock数据
import { vitePluginFakeServer } from 'vite-plugin-fake-server'
// https://vitejs.dev/config/
import UnoCSS from 'unocss/vite'
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const env = loadEnv(mode, process.cwd())
	return {
		base: './',
		plugins: [
			vue(),
			vitePluginFakeServer({
				logger: false,
				include: 'mock',
				infixName: false,
				enableProd: true
			}),
			UnoCSS({
				hmrTopLevelAwait: false
			}),
			// 自动导入参考： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
			AutoImport({
				// 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
				imports: ['vue', 'pinia', 'vue-router'],
				eslintrc: {
					enabled: false,
					filepath: './.eslintrc-auto-import.json',
					globalsPropValue: true
				},
				vueTemplate: true,
				// 配置文件生成位置(false:关闭自动生成)
				dts: false
				// dts: "src/typings/auto-imports.d.ts",
			}),
			Components({
				// 指定自定义组件位置(默认:src/components)
				dirs: ['src/components', 'src/**/components'],
				// 配置文件位置 (false:关闭自动生成)
				dts: false
				// dts: "src/typings/components.d.ts",
			})
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		server: {
			// 允许IP访问
			// host: "0.0.0.0",
			// 应用端口 (默认:3000)
			// port: Number(env.VITE_APP_PORT),
			// 运行是否自动打开浏览器
			open: true,
			proxy: {
				/**
				 * 代理前缀为 /dev-api 的请求
				 */
				[env.VITE_APP_BASE_API]: {
					changeOrigin: true,
					// 接口地址
					target: env.VITE_APP_API_URL,
					rewrite: (path: any) => {
						return path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
					}
				}
			}
		}
	}
})
