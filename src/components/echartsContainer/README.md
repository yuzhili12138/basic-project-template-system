# Echart 封装组件

> ### 描述：
>
> 组件包含初始化、更新、清除、销毁方法。组件通过数据进行驱动，为组件传入 Echarts 的 Option 配置来控制组件展示的效果。

### 示例

```
<template>
    <div>示例</div>
    <EchartsContainerVue :options="option1"></EchartsContainerVue>
    <EchartsContainerVue :options="option2"></EchartsContainerVue>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import EchartsContainerVue from '@/components/echartsContainer/EchartsContainer.vue';

let option1 = ref({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            clickable: true,
        },
        silent: false,
        triggerEvent: true,
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            clickable: true,
        },
        silent: false,
        triggerEvent: true,
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
        },
    ],
});

let option2 = ref({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
        },
    ],
});

setInterval(() => {
    let data: number[] = [];
    for (let i = 0; i < 7; i++) {
        data.push(Math.round(Math.random() * 200));
    }
    option1.value.series[0].data = data;
    option2.value.series[0].data = data;
}, 1000 * 3);
</script>

<style lang="postcss"></style>

```
