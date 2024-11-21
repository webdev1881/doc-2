<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

            
            <ul class="b">
                <div class="title">Впровадив</div>
                <li class="whitespace-normal break-words" index="0">Санітизація користувацького вводу / script</li>
                <li class="whitespace-normal break-words" index="1">Використання v-html тільки для довіреного контенту</li>
                <li class="whitespace-normal break-words" index="2">Налаштування CSP</li>
                <li class="whitespace-normal break-words" index="3">Використання HTTPS</li>
                <li class="whitespace-normal break-words" index="4">Правильна обробка JWT токенів</li>
                <li class="whitespace-normal break-words" index="5">Захист від XSS через Vue.js вбудовані механізми</li>
                <li class="whitespace-normal break-words" index="6">Регулярне оновлення залежностей</li>


            </ul>
            <ul class="b">
                <div class="title">Впровадив</div>
                <li class="whitespace-normal break-words" index="0">CSP через security-headers</li>
                <li class="whitespace-normal break-words" index="1">XSS-захист через санітизацію даних</li>
                <li class="whitespace-normal break-words" index="2">CSRF-токени для API-запитів</li>
                <li class="whitespace-normal break-words" index="3">Rate limiting на критичних ендпоінтах</li>
                <li class="whitespace-normal break-words" index="4">Secure HTTP-only cookies</li>
                <li class="whitespace-normal break-words" index="5">Аудит npm-пакетів через snyk</li>
                <li class="whitespace-normal break-words" index="6">Захист від SQL-ін'єкцій на рівні ORM</li>
                <li class="whitespace-normal break-words" index="7">Обфускація коду в production</li>

            </ul>
            <ul class="b">
                <div class="title">Моніторинг через:</div>
                <li class="whitespace-normal break-words" index="0">Vue DevTools для компонентної структури</li>
                <li class="whitespace-normal break-words" index="1">Chrome Performance для профілювання</li>
                <li class="whitespace-normal break-words" index="2">Sentry для відстеження помилок</li>
                <li class="whitespace-normal break-words" index="3">Custom метрики для Core Web Vitals</li>
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