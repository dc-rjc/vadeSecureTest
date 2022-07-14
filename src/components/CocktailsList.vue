<!-- CocktailsList.vue -->
<script setup>
import CocktailItem from "./CocktailItem.vue";
</script>

<template>
  <main
    class="flex flex-col lg:flex-row space-y-100 lg:space-y-0 items-center justify-evenly w-full"
  >
    <!-- generate 3 cocktail items -->
    <CocktailItem v-for="n in 3" :key="n" />
  </main>
</template>
