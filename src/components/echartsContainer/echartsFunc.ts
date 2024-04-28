import * as echarts from 'echarts'
import type { ECharts, EChartsOption } from 'echarts'

/**
 * 初始化图表
 * @param {HTMLElement} chartDom
 * @returns
 */
export function initChart(chartDom: HTMLElement, option?: EChartsOption) {
	const myChart: ECharts = echarts.init(chartDom)

	option && myChart.setOption(option)

	return myChart
}

/**
 * 更新chart的option
 * @param {EChartsOption} option
 */
export function updatedChartOption(myChart: ECharts, option: EChartsOption) {
	option && myChart.setOption(option)
}

/**
 * 销毁图表
 * @param {ECharts} myChart
 */
export function destroyChart(myChart: ECharts) {
	myChart.dispose()
}

/**
 * 清除图表
 * @param {ECharts} myChart
 */
export function clearChart(myChart: ECharts) {
	myChart.clear()
}

/**
 * 启动tooltip切换动画
 * @param {boolean} state
 */
export function tooltipAnimationFunc(myChart: ECharts, curIndex: number, lastIndex: number) {
	//取消之前高亮的图形
	myChart.dispatchAction({
		type: 'downplay',
		seriesIndex: 0,
		dataIndex: lastIndex
	})

	// 模拟选中
	myChart.dispatchAction({
		type: 'showTip',
		seriesIndex: 0,
		dataIndex: curIndex
	})
	myChart.dispatchAction({
		type: 'highlight',
		dataIndex: curIndex
	})
}
