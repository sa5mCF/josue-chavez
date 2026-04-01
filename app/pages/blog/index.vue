<template>
  <div>
    <SectionHeader>Blog <span class="text-accent ml-2">[WIP]</span></SectionHeader>
    <p class="text-text-secondary mb-12 font-mono text-sm tracking-wide">Technical notes on audio systems and integrations</p>

    <div class="space-y-6 opacity-60 pointer-events-none">
      <div class="border border-border p-6 flex justify-between items-center group">
        <div>
          <h3 class="text-text-primary font-mono text-lg mb-2">Mitigating Clock Drift in AoIP</h3>
          <p class="text-text-secondary text-sm font-light">Analyzing PTPv2 boundary clock behaviors on mixed vendor switches.</p>
        </div>
        <span class="text-xs font-mono text-border">DRAFT</span>
      </div>

      <div class="border border-border p-6 flex justify-between items-center group">
        <div>
          <h3 class="text-text-primary font-mono text-lg mb-2">gRPC for Hardware Control</h3>
          <p class="text-text-secondary text-sm font-light">Replacing legacy RS-232 gateways with typed gRPC services in Go.</p>
        </div>
        <span class="text-xs font-mono text-border">DRAFT</span>
      </div>
    </div>
  </div>
</template>
