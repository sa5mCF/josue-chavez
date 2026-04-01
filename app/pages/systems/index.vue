<template>
  <div>
    <SectionHeader subtitle="Methodology">System Thinking</SectionHeader>
    
    <div class="space-y-12 mb-24">
      <p class="text-lg text-text-secondary max-w-2xl font-light leading-relaxed">
        Building reliable systems requires respecting the flow of data. Below is the generalized topology used for deterministic audio pipeline integration.
      </p>

      <div class="flex flex-col md:flex-row items-stretch md:items-center gap-4 text-text-secondary font-mono border border-border p-8 overflow-x-auto text-sm justify-between">
        <div class="flex flex-col items-center gap-2 p-4 bg-surface w-full md:w-auto">
          <span class="text-primary font-bold">INPUT</span>
          <span class="text-xs text-[#9CA3AF]/60">ADC / Network</span>
        </div>
        <ArrowRight class="hidden md:block w-4 h-4 text-[#1F2A27] shrink-0" />
        <ArrowDown class="block md:hidden w-4 h-4 text-[#1F2A27] mx-auto shrink-0" />
        
        <div class="flex flex-col items-center gap-2 p-4 bg-surface w-full md:w-auto">
          <span class="text-text-primary font-bold">BUFFER</span>
          <span class="text-xs text-[#9CA3AF]/60">Jitter control</span>
        </div>
        <ArrowRight class="hidden md:block w-4 h-4 text-[#1F2A27] shrink-0" />
        <ArrowDown class="block md:hidden w-4 h-4 text-[#1F2A27] mx-auto shrink-0" />
        
        <div class="flex flex-col items-center gap-2 p-4 bg-surface w-full md:w-auto">
          <span class="text-text-primary font-bold">PROCESSOR</span>
          <span class="text-xs text-[#9CA3AF]/60">DSP / Logic</span>
        </div>
        <ArrowRight class="hidden md:block w-4 h-4 text-[#1F2A27] shrink-0" />
        <ArrowDown class="block md:hidden w-4 h-4 text-[#1F2A27] mx-auto shrink-0" />

        <div class="flex flex-col items-center gap-2 p-4 bg-surface border border-accent/20 w-full md:w-auto">
          <span class="text-accent font-bold">OUTPUT</span>
          <span class="text-xs text-[#9CA3AF]/60">DAC / Stream</span>
        </div>
      </div>
    </div>

    <SectionHeader subtitle="Constraints">Trade-offs</SectionHeader>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-text-secondary font-light">
      <div class="border border-border p-6 hover:border-primary/50 transition-colors">
        <h4 class="text-primary font-mono mb-4 text-lg">Latency vs. Quality</h4>
        <p>Minimizing latency typically requires smaller buffer sizes and less complex error correction, which can introduce artifacts if the network is volatile.</p>
      </div>
      <div class="border border-border p-6 hover:border-primary/50 transition-colors">
        <h4 class="text-primary font-mono mb-4 text-lg">Complexity vs. Reliability</h4>
        <p>Adding dynamic routing logic increases system versatility but directly increases the surface area for failures. Hard-coded routes win on uptime.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowDown } from 'lucide-vue-next'
</script>
