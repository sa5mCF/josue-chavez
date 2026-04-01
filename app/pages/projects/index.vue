<template>
  <div>
    <SectionHeader subtitle="Case Studies">Projects</SectionHeader>
    <div class="flex flex-col gap-12">
      <div v-for="i in 3" :key="i" class="border border-border p-8 bg-surface">
        <h3 class="text-2xl font-mono text-primary mb-6">Automated Broadcast Pipeline</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-3 text-text-secondary font-light space-y-4">
            <div>
              <h4 class="text-sm font-mono text-text-primary mb-2">Problem</h4>
              <p>Manual intervention required for 24/7 endpoint routing with frequent failure points across legacy hardware.</p>
            </div>
            <div>
              <h4 class="text-sm font-mono text-text-primary mb-2">Solution</h4>
              <p>Implemented a deterministic router written in Go that interfaces with legacy device APIs and manages failure gracefully with state replication.</p>
            </div>
            <div>
              <h4 class="text-sm font-mono text-text-primary mb-2">Results</h4>
              <p>Zero downtime observed over a 9-month period. Mean time to recovery (MTTR) dropped by 95%.</p>
            </div>
          </div>
          
          <div class="border-l border-border pl-8 font-mono text-sm space-y-2">
            <h4 class="text-text-primary mb-4 border-b border-border pb-2">Stack</h4>
            <div class="text-accent">Go</div>
            <div class="text-accent">PostgreSQL</div>
            <div class="text-accent">Docker</div>
            <div class="text-accent">Prometheus</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
