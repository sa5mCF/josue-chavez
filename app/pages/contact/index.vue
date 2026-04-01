<template>
  <div class="max-w-2xl">
    <SectionHeader subtitle="Connect">Contact</SectionHeader>
    
    <div class="mb-12">
      <h3 class="text-xl font-mono text-primary mb-2">Describe your system or integration problem</h3>
      <p class="text-text-secondary font-light text-sm">Please provide details regarding endpoints, preferred transport protocol, and latency budgets.</p>
    </div>

    <form class="space-y-6" @submit.prevent>
      <div class="flex flex-col gap-2">
        <label for="name" class="font-mono text-xs text-text-primary tracking-widest uppercase">Name</label>
        <input 
          type="text" 
          id="name" 
          class="bg-surface border border-border px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors font-sans"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="email" class="font-mono text-xs text-text-primary tracking-widest uppercase">Email</label>
        <input 
          type="email" 
          id="email" 
          class="bg-surface border border-border px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors font-sans"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="message" class="font-mono text-xs text-text-primary tracking-widest uppercase">Message / System Specifications</label>
        <textarea 
          id="message" 
          rows="6"
          class="bg-surface border border-border px-4 py-3 text-text-primary focus:outline-none focus:border-primary transition-colors font-sans resize-y"
        ></textarea>
      </div>

      <button type="button" class="bg-primary text-[#0A0E0C] font-mono tracking-widest uppercase px-8 py-3 w-full sm:w-auto hover:bg-accent transition-colors font-bold mt-4">
        Transmit
      </button>
    </form>
  </div>
</template>
