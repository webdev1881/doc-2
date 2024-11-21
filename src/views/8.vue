<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

            <ul class="b">
                <div class="title">Впровадив</div>

                <li class="whitespace-normal break-words" index="0">Аналіз та документація технічного боргу</li>
                <li class="whitespace-normal break-words" index="1">Виділення критичних частин для рефакторингу</li>
                <li class="whitespace-normal break-words" index="2">Створення нової архітектури паралельно</li>
                <li class="whitespace-normal break-words" index="3">Поступова міграція функціоналу</li>
                <li class="whitespace-normal break-words" index="4">A/B тестування нових рішень</li>
                <li class="whitespace-normal break-words" index="5">Моніторинг метрик після змін</li>



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