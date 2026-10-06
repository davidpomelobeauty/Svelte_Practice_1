<script lang="ts">
  import '../app.css';
  import { AppBar } from '@skeletonlabs/skeleton-svelte';

  const links = [
    { label: 'Variants', href: '/' },
    { label: 'P_Orders', href: '/p_orders' },
  ];
</script>

<header class="sticky top-0 z-50 w-full flex-none">
  <AppBar>
    <AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
      <AppBar.Headline>
        <div class="flex items-center gap-4">
          {#each links as link}
            <a
              href={link.href}
              class="hover:text-primary-500 transition-colors">{link.label}</a
            >
          {/each}
        </div>
      </AppBar.Headline>
    </AppBar.Toolbar>
  </AppBar>
</header>
