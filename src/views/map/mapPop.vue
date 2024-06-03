<template>
	<div class="mapPop">
		<div class="canMove text-center" ref="chatbox">
			<div @mousedown="dragx($event)" class="canmoveTitle">
				在正确分辨率下才能拖动我

				<div class="btns">
					左边页面
					<div v-for="(item, index) in btns" :key="index" @click="pageChooseName.leftName = item">
						{{ item }}
					</div>
				</div>
				<div class="btns">
					右边页面
					<div v-for="(item, index) in btns" :key="index" @click="pageChooseName.rightName = item">
						{{ item }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { NButton, NButtonGroup } from 'naive-ui'
import { moveDom } from '@/hooks/moveDom.hook'
import { usePageStore } from '@/stores/page'
import { storeToRefs } from 'pinia'
const { chatbox, dragx } = moveDom()
// 选择页面
const pageStroe = usePageStore()
const { pageChooseName } = storeToRefs(pageStroe)
const btns = ['examples', 'demo1']
</script>
<style lang="scss" scoped>
.mapPop {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	pointer-events: none; /* webkit浏览器 */ /* 火狐 */ /* IE10 */
	user-select: none;

	.canMove {
		position: absolute;
		width: 1000px;
		height: 1000px;
		font-size: 40px;
		line-height: 100px;
		pointer-events: all;
		background-color: #ccc;

		.canmoveTitle {
			width: 100%;
			color: black;
			cursor: move;
			background-color: #fff;
		}
	}
}

.btns {
	display: flex;

	> div {
		margin: 0 20px;
		cursor: pointer;
		border: 1px solid red;
	}
}
</style>
