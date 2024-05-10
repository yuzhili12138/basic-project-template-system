<template>
	<div class="commonTableBox">
		<div class="tableList">
			<div class="tHeader">
				<div>
					<img src="./images/ju.png" class="jupng" />
				</div>
				<div v-for="(item, index) in columns" :key="index">
					{{ item.title }}
				</div>
			</div>
			<div class="tBorder" :style="{ height: height + 'px' }">
				<vue3-seamless-scroll :list="data" hover :step="0.5">
					<div v-for="(item, index) in data" :key="item.code" class="border">
						<div>
							<img src="./images/ju1.png" class="jupng" />
						</div>
						<div
							v-for="(jtem, jndex) in columns"
							:key="jndex"
							:title="item[jtem.key]"
							@click="lineClick(item)"
						>
							<template v-if="jtem.render">
								<Render :row="item" :column="jtem" :index="index" :render="jtem.render" />
							</template>
							<template v-else>
								{{ item[jtem.key] }}
							</template>
						</div>
					</div>
				</vue3-seamless-scroll>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import Render from './render'
import { Vue3SeamlessScroll } from 'vue3-seamless-scroll'
import { toRefs } from 'vue'

const props: any = defineProps({
	height: {
		type: Number,
		default: 567
	},
	hoverStyle: {
		type: Object,
		default: () => {
			return {
				background: 'linear-gradient(0deg, rgba(44,246,182,0.51), rgba(5,15,10,0))',
				border: '1px solid rgba(44,246,182,0.4)'
			}
		}
	},
	columns: {
		type: Object,
		default: () => {
			return []
		}
	},
	data: {
		type: Object,
		default: () => {
			return []
		}
	}
})
const { hoverStyle, height, columns, data }: any = toRefs(props)
const { background, border } = toRefs(hoverStyle.value)
const length = columns.value.length

const lineClick = (item: any) => {}
</script>

<style lang="scss" scoped>
.tableList {
	.tHeader {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		width: 100%;
		height: 60px;
		padding: 0 7px;
		font-size: 28px;
		line-height: 60px;
		color: white;
		background: rgb(78 90 122 / 10%);
		border: 1px solid rgb(69 77 88 / 40%);

		> div {
			display: flex;
			align-items: center;
			width: calc((100% - 25px) / v-bind(length));

			.jupng {
				width: 12px;
				height: 12px;
			}
		}

		> div:nth-child(1) {
			width: 25px;
		}
	}

	.tBorder {
		overflow-y: hidden;
		font-size: 26px;
		color: white;

		.border {
			display: flex;
			height: 60px;
			padding: 0 7px;
			margin-top: 8px;
			line-height: 60px;
			background: rgb(78 90 122 / 10%);
			border: 1px solid transparent;

			> div {
				width: calc((100% - 25px) / v-bind(length));
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				cursor: pointer;
			}

			> div:nth-child(1) {
				display: flex;
				align-items: center;
				width: 25px;

				.jupng {
					width: 12px;
					height: 12px;
				}
			}
		}

		.border:hover {
			background: v-bind(background) !important;
			border: v-bind(border);
		}
	}
}

.commonTableBox {
	width: 100%;
}
</style>
