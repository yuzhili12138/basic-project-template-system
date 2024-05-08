<template>
	<div class="mapPop">
		<div class="canMove text-center" ref="chatbox">
			<div @mousedown="dragx($event)" class="canmoveTitle">在正确分辨率下才能拖动我</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { moveDom } from '@/hooks/moveDom.hook'

const { chatbox, dragx } = moveDom()
</script>
<style lang="scss" scoped>
.mapPop {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	pointer-events: none;
	user-select: none; /* webkit浏览器 */
	user-select: none; /* 火狐 */
	user-select: none; /* IE10 */
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
</style>
