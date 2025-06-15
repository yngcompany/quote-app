<template>
    <!-- Quote Card -->
  <div class="quote-card">
    <p class="quote-content">"{{ quote }}"</p>
    <p class="quote-author">— {{ author }}</p>
    <button @click="fetchQuote" class="refresh-btn">새 명언 불러오기</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const quote = ref('로딩 중...')
const author = ref('')

async function fetchQuote() {
  try {
    const res = await fetch('https://api.quotable.io/random')
    if (!res.ok) throw new Error('API 오류 발생')
    const data = await res.json()
    quote.value = data.content
    author.value = data.author
  } catch (error) {
    quote.value = '명언을 불러올 수 없습니다. 좀 더 훌륭한 사람이 되세요.'
    author.value = ''
    console.error(error)
  }
}

onMounted(() => {
  fetchQuote()
})
</script>

<style scoped>
.quote-card {
  border: 1px solid #eff1f1;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 500px;
  margin: 2rem auto;
  font-family: 'Georgia', serif;
  background-color: #FFF;
}

.quote-content {
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 1rem;
}

.quote-author {
  text-align: right;
  font-weight: bold;
  color: #555;
}

.refresh-btn {
  background-color: #111;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.refresh-btn:hover {
  background-color: #666;
}
</style>