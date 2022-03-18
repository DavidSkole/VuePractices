<template>
	<div class="app-container">
		<div class="alert" v-if="data.AlertVisible == true">
		<h1>{{ data.AlertHeader }}</h1>
		<p>{{ data.AlertMessage }}</p>
		</div>
		<h1>Countdown App</h1>
		<p>Add a new countdown</p>
		<label for="countdownName">Title</label>
		<input :class="{ MissingFieldClass : data.newCountdownTitle[1] }" class="countdownName" type="text" name="countdownName" v-model="data.newCountdownTitle[0]" required>
		<label for="countdownDateTime">Date and time</label>
		<input :class="{ MissingFieldClass : data.newCountdownDate[1] }" class="countdownDateTime" type="datetime-local" name="countdownDateTime" v-model="data.newCountdownDate[0]" required>
		<button @click="addCountdown" class="primaryBtn">Add countdown</button>
		<div class="countdown-list">
			<h1>Your countdowns</h1>
			<div class="countdown-container" v-for="countdown in data.countdownData" :key="countdown">
				<div class="title">{{ countdown.title }}</div>
				<div class="days">{{ countdown.days }}d</div>
				<div class="hours">{{ countdown.hours }}h</div>
				<div class="minutes">{{ countdown.minutes }}m</div>
				<div class="seconds">{{ countdown.seconds }}s</div>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue'

export default {
	setup() {
		let data = reactive({
			countdownData: [],
			newCountdownTitle: ["", false],	
			newCountdownDate: ["", false],
			AlertHeader: "",
			AlertMessage: "",
			AlertVisible: false,
		})
		
		function addCountdown() {
			if(data.newCountdownTitle[0] == "") {
				data.newCountdownTitle[1] = true;
				data.AlertHeader = "Wait!"
				data.AlertMessage = "You need to fill out the fields in red";
				data.AlertVisible = true;
				setTimeout(function notVisible(){data.AlertVisible = false}, 3000);
			} else {
				data.newCountdownTitle[1] = false;
			}
			
			if(data.newCountdownDate[0] == "") {
				data.newCountdownDate[1] = true;
				data.AlertHeader = "Wait!"
				data.AlertMessage = "You need to fill out the fields in red";
				data.AlertVisible = true;
				setTimeout(function notVisible(){data.AlertVisible = false}, 3000);
			} else {
				data.newCountdownDate[1] = false;
			}
			
			if(data.newCountdownTitle[0] !== "" && data.newCountdownDate[0] !== ""){
				data.newCountdownDate[1] = false;
				data.newCountdownDate[1] = false;
				
				let newCountdown = new Object();
			
				newCountdown.title = data.newCountdownTitle[0];
				newCountdown.date = data.newCountdownDate[0];
			
				data.countdownData.push(newCountdown);
				updateCountdown();
				setInterval(updateCountdown, 1000);
			}
		}
		
		function updateCountdown(){
			for(var i=0; i<data.countdownData.length; i++) {
				let now = new Date().getTime();
				let newCountDownDatetoTime = new Date(data.countdownData[i].date).getTime();
			
				let distance = newCountDownDatetoTime - now;

				data.countdownData[i].days = Math.floor(distance / (1000 * 60 * 60 * 24));
				data.countdownData[i].hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				data.countdownData[i].minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				data.countdownData[i].seconds = Math.floor((distance % (1000 * 60)) / 1000);
			}
		}
		
		function showMissingAlert() {
			data.AlertHeader = "Wait!"
			data.AlertMessage = "You need to fill out the fields in red";
			data.AlertVisible = true;
			setTimeout(function notVisible(){data.AlertVisible = false}, 3000);
		}
	
		function showSuccessAlert() {
			data.AlertHeader = "Success!"
			data.AlertMessage = "You have successfully purchased your chosen products!";
			data.AlertVisible = true;
			setTimeout(function notVisible(){data.AlertVisible = false}, 3000)
		}
		
		return { data, addCountdown, updateCountdown, showMissingAlert, showSuccessAlert };
	}
}
</script>

<style>
.app-container {
	background-color: aquamarine;
	border: 1rem solid rgb(34, 44, 56);
	border-radius: 5px;
	padding: 1rem 2rem 2rem 2rem;
	width: 80%;
}

label {
	display: block;
}

.countdownName, .countdownDateTime {
	display: block;
	width: 50%;
}

.countdown-list {
	margin-top: 3rem;
}

.countdown-container{
	padding: 1.5rem;
	background-color: rgb(87, 211, 170);
	border-radius: 5px;
	margin-bottom: 1.5rem;
}

.title {
	margin-bottom: 1rem;
	font-size: 24px;
}

.days, .hours, .minutes, .seconds{
	display: inline-block;
	background-color: white;
	font-size: 40px;
	padding: 1rem;
	border-radius: 5px;
	margin-right: 5px;
	border-left: 6px solid aquamarine;
}

</style>
