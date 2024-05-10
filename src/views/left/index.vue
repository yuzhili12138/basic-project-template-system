<template>
	<div class="menuLeft">
		<Examples />
	</div>
</template>

<script lang="ts" setup>
import Examples from '../examples/index.vue'
</script>
<style lang="scss" scoped>
.menuLeft {
	position: absolute;
	top: 180px;
	left: 64px;
	width: 905px;
	height: 1900px;
	border: 1px solid red;
}
</style>
