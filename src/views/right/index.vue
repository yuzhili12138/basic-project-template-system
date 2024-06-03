<template>
	<div class="rightWrapper">
		<Transition name="moveRight">
			<component style="position: absolute" :is="rightMenus[pageChooseName.rightName]" />
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
const rightMenus: any = {
	demo1: Demo1,
	examples: Examples
}
</script>
<style lang="scss" scoped>
.rightWrapper {
	position: absolute;
	top: 180px;
	right: 64px;
	width: 905px;
	height: 1880px;
	border: 1px solid red;
}

.moveRight-enter-from {
	opacity: 0;
	transform: translateX(900px);
}

.moveRight-enter-to {
	opacity: 1;
	transform: translateX(0);
}

.moveRight-leave-from {
	opacity: 1;
	transform: translateX(0);
}

.moveRight-leave-to {
	opacity: 0;
	transform: translateX(900px);
}

.moveRight-enter-active,
.moveRight-leave-active {
	transition: all 0.5s linear;
}
</style>
