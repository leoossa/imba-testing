import { imba } from 'vite-plugin-imba';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/imba-testing/',
	plugins: [imba()],
});
