import { createRouter, createWebHistory } from 'vue-router'
import CheckoutForm from '../components/CheckoutForm.vue'

const routes = [
	{
		path: '/',
		component: CheckoutForm	
	},
	{
		path: '/checkout',
		component: CheckoutForm	
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router