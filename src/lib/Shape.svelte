<script>
  let shapeBoxes = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
</script>

<div class="main">
  {#each shapeBoxes as row}
    <div class="row">
      {#each row as cell}
        <div class="cell" style="border: {cell ? '1px solid #333' : '1px solid #fff'}" />
      {/each}
    </div>
  {/each}
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .row {
    display: flex;
    gap: 8px;
  }

  .cell {
    width: 100px;
    height: 100px;
  }
</style>
