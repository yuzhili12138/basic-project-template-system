<template>
	<NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme="darkTheme">
		<n-message-provider>
			<n-dialog-provider>
				<ScaleScreen>
					<RouterView />
				</ScaleScreen>
				<Common />
			</n-dialog-provider>
		</n-message-provider>
	</NConfigProvider>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {
	NConfigProvider,
	NMessageProvider,
	NDialogProvider,
	zhCN,
	dateZhCN,
	darkTheme
} from 'naive-ui'
import Common from '@/components/common/index.vue'
import ScaleScreen from '@/components/scaleScreen/index.vue'
</script>
