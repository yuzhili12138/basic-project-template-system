import * as echarts from 'echarts'
export const getOptions1 = () => {
	return {
		backgroundColor: '#031245',
		color: [
			'#63caff',
			'#49beff',
			'#03387a',
			'#03387a',
			'#03387a',
			'#6c93ee',
			'#a9abff',
			'#f7a23f',
			'#27bae7',
			'#ff6d9d',
			'#cb79ff',
			'#f95b5a',
			'#ccaf27',
			'#38b99c',
			'#93d0ff',
			'#bd74e0',
			'#fd77da',
			'#dea700'
		],
		grid: {
			containLabel: true,
			left: 20,
			right: 20,
			bottom: 10,
			top: 40
		},
		xAxis: {
			axisLabel: {
				color: '#c0c3cd',
				fontSize: 14,
				interval: 0
			},
			axisTick: {
				lineStyle: {
					color: '#384267'
				},
				show: true
			},
			splitLine: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#384267',
					width: 1,
					type: 'dashed'
				},
				show: true
			},
			data: [
				'0点~2点',
				'3点~5点',
				'6点~8点',
				'0点~2点',
				'3点~5点',
				'6点~8点',
				'0点~2点',
				'3点~5点'
			],
			type: 'category'
		},
		yAxis: {
			axisLabel: {
				color: '#c0c3cd',
				fontSize: 14
			},
			axisTick: {
				lineStyle: {
					color: '#384267',
					width: 1
				},
				show: true
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#384267',
					type: 'dashed'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#384267',
					width: 1,
					type: 'dashed'
				},
				show: true
			},
			name: ''
		},
		series: [
			{
				data: [200, 85, 112, 275, 305, 415, 741, 405],
				type: 'bar',
				barMaxWidth: 'auto',
				barWidth: 30,
				itemStyle: {
					color: {
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						type: 'linear',
						global: false,
						colorStops: [
							{
								offset: 0,
								color: '#0b9eff'
							},
							{
								offset: 1,
								color: '#63caff'
							}
						]
					}
				},
				label: {
					show: true,
					position: 'top',
					distance: 10,
					color: '#fff'
				}
			},
			{
				data: [1, 1, 1, 1, 1, 1, 1, 1],
				type: 'pictorialBar',
				barMaxWidth: '20',
				symbol: 'diamond',
				symbolOffset: [0, '50%'],
				symbolSize: [30, 15]
			},
			{
				data: [200, 85, 112, 275, 305, 415, 741, 405],
				type: 'pictorialBar',
				barMaxWidth: '20',
				symbolPosition: 'end',
				symbol: 'diamond',
				symbolOffset: [0, '-50%'],
				symbolSize: [30, 12],
				zlevel: 2
			},
			{
				data: [741, 741, 741, 741, 741, 741, 741, 741],
				type: 'bar',
				barMaxWidth: 'auto',
				barWidth: 30,
				barGap: '-100%',
				zlevel: -1
			},
			{
				data: [1, 1, 1, 1, 1, 1, 1, 1],
				type: 'pictorialBar',
				barMaxWidth: '20',
				symbol: 'diamond',
				symbolOffset: [0, '50%'],
				symbolSize: [30, 15],
				zlevel: -2
			},
			{
				data: [741, 741, 741, 741, 741, 741, 741, 741],
				type: 'pictorialBar',
				barMaxWidth: '20',
				symbolPosition: 'end',
				symbol: 'diamond',
				symbolOffset: [0, '-50%'],
				symbolSize: [30, 12],
				zlevel: -1
			}
		],
		tooltip: {
			trigger: 'axis',
			show: false
		}
	}
}

export const getOptions2 = () => {
	// 计划产值
	const zzx1 = [27, 38, 41, 21, 27]
	const zx = zzx1.map((item) => {
		return 100 - item
	})
	// 实际产值
	const wgx1 = [37, 40, 63, 61, 64]
	const wg = wgx1.map((item) => {
		return 100 - item
	})
	const barWidth = 40
	return {
		backgroundColor: '#010243',
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				// 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			},
			formatter: function (e) {
				// console.log(e);
				const str =
					e[6].axisValue +
					'<br>' +
					"<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" +
					e[6].color.colorStops[0].color +
					";'></span>" +
					'' +
					e[6].seriesName +
					' : ' +
					e[6].value +
					'%<br>' +
					"<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" +
					e[8].color.colorStops[0].color +
					";'></span>" +
					'' +
					e[8].seriesName +
					' : ' +
					e[8].value +
					'%'
				return str
			}
		},
		grid: {
			left: '2%',
			right: '4%',
			bottom: '4%',
			top: '16%',
			containLabel: true
		},
		legend: {
			data: ['计划产值', '实际产值'],

			top: 1,
			textStyle: {
				color: '#00ffff',
				fontSize: 14
			},
			itemWidth: 12,
			itemHeight: 10,
			itemGap: 35,
			color: '#242424',
			selectedMode: false
		},
		xAxis: {
			type: 'category',
			data: [
				'A高速公路建设项目质量合格率',
				'B高速公路建设项目质量合格率',
				'C高速公路建设项目质量合格率',
				'D高速公路建设项目质量合格率',
				'E高速公路建设项目质量合格率'
			],
			axisLine: {
				show: true,
				lineStyle: {
					color: '#15205B'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				// interval: 0,
				// rotate: 40,
				textStyle: {
					fontFamily: 'Microsoft YaHei',
					color: '#fff', // x轴颜色
					fontWeight: 'normal',
					fontSize: '14',
					lineHeight: 22
				},
				interval: 0, //标签设置为全部显示
				margin: 15,
				lineHeight: 15,
				// fontSize: 11,
				formatter: function (params) {
					const a = params.substring(0, params.length - 5)
					//   console.log(params.substring(0, params.length - 3));
					const newParamsName = a + '\n质量合格率'

					//将最终的字符串返回
					return newParamsName
				}
			}
		},

		yAxis: {
			min: 0,
			max: 100,
			type: 'value',

			axisLine: {
				show: true,
				lineStyle: {
					color: '#15205B'
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: 'rgba(135,140,147,1)' //左侧显示线
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				formatter: '{value}%',
				textStyle: {
					color: '#c9c9c9',
					fontSize: 14
				}
			}
		},
		series: [
			// 计划产值中间正方形
			{
				type: 'pictorialBar',
				symbol: 'diamond',

				symbolSize: [barWidth, 8],
				symbolOffset: [-26, -4],
				symbolPosition: 'end',
				z: 12,
				color: '#3185FF',
				data: zzx1
			},
			// 实际产值中间正方形
			{
				type: 'pictorialBar',
				symbol: 'diamond',
				symbolSize: [barWidth, 8],
				symbolOffset: [26, -4],
				symbolPosition: 'end',
				z: 12,
				color: '#1BCC98',
				data: wgx1
			},
			//  计划产值底部正方形
			{
				type: 'pictorialBar',
				symbol: 'diamond',
				symbolSize: [barWidth, 8],
				symbolOffset: [-26, 4],
				z: 12,
				color: '#161D6E',
				data: zzx1
			},
			// 实际产值底部正方形
			{
				name: '',
				type: 'pictorialBar',
				symbol: 'diamond',
				symbolSize: [barWidth, 8],
				symbolOffset: [26, 4],
				color: '#151D6E',
				z: 12,
				data: wgx1
			},
			// 计划产值上部正方形
			{
				data: [100, 100, 100, 100, 100],
				type: 'pictorialBar',

				symbol: 'diamond',
				symbolSize: [barWidth, 8],
				symbolOffset: [-26, -4],
				color: '#283190',

				symbolPosition: 'end'
			},
			// 实际产值上部正方形
			{
				data: [100, 100, 100, 100, 100],
				type: 'pictorialBar',

				symbol: 'diamond',
				symbolSize: [barWidth, 8],
				symbolOffset: [26, -4],
				color: '#283190',

				symbolPosition: 'end'
			},
			// 计划产值进度柱子
			{
				name: '计划产值',
				type: 'bar',
				barWidth: barWidth,
				// zlevel: 2,
				stack: '1',
				itemStyle: {
					normal: {
						opacity: 0.7,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: '#2863D2'
							},
							{
								offset: 1,
								color: '#161D6E'
							}
						]),
						barBorderRadius: 0
					}
				},
				label: {
					show: true,
					position: ['-18', '-18'],
					color: '#00f8ff',
					fontSize: 12
				},
				data: zzx1
			},
			// 计划产值底部柱子
			{
				data: zx,
				type: 'bar',

				barWidth: barWidth,
				stack: '1',

				zlevel: -1,
				itemStyle: {
					normal: {
						opacity: 0.7,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: '#182075'
							},
							{
								offset: 1,
								color: '#182075'
							}
						]),
						barBorderRadius: 0
					}
				}
			},
			// 实际产值进度柱子
			{
				name: '实际产值',
				type: 'bar',
				stack: '2',
				barWidth: barWidth,
				itemStyle: {
					normal: {
						opacity: 0.7,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: '#19958B'
							},
							{
								offset: 1,
								color: '#151B6F'
							}
						]),
						barBorderRadius: 0
					}
				},
				label: {
					show: true,
					position: ['18', '-18'],
					color: '#00f8ff',
					fontSize: 12
				},
				data: wgx1
			},
			// 实际产值底部柱子
			{
				data: wg,
				type: 'bar',
				barWidth: barWidth,
				stack: '2',

				zlevel: -1,
				itemStyle: {
					normal: {
						opacity: 0.7,
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
							{
								offset: 0,
								color: '#182075'
							},
							{
								offset: 1,
								color: '#182075'
							}
						]),
						barBorderRadius: 0
					}
				}
			}
		]
	}
}
