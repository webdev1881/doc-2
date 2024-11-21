<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

                <ul class="b">
                    <div class="title"></div>

                    <li class="whitespace-normal break-words" index="0">Семантична розмітка</li>
                    <li class="whitespace-normal break-words" index="1">ARIA-атрибути</li>
                    <li class="whitespace-normal break-words" index="2">Keyboard navigation</li>
                    <li class="whitespace-normal break-words" index="3">Контраст кольорів</li>
                    <li class="whitespace-normal break-words" index="4">Адаптація під screen readers. Тестую за допомогою axe DevTools.</li>

                </ul>
                <img src="@/assets/img/med.png" alt="" class="img">

                

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