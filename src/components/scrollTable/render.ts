import { defineComponent, h } from 'vue'
export default defineComponent({
	functional: true,
	props: {
		row: Object,
		column: Object,
		index: Number || String,
		render: Function
	},
	render: (props: any) => {
		return props.render(props.row, props.index)
	}
})
