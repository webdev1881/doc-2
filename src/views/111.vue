<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

                <ul class="b">
                    <div class="title">Vue.js</div>
                    <li>Динамічне завантаження компонентів</li>
                    <li> Правильна структура даних для швидкого пошуку</li>
                    <li>Використання v-once для статичного контенту</li>
                    <li>Правильне використання key </li>
                </ul>
                

        </div>
    </div>
</template>

<style scoped>
.content-section {
    display: flex;
    gap: 15px;
}
h2 {
    color: white;
}
.s {
    margin-bottom: 20px;
}
.b {
    margin-bottom: 20px;
}
.title {
    font-size: 18px;
    color: white;
}
</style>