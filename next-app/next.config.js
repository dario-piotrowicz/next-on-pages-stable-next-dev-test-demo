/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

if (process.env.NODE_ENV === 'development') {
	const { setupDevBindings } = require('@cloudflare/next-on-pages/next-dev');

	setupDevBindings({
        bindings: {
            'MY_KV': {
                type: 'kv',
                id: 'MY_KV'
            },
            "MY_VAR": {
                type: 'var',
                value: 'my-var-value'
            },
            "MY_WORKER": {
                type: 'service',
                service: {
                    name: 'hello-worker'
                }
            },
            "MY_DO": {
                type: 'durable-object',
                service: {
                    name: 'do_worker',
                },
                className: 'DurableObjectClass'
            },
            "MY_D1": {
                type: 'd1',
                databaseName: 'MY_D1'
            },
            "MY_R2": {
                type: 'r2',
                bucketName: 'MY_R2'
            }
        }
	});
}