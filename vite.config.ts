import { defineConfig } from 'vite';
import deno from '@deno/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@deno/svelte-adapter';

export default defineConfig({
  plugins: [
    deno(),
    tailwindcss(),
    sveltekit({
      preprocess: [vitePreprocess()],
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true),
      },
      adapter: adapter(),
    }),
  ],

  // 1. 핵심 해결책: Skeleton 패키지를 외부 모듈(External)로 처리하지 않고
  //    Vite와 Svelte 플러그인이 직접 소스코드를 변환하도록 강제 유도합니다.
  ssr: {
    noExternal: ['@skeletonlabs/skeleton-svelte', '@skeletonlabs/skeleton'],
  },
  server: {
    watch: {
      // ⚡ 무거운 캐시 및 노드 폴더를 감시 대상에서 완전히 제외합니다.
      ignored: ['**/node_modules/**', '**/.deno/**', '**/.svelte-kit/**'],
    },
  },
});
