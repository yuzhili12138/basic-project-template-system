export default [
	{
		url: '/api/get',
		method: 'get',
		response: ({}) => {
			return {
				code: 200,
				data: {
					请求URL: '/api/get',
					路径: '我是mock请求在根目录mock文件夹下',
					关闭方法: '配置文件VITE_MOCK_SERVER参数'
				}
			}
		}
	}
]
