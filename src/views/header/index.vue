<template>
	<div class="header-container flex justify-between">
		<div class="title-logo"></div>
		<div class="header-right flex">
			<!-- 天气 -->
			<div class="weather-box flex">
				<i class="block weather-icon"></i>
				<div>
					<div class="temperature text-color-gradient">25°</div>
					<div class="state text-color-gradient">晴转多云</div>
				</div>
			</div>
			<img src="@/assets/images/header/line.png" class="line" />
			<!-- 时间 -->
			<div class="time-box inline-flex">
				<i class="block time-icon"></i>
				<div class="text-color-gradient time">{{ time }}</div>
				<div class="date-box text-color-gradient">{{ year }}</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
// 定义时分秒
const time = ref('')
// 定义年月日
const year = ref('')

// 定义方法获取年月日时分秒
const getTime = () => {
	// 当前时间
	const date = new Date()
	// 年
	const Y = date.getFullYear()
	// 月
	const M = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
	// 日
	const D = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
	// 时
	const h = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
	// 分
	const m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
	// 秒
	const s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
	time.value = `${h}:${m}:${s}`
	year.value = `${Y}-${M}-${D}`
	requestAnimationFrame(getTime)
}

onMounted(() => {
	requestAnimationFrame(getTime)
})
</script>
<style lang="scss" scoped>
* {
	box-sizing: border-box;
}

.header-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 3840px;
	padding: 0 64px;
	color: #fff;

	.title-logo {
		width: 1076px;
		height: 140px;
		margin-top: 32px;
		background: center url('@/assets/images/header/title.png') no-repeat;
		background-size: 1076px 140px;
	}
}

.time-box {
	align-items: baseline;
	// margin-top: 80px;
	font-family: DIN-Medium, sans-serif;
	font-size: 48px;
	line-height: 1;

	.time-icon {
		width: 32px;
		height: 31px;
		margin-right: 27px;
		background: url('@/assets/images/header/time.png') no-repeat;
		background-size: 32px 31px;
	}

	.time {
		font-weight: 500;
	}

	.date-box {
		margin-left: 16px;
		font-family: DIN-Regular, sans-serif;
		font-size: 28px;
	}
}

.weather-box {
	align-items: center;
	// margin-right: 48px;

	.weather-icon {
		width: 70px;
		height: 47px;
		margin-right: 20px;
		background: center url('@/assets/images/header/weather.png') no-repeat;
		background-size: 70px 47px;
	}

	.temperature {
		margin-bottom: 10px;
		font-family: DIN-Regular;
		font-size: 32px;
		line-height: 1;
	}

	.state {
		font-family: SourceHanSansCN-Normal;
		font-size: 28px;
		line-height: 1;
	}
}

.header-right {
	align-items: center;

	.line {
		width: 18px;
		height: 49px;
		margin: 0 32px;
	}
}

.close-box {
	font-family: 'Alibaba PuHuiTi';
	font-size: 28px;
	font-weight: 400;
	color: #fff;
	cursor: pointer;

	img {
		width: 30px;
		height: 32px;
		margin-right: 24px;
	}
}
</style>
