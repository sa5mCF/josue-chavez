<template>
  <div class="border-b border-border pb-2 mb-8 mt-16 flex justify-between items-end">
    <h2 class="text-lg font-mono text-text-primary tracking-widest uppercase"><slot /></h2>
    <span v-if="subtitle" class="font-mono text-xs text-text-secondary">{{ subtitle }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  subtitle?: string
}>()
</script>
