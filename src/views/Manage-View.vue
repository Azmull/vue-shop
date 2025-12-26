<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

// 新增固定的商品
function createProduct() {
  const newProduct = {
    name: "測試商品",
    originalPrice: 1499,
    nowPrice: 1349,
    category: "電腦",
    rate: 5,
    stock: 10,
    description: "這是一個測試商品",
    image: "images/products/1.png",
    status: true
  };

  axios.post("https://localhost:7193/api/Product", newProduct)
    .then(res => {
      console.log("新增成功:", res.data);
    })
    .catch(err => {
      console.error("新增失敗:", err.response?.data || err);
    });
}

// 新增form可以輸入的
const apiUrl = 'https://localhost:7193/api/Product'

// 建立表單資料
const productForm = ref({
  name: '',
  originalPrice: 0,
  nowPrice: 0,
  category: '',
  rate: 0,
  stock: 0,
  description: '',
  image: '',
  status: true
})

// 提交表單
const submitForm = async () => {
  try {
    const res = await axios.post(apiUrl, productForm.value)
    console.log('新增成功:', res.data)
    alert('商品新增成功！')
  } catch (err) {
    console.error('新增失敗:', err.response?.data || err)
    alert('新增失敗')
  }
}


onMounted(() => { })
</script>

<template>
  <div style="margin-left: 10%;">
    <button @click="createProduct()">++</button>
  </div>
  <form @submit.prevent="submitForm">
    <div>
      <label>商品名稱：</label>
      <input v-model="productForm.name" type="text" />
    </div>

    <div>
      <label>原價：</label>
      <input v-model.number="productForm.originalPrice" type="number" />
    </div>

    <div>
      <label>現價：</label>
      <input v-model.number="productForm.nowPrice" type="number" />
    </div>

    <div>
      <label>分類：</label>
      <input v-model="productForm.category" type="text" />
    </div>

    <div>
      <label>庫存：</label>
      <input v-model.number="productForm.stock" type="number" />
    </div>

    <div>
      <label>描述：</label>
      <textarea v-model="productForm.description"></textarea>
    </div>

    <div>
      <label>圖片路徑：</label>
      <input v-model="productForm.image" type="text" />
    </div>

    <button type="submit">新增商品</button>
  </form>
</template>
