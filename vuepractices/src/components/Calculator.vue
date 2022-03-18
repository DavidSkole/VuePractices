<template>
	<div class="calculator-container">
		<div class="output">{{ data.outputData || 0 }}</div>
		<div v-for="(inputOption, index) in inputOptions" :key="index" class="input" 
		:class="{ 'input-special' : ['C', '+/-', '%', '/', '*', '-', '+', '='].includes(inputOption), 'zero-special' : '0'.includes(inputOption) }"
		@click="inputClick(inputOption)">
			{{ inputOption }}
		</div>
	</div>
</template>

<script>
import { reactive } from '@vue/reactivity';

export default {
	setup() {
		let inputOptions = ["C", "+/-", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="];
		let data = reactive({
			outputData: "",
			lastNumber: "",
			operator: null
		})
		
		function inputClick(inputValue){
			
			if([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(inputValue) || inputValue == "."){
				data.outputData += inputValue + "";													
			} 
			
			if(inputValue == "C") {
				data.outputData = ""
			} 
			
			if(inputValue == "%") {
				data.outputData = Number(data.outputData) / 100 + "";	
			} 
			
			if(["+", "-", "*", "/"].includes(inputValue)) {
				data.operator = inputValue;
				data.lastNumber = data.outputData;
				data.outputData = "";
			} 
			
			if(inputValue == "=") {
				data.outputData = eval(
					data.lastNumber + data.operator + data.outputData
				);
				
				data.lastNumber = "";
				data.operator = null;																
			}

		}

		
		return { inputOptions, data, inputClick }
	}
}
</script>

<style>
.calculator-container {
	background-color: rgb(42, 55, 68);
	width: 30rem;
	padding: 1rem;
	border-radius: 5px;
}

.output {
	background-color: rgb(230, 237, 241);
	width: 100%;
	font-size: 35px;
	height: 8rem;
	line-height: 8rem;
	vertical-align: middle;
	padding: 0 2rem;
	border-radius: 5px;
	margin-bottom: 5px;
}

.input {
	background-color: aquamarine;
	width: 22%;
	height: 6rem;
	display: inline-block;
	margin-right: 13.4px;
	margin-top: 13.4px;
	text-align: center;
	vertical-align: middle;
	line-height: 6rem; 
	font-size: 20px;
	font-weight: 600;
	border-radius: 5px;
	color: rgb(18, 75, 56);
}

.input:hover {
	filter: brightness(80%);
	cursor: pointer;
}

.input-special {
	background-color: rgb(28, 92, 94);
	color: aquamarine
}

.zero-special {
	width: 47%;
}

.widerInput {
	width: 46%;
}
</style>
