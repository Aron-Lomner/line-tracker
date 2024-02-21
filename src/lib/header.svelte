<script lang="ts">
  import { onMount } from "svelte";

  export let title: string;

  onMount(() => {});
</script>

{#if title}
  <h1>{title}</h1>
{/if}

<style>
  h1 {
    font-size: 24px;
    text-align: center;
    font: sans-serif;
    border-bottom: #000 2px solid;
    width: 65%;
    margin: 0 auto;
    padding-bottom: 5px;
  }
</style>
