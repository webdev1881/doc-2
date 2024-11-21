import { computed } from 'vue'

export function useScroll(tabs, activeTab) {
  const currentTabIndex = computed(() => {
    return tabs.findIndex(tab => tab.id === activeTab.value)
  })

  const handleScroll = (event) => {
    event.preventDefault()
    
    const direction = event.deltaY > 0 ? 1 : -1
    const newIndex = currentTabIndex.value + direction
    
    if (newIndex >= 0 && newIndex < tabs.length) {
      activeTab.value = tabs[newIndex].id
    }
  }

  return {
    handleScroll
  }
}