// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss'

export default defineConfig({
	rules: [[/^font([\.\d]+)$/, ([_, num]) => ({ 'font-size': `${num}px` })]],
	shortcuts: {
		'flex-center': 'flex justify-center items-center',
		'flex-x-center': 'flex justify-center',
		'flex-y-center': 'flex items-center',
		'wh-full': 'w-full h-full',
		'flex-x-between': 'flex items-center justify-between',
		'flex-x-end': 'flex items-center justify-end',
		'absolute-lt': 'absolute left-0 top-0',
		'absolute-rt': 'absolute right-0 top-0 ',
		'fixed-lt': 'fixed left-0 top-0'
	},
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				// ...
			}
		})
	],
	transformers: [transformerDirectives(), transformerVariantGroup()]
})
