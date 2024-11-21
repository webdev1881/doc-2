<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

                <ul class="b">
                    <div class="title">В останньому проекті з мікрофронтендами використовував Module Federation з Webpack 5. Розділив додаток на незалежні модулі, які могли розроблятися та деплоїтися окремими командами. Створив shared-бібліотеку компонентів та утиліт. Для комунікації між модулями використовував комбінацію Event Bus та Shared State через Pinia.</div>
                </ul>

                <img src="@/assets/img/c.png" alt="" class="img">

                

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