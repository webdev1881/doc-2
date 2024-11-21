<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

            <ul class="b">
                <div class="title">Впровадив</div>
                <li class="whitespace-normal break-words" index="0">Unit тести (Vitest) для бізнес-логіки та утиліт</li>
                <li class="whitespace-normal break-words" index="1">Component тести для UI-компонентів</li>
                <li class="whitespace-normal break-words" index="2">Integration тести для взаємодії модулів</li>
                <li class="whitespace-normal break-words" index="3">E2E тести (Playwright) для критичних флоу</li>
                <li class="whitespace-normal break-words" index="4">Performance тести для CI/CD</li>
                <li class="whitespace-normal break-words" index="5">Visual regression тести для UI</li>


            </ul>

            <img src="@/assets/img/ts.png" alt="" class="img">






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