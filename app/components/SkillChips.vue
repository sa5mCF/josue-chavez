<template>
  <div class="flex flex-wrap gap-3 font-mono text-sm">
    <span v-for="skill in skills" :key="skill" class="bg-surface border border-border px-3 py-1 rounded text-primary hover:text-accent hover:border-accent transition-colors cursor-default">
      {{ skill }}
    </span>
  </div>
</template>

<script setup lang="ts">
const skills = ['Go', 'Python', 'WebRTC', 'FFmpeg', 'gRPC', 'Docker']
</script>
