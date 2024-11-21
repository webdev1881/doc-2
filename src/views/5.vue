<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="content-section">
        <div class="s">

            <ul class="b">
                <div class="title">Впровадив</div>
                <li class="whitespace-normal break-words" index="0">Vue DevTools для аналізу продуктивності компонентів</li>
                <li class="whitespace-normal break-words" index="1">Lighthouse для загального аудиту</li>
                <li class="whitespace-normal break-words" index="2">webpack-bundle-analyzer або rollup-plugin-visualizer для аналізу бандла</li>
                <li class="whitespace-normal break-words" index="3">Chrome DevTools Performance tab для профілювання</li>
                <li class="whitespace-normal break-words" index="4">Vite для швидшої розробки та оптимізованої збірки</li>


            </ul>
            <ul class="b">
                <div class="title">Впровадив</div>
                <li class="whitespace-normal break-words" index="0">Lazy-loading для маршрутів та важких компонентів</li>
                <li class="whitespace-normal break-words" index="1">Keep-alive для кешування компонентів</li>
                <li class="whitespace-normal break-words" index="2">Віртуальний скролінг для довгих списків</li>
                <li class="whitespace-normal break-words" index="3">Оптимізацію зображень через Nuxt Image</li>
                <li class="whitespace-normal break-words" index="4">Моніторинг продуктивності через Vue DevTools та Lighthouse</li>

            </ul>
            <ul class="b">
                <div class="title">Впровадив</div>
                <li class="whitespace-normal break-words" index="0">Code-splitting на рівні маршрутів та компонентів</li>
                <li class="whitespace-normal break-words" index="1">Tree-shaking через Webpack</li>
                <li class="whitespace-normal break-words" index="2">Динамічні імпорти для важких бібліотек</li>
                <li class="whitespace-normal break-words" index="3">Server-side rendering для критичних сторінок</li>
                <li class="whitespace-normal break-words" index="4">Service Workers для офлайн-функціональності</li>
                <li class="whitespace-normal break-words" index="5">CDN для статичних ресурсів</li>
                <li class="whitespace-normal break-words" index="6">Redis для кешування на сервері</li>
            </ul>

            <ul class="b">
                <div class="title">Метрики, які відслідковуємо:</div>
                <li class="whitespace-normal break-words" index="0">First Contentful Paint (FCP)</li>
                <li class="whitespace-normal break-words" index="1">Largest Contentful Paint (LCP)</li>
                <li class="whitespace-normal break-words" index="2">Time to Interactive (TTI)</li>
                <li class="whitespace-normal break-words" index="3">Total Blocking Time (TBT)</li>
                <li class="whitespace-normal break-words" index="4">Cumulative Layout Shift (CLS)</li>
 
            </ul>
            <ul class="b">
                <div class="title">Інструменти моніторингу:</div>
                <li class="whitespace-normal break-words" index="0">Custom Performance API metrics</li>
                <li class="whitespace-normal break-words" index="1">Vue DevTools performance tab</li>
                <li class="whitespace-normal break-words" index="2">Lighthouse CI в pipeline</li>
                <li class="whitespace-normal break-words" index="3">Real User Monitoring (RUM)</li>

 
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