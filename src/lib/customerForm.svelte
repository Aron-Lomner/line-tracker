<script lang="ts">
  export let addCustomer: Function;
  let name: string | undefined;
</script>

<div>
  <input type="text" bind:value={name} />
  <button on:click={addCustomer(name)}>Add</button>
</div>
