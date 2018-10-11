import Vue from 'vue'
import Router from 'vue-router'
import TaskCenter from '@/pages/TaskCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskCenter',
      component: TaskCenter
    }
  ]
})
