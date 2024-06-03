<template>
	<div style="width: 100%">
		<div class="font35 color-red-4">示例页面 examples/index.vue</div>
		<ScrollTable v-bind="scrollTableData" />
		<ModelTable
			v-bind="modelTableData"
			@close="modelTableData.show = false"
			@submit="modelTableData.submit"
			@update-page="modelTableData.updatePage"
		/>
		<NButton @click="modelTableData.show = true" color="red">弹窗按钮</NButton>
	</div>
</template>

<script lang="ts" setup>
import ScrollTable from '@/components/scrollTable/index.vue'
import ModelTable from '@/components/modelTable/index.vue'
import { NButton } from 'naive-ui'
const scrollTableData = reactive({
	height: 300,
	columns: [
		{
			title: '联单编号',
			key: 'code'
		},
		{
			title: '运出地',
			key: 'startingPlace'
		},
		{
			title: '目的地',
			key: 'terminusPlace'
		},
		{
			title: '货重（吨11）',
			key: 'weight',
			render: (row: any, index: number) => {
				return row.weight == '44' ? 'render' : row.weight
			}
		}
	],
	data: Array.from({ length: 100 }, (v, k) => {
		return {
			code: '11',
			startingPlace: '22',
			terminusPlace: '33',
			weight: '44'
		}
	})
})

const modelTableData: any = reactive({
	show: false,
	columns: [
		{ key: 'a', title: '车牌号', width: 150 },
		{ key: 'b', title: '驾驶员', width: 150 },
		{ key: 'c', title: '办结时间' },
		{
			key: 'd',
			title: '有效期限'
		}
	],
	formRules: [
		{
			type: 'input',
			key: 'name',
			text: '关键字'
		},
		{
			type: 'select',
			key: 'name2',
			text: '下拉',
			options: [
				{
					label: '123123',
					value: '123123'
				}
			]
		}
	],
	tableData: [],
	form: {
		name: '',
		name2: ''
	},
	title: '弹窗名称',
	submit: () => {
		console.log('参数：')
		console.log(modelTableData.form)
	},
	updatePage: (e: number) => {
		modelTableData.pagination.page = e
	},
	pagination: { page: 1, pageSize: 10, itemCount: 0 }
})

onMounted(() => {
	// 模拟请求
	setTimeout(() => {
		let obj = {
			tableData: Array.from({ length: 10 }, (v, k) => {
				return {
					a: '11',
					b: '22',
					c: '33',
					d: '44'
				}
			}),
			pagination: { page: 1, pageSize: 10, itemCount: 100 }
		}
		Object.assign(modelTableData, obj)
	}, 3000)
})
</script>
<style lang="scss" scoped></style>
