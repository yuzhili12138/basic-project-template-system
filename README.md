### 全局弹窗
```
window.$dialog.warning({
	title: '警告',
	content: '你确定？',
	positiveText: '确定',
	negativeText: '不确定',
	onPositiveClick: () => {
		window.$message.success('确定')
	},
	onNegativeClick: () => {
		window.$message.error('不确定')
	}
})
```

### 使用vue3.4 + pinia + naive-ui +eslint

### 可以使用mock数据进行测试环境和生产环境的模拟数据

- [ESLint+Prettier+Stylelint+EditorConfig 约束和统一前端代码规范](https://blog.csdn.net/u013737132/article/details/130190788)
- [Husky + Lint-staged + Commitlint + Commitizen + cz-git 配置 Git 提交规范](https://blog.csdn.net/u013737132/article/details/130191363)
- [unocss](https://uno.antfu.me/)
