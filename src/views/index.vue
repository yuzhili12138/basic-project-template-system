<template>
	<div class="text">我是页面</div>
	<div class="flex">123</div>
</template>

<script lang="ts" setup>
import { getUserInfoApi } from '@/api/index'

getUserInfoApi().then((res) => {
	console.log(res)
})

let a = {
	a: 10,
	b: 20
}

let b = {
	a: 10,
	b: 20
}
// 自动引入了ref
const toolButton = ref(false)
</script>
<style lang="scss" scoped>
.text {
	color: red;
}
</style>
