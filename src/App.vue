<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { NConfigProvider, NMessageProvider, NDialogProvider, zhCN, dateZhCN } from 'naive-ui'
import Common from '@/components/common/index.vue'
</script>
<template>
	<NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
		<n-message-provider>
			<n-dialog-provider>
				<RouterView />
				<Common />
			</n-dialog-provider>
		</n-message-provider>
	</NConfigProvider>
</template>
