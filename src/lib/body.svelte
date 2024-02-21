<script lang="ts">
  import Customer from "$lib/customer.svelte";
  import CustomerForm from "$lib/customerForm.svelte";
  type Customer = {
    name: string;
    highlighted: boolean;
  };
  let customers: Array<Customer> = [
    { name: "Joe Smoe", highlighted: false },
    { name: "Chaim", highlighted: false },
  ];
  let showNew = false;
  function deleteCustomer(name?: string | undefined) {
    if (name === undefined) {
      customers = customers.filter((e, i) => {
        return i > 0;
      });
    }
    customers = customers.filter((e) => e.name != name);
  }
  function addCustomer(name: string | undefined) {
    if (name === undefined) return;
    customers = [...customers, { name, highlighted: false }];
    showNew = false;
  }
  function highlightCustomer(name: string) {
    customers = customers.map((c) =>
      c.name === name ? { name: c.name, highlighted: !c.highlighted } : c
    );
  }
  $: console.log(customers);
</script>

<div class="body">
  <p>Currently Serving:</p>
  <div class="customers">
    {#each customers as customer}
      <Customer
        {...customer}
        deleteCustomer={() => {
          deleteCustomer(customer.name);
        }}
        highlightCustomer={() => {
          highlightCustomer(customer.name);
        }}
      />
    {/each}
  </div>
  <div class="btn_container">
    <button
      on:click={() => {
        deleteCustomer();
      }}
    >
      Done, Next Customer</button
    ><button
      on:click={() => {
        showNew = !showNew;
      }}>{showNew ? "cancel" : "New Patron"}</button
    >
    {#if showNew}
      <CustomerForm
        addCustomer={(name) => {
          addCustomer(name);
        }}
      />
    {/if}
  </div>
</div>

<style>
  .btn_container {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 0 auto;
  }
  .body {
    display: flex;
    flex-direction: row;
    margin: 2vh 2vw;
  }
  .customers {
    margin: 0 auto 0 20px;
  }
  p {
    color: blue;
  }
</style>
