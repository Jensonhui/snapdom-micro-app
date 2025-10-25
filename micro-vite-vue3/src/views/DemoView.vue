<template>
  <h1>Sub-application : Demo Page</h1>

  <div class="capture-btn" @click="handleClick">capture width snapdom</div>

  <div class="capture-warp" ref="captureRef">
    <h3>this is a mian title</h3>
    <br />

    <div class="flex gap-2">
      <el-tag type="primary">Tag 1</el-tag>
      <el-tag type="success">Tag 2</el-tag>
      <el-tag type="info">Tag 3</el-tag>
      <el-tag type="warning">Tag 4</el-tag>
      <el-tag type="danger">Tag 5</el-tag>
    </div>
    <br />

    <el-switch
      class="ml-2"
      inline-prompt
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
      active-text="完整展示多个内容"
      inactive-text="多个内容"
    /><br />

    <div class="echarts-content" ref="echartsRef" />
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import { snapdom } from '@zumer/snapdom'

const echartsRef = ref(null)
const captureRef = ref(null)
const data = [
  ['2000-06-05', 116],
  ['2000-06-06', 129],
  ['2000-06-07', 135],
  ['2000-06-08', 86],
  ['2000-06-09', 73],
  ['2000-06-10', 85],
  ['2000-06-11', 73],
  ['2000-06-12', 68],
  ['2000-06-13', 92],
  ['2000-06-14', 130],
  ['2000-06-15', 245],
  ['2000-06-16', 139],
  ['2000-06-17', 115],
  ['2000-06-18', 111],
  ['2000-06-19', 309],
  ['2000-06-20', 206],
  ['2000-06-21', 137],
  ['2000-06-22', 128],
  ['2000-06-23', 85],
  ['2000-06-24', 94],
  ['2000-06-25', 71],
  ['2000-06-26', 106],
  ['2000-06-27', 84],
  ['2000-06-28', 93],
  ['2000-06-29', 85],
  ['2000-06-30', 73],
  ['2000-07-01', 83],
  ['2000-07-02', 125],
  ['2000-07-03', 107],
  ['2000-07-04', 82],
  ['2000-07-05', 44],
  ['2000-07-06', 72],
  ['2000-07-07', 106],
  ['2000-07-08', 107],
  ['2000-07-09', 66],
  ['2000-07-10', 91],
  ['2000-07-11', 92],
  ['2000-07-12', 113],
  ['2000-07-13', 107],
  ['2000-07-14', 131],
  ['2000-07-15', 111],
  ['2000-07-16', 64],
  ['2000-07-17', 69],
  ['2000-07-18', 88],
  ['2000-07-19', 77],
  ['2000-07-20', 83],
  ['2000-07-21', 111],
  ['2000-07-22', 57],
  ['2000-07-23', 55],
  ['2000-07-24', 60]
]
const dateList = data.map((item) => item[0])
const valueList = data.map((item) => item[1])
const option = {
  visualMap: [
    {
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: 400
    },
    {
      show: false,
      type: 'continuous',
      seriesIndex: 1,
      dimension: 0,
      min: 0,
      max: dateList.length - 1
    }
  ],
  title: [
    {
      left: 'center',
      text: 'Gradient along the y axis'
    },
    {
      top: '55%',
      left: 'center',
      text: 'Gradient along the x axis'
    }
  ],
  tooltip: {
    trigger: 'axis'
  },
  xAxis: [
    {
      data: dateList
    },
    {
      data: dateList,
      gridIndex: 1
    }
  ],
  yAxis: [
    {},
    {
      gridIndex: 1
    }
  ],
  grid: [
    {
      bottom: '60%'
    },
    {
      top: '60%'
    }
  ],
  series: [
    {
      type: 'line',
      showSymbol: false,
      data: valueList
    },
    {
      type: 'line',
      showSymbol: false,
      data: valueList,
      xAxisIndex: 1,
      yAxisIndex: 1
    }
  ]
}

const handleClick = async () => {
  if (!captureRef.value) return

  const capture = await snapdom(captureRef.value as Element, {
    scale: 2,
    filename: `micro-sub-app-snapdom-${Date.now()}`
  })

  await capture.download()
}

onMounted(() => {
  const instance = echarts.init(echartsRef.value)
  instance && instance.setOption(option)
})
</script>

<style scoped>
.capture-btn {
  width: 300px;
  padding: 20px;
  color: #fff;
  text-align: center;
  margin: 10px auto;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  background-color: var(--el-color-primary-dark-2);
}

.capture-warp {
  text-align: center;
  margin-top: 80px;
}

.capture-warp h3 {
  color: aquamarine;
}

.capture-warp .echarts-content {
  width: 100%;
  height: 900px;
  overflow: hidden;
  margin-top: 50px;
  border-radius: 8px;
}
</style>
