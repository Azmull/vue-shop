<script setup>
import { onMounted } from 'vue'


import axios from 'axios'

function getProducts() {
  axios.get('https://localhost:7193/api/Cart')
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error('發生錯誤', error)
    })
}


onMounted(() => { })
</script>

<template>
  <div></div>
</template>
