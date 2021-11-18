<template>
	<view class="index">
		<view class="title">{{ title }}</view>
		<button @tap="btns">点击</button>
	</view>
</template>

<script lang="ts">
import http from '@/http'
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const title = ref('好好和')
		const btns = () => {
			http
				.get<RealtimeWeather.RootObject>(
					'https://api.caiyunapp.com/v2.5/fkBtX7WAsqBAgf6M/121.6544,25.1552/realtime.json'
				)
				.then((res) => {
					console.log('res', res.timezone)
				})
				.catch((error) => {
					console.log('error', error)
				})
		}

		return {
			title,
			btns,
		}
	},
})
</script>

<style>
.index {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
