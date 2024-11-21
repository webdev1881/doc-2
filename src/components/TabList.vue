<script setup>

defineProps({
  tabs: {
    type: Array,
    required: true
  },
  activeTab: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:tab'])
</script>

<template>
  <div class="tabs-container">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="['tab-button', { active: activeTab === tab.id }, { hr: tab.title === '————————————' }]"
      @click="emit('update:tab', tab.id)"
    >
      {{ tab.title }}
      <span v-if="tab.description" class="tab-description">{{ tab.description }}</span>
    </button>
  </div>
</template>

<style scoped>
.tabs-container {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  min-width: 200px;
  /* padding: 1rem 0; */
}

.tab-button {
  padding: 0.3rem;
  color: white;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  font-size: 1.0rem;
  /* border-radius: 3px; */
  transition: all 0.3s ease;
}

.tab-description {
  display: block;
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.25rem;
}

.tab-button:hover {
  background: #181818;
}

.tab-button.active {
  background: #e0e0e0;
  /* font-weight: bold; */
  color: #181818;
}
.tab-button.hr {
  color: gray;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font-size: 1rem;
}
</style>