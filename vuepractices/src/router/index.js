import { createRouter, createWebHistory } from 'vue-router'
import CheckoutForm from '../components/CheckoutForm.vue'
import Calculator from '../components/Calculator.vue'
import Countdown from '../components/Countdown.vue'
import ToDo from '../components/ToDo.vue'

const routes = [
	{
		path: '/',
		component: CheckoutForm	
	},
	{
		path: '/checkout',
		component: CheckoutForm	
	},
	{
		path: '/calculator',
		component: Calculator
	},
	{
		path: '/countdown',
		component: Countdown
	},
	{
		path: '/todo',
		component: ToDo
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router