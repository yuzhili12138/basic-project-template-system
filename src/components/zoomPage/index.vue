<template>
	<div>
		<div class="fit" :style="fitStyle">
			<div class="scaleFit" ref="previewRef">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useScale } from '@/hooks/useScale.hook'
const SCREEN_ZOOM = import.meta.env.VITE_SCREEN_ZOOM
const { entityRef, previewRef } =
	SCREEN_ZOOM === 'true'
		? useScale('full')
		: {
				entityRef: null,
				previewRef: null
		  }

const fitStyle = reactive<any>(
	SCREEN_ZOOM == 'true'
		? {
				height: '100vh',
				display: 'flex'
		  }
		: {
				height: 'auto',
				display: 'block'
		  }
)
</script>
<style lang="scss" scoped>
.fit {
	display: flex;
	align-items: center;
	justify-content: center;
}

.scaleFit {
	transform-origin: center center;

	/* overflow: hidden; */
}
</style>
