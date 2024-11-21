<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

                <ul class="b">
                    <div class="title">Options API - це традиційний підхід, де логіка компонента організована за опціями (data, methods, computed тощо). Composition API дозволяє організувати код за логічними блоками функціональності, що покращує повторне використання коду та типізацію.</div>
                </ul>
                <ul class="b">
                    <div class="title">Composition API краще використовувати для:</div>
                    <li>Великих компонентів зі складною логікою</li>
                    <li>Коли потрібна краща підтримка TypeScript</li>
                    <li>При створенні повторно використовуваних функцій</li>
                </ul>
                <ul class="b">
                    <div class="title">Options API підходить для:</div>
                    <li>Простих компонентів</li>
                    <li>Початківців, яким важливіша чітка структура</li>
                    <li>Невеликих проектів</li>
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