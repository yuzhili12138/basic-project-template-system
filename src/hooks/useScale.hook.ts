import { ref, onMounted, onUnmounted } from 'vue'
import {
	usePreviewFitScale,
	usePreviewScrollYScale,
	usePreviewScrollXScale,
	usePreviewFullScale
} from '@/hooks/index'

export const useScale = (fScaleType: any) => {
	const entityRef = ref()
	const previewRef = ref()
	const width = ref(3840)
	const height = ref(2160)

	// 屏幕适配
	onMounted(() => {
		switch (fScaleType) {
			case 'fit':
				;(() => {
					const { calcRate, windowResize, unWindowResize } = usePreviewFitScale(
						width.value as number,
						height.value as number,
						previewRef.value
					)
					calcRate()
					windowResize()
					onUnmounted(() => {
						unWindowResize()
					})
				})()
				break
			case 'scrollY':
				;(() => {
					const { calcRate, windowResize, unWindowResize } = usePreviewScrollYScale(
						width.value as number,
						height.value as number,
						previewRef.value,
						(scale) => {
							const dom = entityRef.value
							dom.style.width = `${width.value * scale.width}px`
							dom.style.height = `${height.value * scale.height}px`
						}
					)
					calcRate()
					windowResize()
					onUnmounted(() => {
						unWindowResize()
					})
				})()

				break
			case 'scrollX':
				;(() => {
					const { calcRate, windowResize, unWindowResize } = usePreviewScrollXScale(
						width.value as number,
						height.value as number,
						previewRef.value,
						(scale) => {
							const dom = entityRef.value
							dom.style.width = `${width.value * scale.width}px`
							dom.style.height = `${height.value * scale.height}px`
						}
					)
					calcRate()
					windowResize()
					onUnmounted(() => {
						unWindowResize()
					})
				})()

				break
			case 'full':
				;(() => {
					const { calcRate, windowResize, unWindowResize } = usePreviewFullScale(
						width.value as number,
						height.value as number,
						previewRef.value
					)
					calcRate()
					windowResize()
					onUnmounted(() => {
						unWindowResize()
					})
				})()
				break
		}
	})

	return {
		entityRef,
		previewRef
	}
}
