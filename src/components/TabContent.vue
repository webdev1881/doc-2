<script setup>
import { computed, markRaw } from 'vue'
import { tabs } from '../config/tabs' // Импортируем табы напрямую

const props = defineProps({
  activeTab: {
    type: String,
    required: true
  }
})

// Используем markRaw для оптимизации производительности и избегаем проблем с реактивностью
const tabComponents = markRaw(
  Object.fromEntries(
    tabs.map(tab => [tab.id, tab.component])
  )
)

const currentComponent = computed(() => {
  return tabComponents[props.activeTab] || null
})
</script>

<template>
  <component :is="currentComponent" class="tab-content" />
</template>

<style scoped>
.tab-content {
  line-height: 1.6;
}
</style>