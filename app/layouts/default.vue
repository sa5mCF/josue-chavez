<template>
  <div class="min-h-screen flex flex-col pt-12">
    <header class="container mx-auto px-6 lg:px-12 flex justify-between items-center pb-12 border-b border-border">
      <NuxtLink to="/" class="font-mono text-primary font-medium tracking-tight">SAM CHAVEZ</NuxtLink>
      <nav class="hidden md:flex gap-6 text-sm font-medium text-text-secondary">
        <NuxtLink to="/projects" class="hover:text-primary transition-colors">Projects</NuxtLink>
        <NuxtLink to="/systems" class="hover:text-primary transition-colors">Systems</NuxtLink>
        <NuxtLink to="/credentials" class="hover:text-primary transition-colors">Credentials</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-primary transition-colors">Blog</NuxtLink>
        <NuxtLink to="/about" class="hover:text-primary transition-colors">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-primary transition-colors">Contact</NuxtLink>
      </nav>
    </header>

    <main class="container mx-auto px-6 lg:px-12 py-16 flex-grow">
      <slot />
    </main>

    <footer class="mt-auto border-t border-border py-8 text-center text-xs text-text-secondary font-mono">
      <div class="container mx-auto px-6 lg:px-12 flex justify-between">
        <span>&copy; {{ new Date().getFullYear() }} Josue Chavez</span>
        <span>SYS_RDY</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.router-link-active {
  @apply text-text-primary;
}
</style>
