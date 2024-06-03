<template>
	<div class="leftWrapper">
		<Transition name="moveLeft">
			<component style="position: absolute" :is="letfMenus[pageChooseName.leftName]" />
		</Transition>
	</div>
</template>

<script lang="ts" setup>
import Examples from '../examples/index.vue'
import Demo1 from './components/demo1.vue'
import { usePageStore } from '@/stores/page'
import { storeToRefs } from 'pinia'
// 选择页面
const pageStroe = usePageStore()
const { pageChooseName } = storeToRefs(pageStroe)
const letfMenus: any = {
	demo1: Demo1,
	examples: Examples
}
</script>
<style lang="scss" scoped>
.leftWrapper {
	position: absolute;
	top: 180px;
	left: 64px;
	width: 905px;
	height: 1900px;
	border: 1px solid red;
}

.moveLeft-enter-from {
	opacity: 0;
	transform: translateX(-900px);
}

.moveLeft-enter-to {
	opacity: 1;
	transform: translateX(0);
}

.moveLeft-leave-from {
	opacity: 1;
	transform: translateX(0);
}

.moveLeft-leave-to {
	opacity: 0;
	transform: translateX(-900px);
}

.moveLeft-enter-active,
.moveLeft-leave-active {
	transition: all 0.5s linear;
}
</style>
