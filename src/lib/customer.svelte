<script lang="ts">
  export let name: string;
  export let highlighted: Boolean;
  export let deleteCustomer: Function = () => {};
  export let highlightCustomer: Function = () => {};

  let menuOpen: Boolean = false;
</script>

<div class="customer">
  <h1 style={highlighted ? "background-color: yellow;" : ""}>{name}</h1>
  <button
    class="menu_btn"
    on:click={() => {
      menuOpen = !menuOpen;
    }}>{menuOpen ? "X" : "⋮"}</button
  >
</div>
{#if menuOpen}
  <div class="menu">
    <button on:click={highlightCustomer()}
      >{highlighted ? "unhighlight" : "highlight"}</button
    >
    <button on:click={deleteCustomer()}>Delete</button>
  </div>
{/if}

<style>
  h1 {
    font-size: medium;
    font-family: "Courier New", Courier, monospace;
    /* if higlighted: bg= yellow */
  }
  .customer {
    display: flex;
    align-items: center;
  }
  .menu_btn {
    height: fit-content;
    margin-left: 10px;
  }
  .menu {
    display: flex;
    flex-direction: column;
  }
  .menu button {
    width: fit-content;
  }
</style>
