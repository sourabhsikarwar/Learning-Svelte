<script lang="ts">
  import { Queue } from "../service/queue";
  import { writable } from "svelte/store";

  let shapeBoxes = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
  const flatShape = shapeBoxes.flat();
  const shapeCount = flatShape.filter((cell) => cell === 1).length;

  let queue = writable(new Queue());

  function emptyShapes() {
    queue.update((q) => {
      function dequeueNext() {
        if (q.size() === 0) return;

        q.dequeue();
        queue.set(q);

        setTimeout(dequeueNext, 100);
      }
      dequeueNext();
      return q;
    });
  }

  function handleClick(idx: number) {
    if (flatShape[idx] === 0) return;

    queue.update((q) => {
      if (q.includes(idx)) {
        return q;
      }
      q.enqueue(idx);
      q.print();

      if (q.size() === shapeCount) {
        emptyShapes();
      }

      return q;
    });
  }
</script>

<div class="main">
  {#each flatShape as cell, i}
    <button
      class="cell {$queue.includes(i) ? 'selected' : ''}"
      style="border: {cell === 1 ? '1px solid #333' : '1px solid transparent'};"
      on:click={() => handleClick(i)}
    />
  {/each}
</div>

<style>
  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  .cell {
    width: 100px;
    height: 100px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
  }
  .selected {
    background-color: #4caf50;
  }
</style>
