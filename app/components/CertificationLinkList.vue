<template>
  <div class="flex items-center gap-4 text-sm mt-12 mb-20 text-text-secondary font-mono">
    <span>Certified in:</span>
    <NuxtLink to="/credentials" class="flex gap-4">
      <span v-for="(cert, index) in certifications" :key="cert" class="hover:text-primary transition-colors cursor-pointer group flex items-center gap-4">
        {{ cert }}
        <span v-if="index < certifications.length - 1" class="text-border group-hover:text-primary transition-colors">·</span>
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const certifications = ['Shure', 'Biamp', 'Dante', 'AVIXA']
</script>
