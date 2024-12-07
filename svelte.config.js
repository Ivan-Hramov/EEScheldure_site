import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Опционально: если сайт размещён в поддиректории
			pages: 'build', // Директория для сборки
			assets: 'build',
			fallback: 'index.html', // Файл для маршрутов SPA
			precompress: false
		}),
		paths: {
		}
	}
};

export default config;
