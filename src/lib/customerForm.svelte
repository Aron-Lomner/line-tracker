<script lang="ts">
  import { customers } from "$lib/store";
  let name = "";
</script>

<div>
  <input type="text" bind:value={name} />
  <button
    on:click={() => {
      if (name === "") return;
      customers.update((c) => [...c, { name, highlighted: false }]);
      name = "";
    }}>Add</button
  >
</div>
