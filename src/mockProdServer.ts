import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import mock from '../mock/index.mock'

export async function setupProdMockServer() {
	const mockModules = [...mock]
	createProdMockServer(mockModules)
}
