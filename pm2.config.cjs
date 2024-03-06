module.exports = {
	apps: [
		{
			name: 'ks-web',
			script: './dist/server/entry.mjs',
			interpreter: 'node',
		},
	],
};
