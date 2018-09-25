import Vue from 'vue'
import Router from 'vue-router'
import TaskCenter from '@/components/TaskCenter'

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
