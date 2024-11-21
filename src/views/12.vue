<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

            <ul class="b">
                <div class="title">Практикую</div>


                <li class="whitespace-normal break-words" index="0">Style guide та лінтинг</li>
                <li class="whitespace-normal break-words" index="1">Code review процесу</li>
                <li class="whitespace-normal break-words" index="2">Покриття тестами</li>
                <li class="whitespace-normal break-words" index="3">Документування складних рішень</li>
                <li class="whitespace-normal break-words" index="4">Постійний рефакторинг</li>
                <li class="whitespace-normal break-words" index="5">Моніторинг технічного боргу</li>







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