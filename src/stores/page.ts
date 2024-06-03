import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePageStore = defineStore('pageStore', () => {
	const pageChooseName = reactive({
		leftName: 'examples',
		rightName: 'examples'
	})
	return { pageChooseName }
})
