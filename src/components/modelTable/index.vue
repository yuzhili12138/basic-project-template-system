<template>
	<NModal :show="show" @after-leave="close" :to="domRef" size="large">
		<div class="modelBox">
			<n-card :bordered="true" :title="title" size="large">
				<template #header-extra>
					<img class="close-btn" src="@/assets/images/modal/close.png" @click="close" />
				</template>
				<div class="formBox">
					<template v-for="(item, index) in formRules" :key="index">
						<div class="formItem">
							<div class="key">{{ item.text }}:</div>
							<div>
								<n-input
									size="large"
									v-model:value="formModel[item.key]"
									clearable
									v-if="item.type == 'input'"
								/>
								<n-select
									:to="false"
									:options="item.options"
									v-model:value="formModel[item.key]"
									style="width: 200px"
									size="large"
									clearable
									v-if="item.type == 'select'"
								/>
							</div>
						</div>
					</template>
					<n-button type="tertiary" size="large" @click="submit"> 确定 </n-button>
				</div>
				<NDataTable
					remote
					:columns="columns"
					:data="tableData"
					:max-height="500"
					:min-height="500"
					:pagination="pagination"
					size="large"
					@update:page="update"
				/>
				<!-- <div class="pagin">
					<n-pagination :item-count="itemCount" @update:page="update" show-quick-jumper />
				</div> -->
			</n-card>
		</div>
	</NModal>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { NModal, NButton, NDataTable, NCard, NInput, NSelect } from 'naive-ui'

// 定义prop数据类型
interface FormRules {
	type: 'input' | 'select'
	key: string
	text: string
	options?: any
}
interface Props {
	title?: string
	show?: boolean
	form?: any
	formRules: FormRules[] | []
	columns?: any
	tableData?: any
	pagination?: any
}

const props = withDefaults(defineProps<Props>(), {
	// 弹窗名称
	title: '',
	// 展示
	show: false,
	// 筛选条件规则
	formRules: () => [],
	columns: [],
	tableData: [],
	pagination: {}
})
// 筛选条件参数
const formModel: any = defineModel('form', {
	required: false,
	type: Object
})
const { columns, tableData, pagination } = toRefs(props)

const domRef = ref()
onMounted(() => {
	domRef.value = document.getElementById('scaleFit')
})

const emits = defineEmits(['updatePage', 'submit', 'close'])

const update = (e: any) => {
	emits('updatePage', e)
}

const close = (e: any) => {
	emits('close')
}

const submit = () => {
	emits('submit')
}
</script>
<style lang="postcss" scoped>
.modelBox {
	box-sizing: border-box;
	width: 1400px !important;
	padding-top: 0;

	.close-btn {
		width: 25px;
		height: 25px;
		cursor: pointer;
	}

	.top-border {
		position: absolute;
		top: 0;
		left: 0;
		width: 358px;
	}
}

.headerTitle {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	padding: 0 10px;
	font-size: 24px;

	img {
		width: 25px;
		height: 25px;
		cursor: pointer;
	}
}

.pagin {
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
}

.formBox {
	display: flex;
}

.formItem {
	display: flex;
	align-items: center;
	margin-right: 20px;
	margin-bottom: 20px;
	font-size: 16px;

	.key {
		margin-right: 20px;
	}
}
</style>
