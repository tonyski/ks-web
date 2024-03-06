const request = async (url: string, config: any) => {
	const endpoint = import.meta.env.PUBLIC_KS_API_URL;

	return await fetch(endpoint + url, config)
		.then((res: any) => {
			if (!res.ok) {
				// 服务器异常返回
				throw Error('接口请求异常');
			}
			return res.json();
		})
		.catch((error: any) => {
			return Promise.reject(error);
		});
};

// GET请求
export const get = async (url: string) => {
	return await request(url, { method: 'GET' });
};

// POST请求
export const post = async (url: string, data: any) => {
	return await request(url, {
		body: JSON.stringify(data),
		headers: {
			'content-type': 'application/json',
		},
		method: 'POST',
	});
};
