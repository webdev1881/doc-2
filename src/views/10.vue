<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

            <ul class="b">
                <div class="title">Мій процес включає:</div>

                <li class="whitespace-normal break-words" index="0">Аналіз вимог з командою та уточнення деталей
                </li>
                <li class="whitespace-normal break-words" index="1">Оцінка технічної можливості з UI/UX командою
                </li>
                <li class="whitespace-normal break-words" index="2">Планування архітектури та вибір інструментів
                </li>
                <li class="whitespace-normal break-words" index="3">Розробка з постійними code reviews</li>
                <li class="whitespace-normal break-words" index="4">Написання тестів</li>
                <li class="whitespace-normal break-words" index="5">Тестування на різних пристроях</li>
                <li class="whitespace-normal break-words" index="6">Документування</li>
                <li class="whitespace-normal break-words" index="7">Реліз через CI/CD</li>





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