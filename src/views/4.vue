<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

            <ul class="b">
                <div class="title">Організував стор за принципом модулів: окремі стори для аутентифікації, кошика, користувацьких налаштувань. Також застосовував композабли для перевикористання логіки.</div>
            </ul>
            <ol class="-mt-1 [li>&amp;]:mt-2 list-decimal space-y-2 pl-8" depth="0">
                <li class="whitespace-normal break-words" index="0">Краща підтримка TypeScript з коробки</li>
                <li class="whitespace-normal break-words" index="1">Відсутність необхідності в mutations</li>
                <li class="whitespace-normal break-words" index="2">Можливість створювати кілька сховищ</li>
                <li class="whitespace-normal break-words" index="3">Легша відладка завдяки простішій структурі</li>
                <li class="whitespace-normal break-words" index="4">Підтримка декомпозиції actions та state</li>
            </ol>



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