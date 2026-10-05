<script lang="ts">
  import { toaster } from '#lib';

  let text = $state('');
  function handlePaste(event: ClipboardEvent) {
    event.preventDefault();
  }
</script>

<div class="flex sp-4">
  <textarea
    class="textarea w-full h-[90vh]"
    onpaste={handlePaste}
    bind:value={text}
  ></textarea>
</div>
