<template>
	<div class="fit" :style="fitStyle">
		<div class="scaleFit" ref="previewRef">
			<div class="wrapper">
				<div class="pageWrapper">
					<Header />
					<Left />
					<Right />
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import Header from './header/index.vue'
import Left from './left/index.vue'
import Right from './right/index.vue'
import { useScale } from '@/hooks/useScale.hook'
const { entityRef, previewRef } =
	import.meta.env.VITE_SCREEN_ZOOM === 'true'
		? useScale('full')
		: {
				entityRef: null,
				previewRef: null
			}

const fitStyle = reactive<any>({
	height: import.meta.env.VITE_SCREEN_ZOOM === 'true' ? '100vh' : 'auto',
	display: import.meta.env.VITE_SCREEN_ZOOM === 'true' ? 'flex' : 'block'
})

// mock接口
import { getUserInfoApi } from '@/api/index'
getUserInfoApi().then((res) => {
	console.log(res)
})
</script>
<style lang="scss" scoped>
.text {
	color: red;
}

.fit {
	display: flex;
	align-items: center;
	justify-content: center;
}

.wrapper {
	width: var(--screen-width);
	height: var(--screen-height);
	background-image: url('@/assets/imgs/mengceng.png');
	background-size: 100% 100%;
	transform-origin: center center;
}

.pageWrapper {
	position: relative;
	width: 100%;
	height: 100%;
	background-image: url('@/assets/imgs/border.png');
	background-size: 100% 100%;
}

.scaleFit {
	transform-origin: center center;

	/* overflow: hidden; */
}
</style>
