<template>
  <div id="app">
    <div class="header">
      <div class="date">{{ today }}</div>
      <h1>오늘의 명언</h1>
    </div>
    <QuoteCard />
  </div>
</template>

<script lang="ts" setup>
import QuoteCard from './components/QuoteCard.vue'
import dayjs from 'dayjs'

const today = dayjs().format('YYYY-MM-DD')
</script>

<style scoped>
#app {
  text-align: center;
  padding: 2rem;
}

.header {
  margin-bottom: 2rem;
}

.date {
  font-size: 0.875rem;
  color: #213547;
  margin-bottom: 0.25rem;
}

h1 {
  padding: 0;
  margin: 1rem 0;
  color: #213547;
}
</style>