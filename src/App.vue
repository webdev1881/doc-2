<script setup>
import { ref, onMounted } from 'vue'
import TabContent from './components/TabContent.vue'
import TabList from './components/TabList.vue'
import { useScroll } from './composables/useScroll'
import { tabs } from './config/tabs'

const activeTab = ref(tabs[0].id)
const contentRef = ref(null)

const { handleScroll } = useScroll(tabs, activeTab)

onMounted(() => {
  if (contentRef.value) {
    contentRef.value.addEventListener('wheel', handleScroll)
  }
})
</script>

<template>
  <div class="app-container">
    <TabList :tabs="tabs" :activeTab="activeTab" @update:tab="(id) => activeTab = id" />
    <div class="content-container">
      <TabContent :activeTab="activeTab" />
    </div>
    <!-- wheeel -->
    <div ref="contentRef" class="wheeel"></div>

  </div>
</template>

<style scoped>



.app-container {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
}

.content-container {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  border-left: 1px solid #eee;
  
}

.wheeel {
  border-left: 1px solid #eee;
  width: 20%;
}
</style>