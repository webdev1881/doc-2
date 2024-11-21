<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

            <ul class="b">
                <div class="title">Налаштував багатоетапний пайплайн:</div>

                <li class="whitespace-normal break-words" index="0">Lint та type checking</li>
                <li class="whitespace-normal break-words" index="1">Unit та integration тести</li>
                <li class="whitespace-normal break-words" index="2">Білд та bundle аналіз</li>
                <li class="whitespace-normal break-words" index="3">E2E тести на stage</li>
                <li class="whitespace-normal break-words" index="4">Performance тести</li>
                <li class="whitespace-normal break-words" index="5">Автоматичний деплой на dev/stage</li>
                <li class="whitespace-normal break-words" index="6">Canary releases для production</li>
                <li class="whitespace-normal break-words" index="7">Автоматичний rollback при помилках</li>




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