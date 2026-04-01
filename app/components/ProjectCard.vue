<template>
  <div class="p-6 border border-border bg-background hover:bg-surface transition-colors break-inside-avoid mb-6 cursor-pointer group">
    <div class="flex justify-between items-start mb-4">
      <h3 class="text-xl font-medium text-text-primary group-hover:text-primary transition-colors">{{ title }}</h3>
      <span v-if="date" class="font-mono text-xs text-text-secondary">{{ date }}</span>
    </div>
    <p class="text-text-secondary leading-relaxed mb-6 font-light">{{ description }}</p>
    <div class="flex items-center gap-2 flex-wrap mb-4">
      <span v-for="tech in stack" :key="tech" class="text-xs font-mono text-accent bg-[#1F2A27]/30 px-2 py-1">{{ tech }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  stack: string[]
  date?: string
}>()
</script>
