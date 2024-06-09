<script lang="ts">
  import logo from "/logo.png";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div>
    <a href="https://www.indmoney.com/" target="_blank" rel="noreferrer">
      <img src={logo} class="logo" alt="INDMoney" />
    </a>
  </div>
  <h1>INDMoney</h1>

  <div class="card">
    <Counter />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>
