<template>
	<!-- echarts展示dom -->
	<div ref="chartBox" class="echartsBox"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, toRefs, ref, watch } from 'vue'
import type { ECharts } from 'echarts'
import {
	initChart,
	destroyChart,
	// clearChart,
	updatedChartOption,
	tooltipAnimationFunc
} from './echartsFunc'

interface Props {
	options: any
	tooltipAnimation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	tooltipAnimation: false
})
// 解构prop数据
const { options, tooltipAnimation } = toRefs(props)
// 获取dom
let chartBox = ref(null)
// echarts实例
let myChart: ECharts
// onMounted 生命周期
onMounted(() => {
	// 清除时间定时器
	if (timer) clearTimeout(timer)
	// 判断dom是否创建
	if (chartBox.value) {
		myChart = initChart(chartBox.value, options.value)
		// 事件绑定
		myChart.on('click', function (params) {
			console.log(params)
		})
		myChart.on('mouseover', (params) => {
			controlAnimate = false
		})
		myChart.on('mouseout', (params) => {
			controlAnimate = true
		})

		if (tooltipAnimation.value) {
			console.log('onMounted的状态')
			chartAnimation()
		}

		window.addEventListener('resize', function () {
			myChart.resize()
			1
		})
	}
})
// onUnmounted生命周期
onUnmounted(() => {
	destroyChart(myChart)
	chartBox.value = null
	// 清除时间定时器
	if (timer) clearTimeout(timer)
})
// 监听option的变化
watch(
	() => props.options,
	(newOptions) => {
		updatedChartOption(myChart, newOptions)
	},
	{
		deep: true
	}
)
// 监听是否开启tip动画
watch(
	() => props.tooltipAnimation,
	() => {
		console.log('改变')

		chartAnimation()
	}
)

// 是否开启tip动画
let curIndex = 0 // 下标指引
let lastIndex = 0
// 组件内部控制动画运行
let controlAnimate = true
// 保存时间
let timer: ReturnType<typeof setTimeout>
const chartAnimation = () => {
	const { options, tooltipAnimation } = toRefs(props)
	if (tooltipAnimation.value && controlAnimate) {
		tooltipAnimationFunc(myChart, curIndex, lastIndex)
		lastIndex = curIndex
		curIndex++
		// 获取数据长度
		if (options.value) {
			const type = options.value.series[0].type
			let xAxisLen
			if (type == 'pie') {
				xAxisLen = options.value.series[0].data.length
			} else {
				xAxisLen = options.value.xAxis.data.length
			}
			if (curIndex >= xAxisLen) {
				curIndex = 0
			}
		}
		timer = setTimeout(() => {
			chartAnimation()
		}, 1000 * 2)
	}
}
</script>

<style>
.echartsBox {
	width: 100%;
	height: 100%;
}
</style>
