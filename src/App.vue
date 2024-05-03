<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { NConfigProvider, NMessageProvider, NDialogProvider, zhCN, dateZhCN } from 'naive-ui'
import Common from '@/components/common/index.vue'
import ZoomPage from '@/components/zoomPage/index.vue'
</script>
<template>
	<NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
		<n-message-provider>
			<n-dialog-provider>
				<ZoomPage>
					<RouterView />
				</ZoomPage>
				<Common />
			</n-dialog-provider>
		</n-message-provider>
	</NConfigProvider>
</template>
