<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

            <ul class="b">
                <div class="title">Дотримуюсь принципів:</div>


                <li class="whitespace-normal break-words" index="0">Single Responsibility</li>
                <li class="whitespace-normal break-words" index="1">Компонентна композиція</li>
                <li class="whitespace-normal break-words" index="2">Чітко типізовані пропси</li>
                <li class="whitespace-normal break-words" index="3">Документація використання</li>
                <li class="whitespace-normal break-words" index="4">Перевикористання через абстракції</li>
                <li class="whitespace-normal break-words" index="5">Accessibility first</li>
                <li class="whitespace-normal break-words" index="6">Адаптивність</li>









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