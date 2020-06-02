import Vue from 'vue'
import VueRouter from 'vue-router'
import WordCloud from '../components/WordCloud'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'wordcloud',
    component: WordCloud
  }
]

const router = new VueRouter({
  routes
})

export default router
