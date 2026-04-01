<template>
  <div>
    <Hero />
    <SkillChips />
    <CertificationLinkList />

    <SectionHeader subtitle="Selected">Recent Projects</SectionHeader>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard 
        title="Low-Latency Audio Streaming"
        description="Developed a distributed system to route live audio streams across distinct physical locations with sub-20ms latency."
        :stack="['Go', 'WebRTC', 'Docker']"
        date="2025"
      />
      <ProjectCard 
        title="Dante API Integration"
        description="Automated routing and endpoint status monitoring for a sprawling L3 networked audio installation."
        :stack="['Python', 'Dante API', 'gRPC']"
        date="2024"
      />
    </div>

    <SectionHeader class="mt-24">Systems Preview</SectionHeader>
    <div class="flex items-center gap-4 text-text-secondary font-mono bg-surface p-8 border border-border justify-center flex-wrap tracking-wider text-sm">
      <span class="text-primary font-bold">INPUT</span>
      <ArrowRight class="w-4 h-4 text-[#1F2A27]" />
      <span>PROCESSING</span>
      <ArrowRight class="w-4 h-4 text-[#1F2A27]" />
      <span>STREAMING</span>
      <ArrowRight class="w-4 h-4 text-[#1F2A27]" />
      <span class="text-accent font-bold">DELIVERY</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>
