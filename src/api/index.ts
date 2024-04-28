import request from '@/utils/request'
export function getUserInfoApi() {
	return request({
		url: '/api/get',
		method: 'get'
	})
}
