<template>
	<view class="index">
		<view class="title">{{ title }}</view>
	</view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	setup() {
		const title = ref('hello world')

		return {
			title,
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
