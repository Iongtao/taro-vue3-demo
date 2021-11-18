import Taro from '@tarojs/taro'
declare type Option = Omit<Taro.request.Option, 'url' | 'data' | 'method'>

Taro.addInterceptor((chain) => {
	console.log('chain', chain)
	const { requestParams } = chain
	const { method, data, url } = requestParams

	console.log('method:', method, 'data:', data, 'url:', url)

	return chain.proceed(chain.requestParams)
})

enum ErrorCode {
	请验证身份 = 401,
	无请求权限 = 403,
	请求地址错误 = 404,
	请求方法错误 = 405,
	服务器内部错误 = 500,
}

class Http {
	async requset<T = any, U = any>(option: Taro.request.Option) {
		return Taro.request<T, U>(option)
			.then((res) => {
				const { statusCode, data } = res
				if (statusCode === 200) return Promise.resolve(data)
				else {
					Taro.showToast({
						title: ErrorCode[statusCode],
						icon: 'none',
					})
					return Promise.reject({
						errorCode: statusCode,
						errorTxt: ErrorCode[statusCode],
					})
				}
			})
			.catch((err) => Promise.reject(err))
	}
	get<T = any, U = any>(url: string, data?: U, option?: Option) {
		return this.requset<T, U>({
			url,
			method: 'GET',
			data,
			...option,
		})
	}
	post<T = any, U = any>(url: string, data?: U, option?: Option) {
		return this.requset<T, U>({
			url,
			method: 'POST',
			data,
			...option,
		})
	}
	put<T = any, U = any>(url: string, data?: U, option?: Option) {
		return this.requset<T, U>({
			url,
			method: 'PUT',
			data,
			...option,
		})
	}
	delete<T = any, U = any>(url: string, data?: U, option?: Option) {
		return this.requset<T, U>({
			url,
			method: 'DELETE',
			data,
			...option,
		})
	}
}

export default new Http()
