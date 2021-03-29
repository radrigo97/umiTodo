import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/user', component: '@/pages/count/User' },
    { path: '/list', component: '@/pages/todo/List' },
  ],
  fastRefresh: {},
});
