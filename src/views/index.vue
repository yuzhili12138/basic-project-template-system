<template>
	<div class="wrapper">
		<div class="pageWrapper">
			<Header />
			<Left />
			<Right />
			<MapPop />
		</div>
	</div>
</template>
<script lang="ts" setup>
import Header from './header/index.vue'
import Left from './left/index.vue'
import Right from './right/index.vue'
import MapPop from './map/mapPop.vue'

// mock接口
import { getUserInfoApi } from '@/api/index'
getUserInfoApi().then((res) => {
	console.log(res)
})
</script>
<style lang="scss" scoped>
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
</style>
