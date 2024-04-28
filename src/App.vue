<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { NConfigProvider, NMessageProvider, NDialogProvider, zhCN, dateZhCN } from 'naive-ui'
import Common from '@/components/common/index.vue'
</script>
<template>
	<NConfigProvider>
		<n-message-provider>
			<n-dialog-provider>
				<n-config-provider :locale="zhCN" :date-locale="dateZhCN">
					<RouterView />
					<Common />
				</n-config-provider>
			</n-dialog-provider>
		</n-message-provider>
	</NConfigProvider>
</template>
