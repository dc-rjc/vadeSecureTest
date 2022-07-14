<script setup>
import CocktailsList from "./components/CocktailsList.vue";
</script>

<template>
  <div class="min-h-screen lg:h-screen relative overflow-x-hidden bg-bg/[.12]">
    <!-- layer background -->
    <div
      class="w-240 sm:w-320 lg:w-400 absolute -z-10 -top-60 sm:-top-40 lg:-top-72 -left-60 sm:-left-100 lg:-left-80"
    >
      <img alt="" class="block w-full" src="./assets/layerBg.svg" />
    </div>

    <div
      class="flex flex-col items-center justify-center w-full px-20 pt-20 lg:pt-80 pb-80 lg:pb-20 space-y-160"
    >
      <!-- page title -->
      <header class="pt-40 lg:pt-0">
        <h1>Welcome to choose me a cocktail !</h1>
      </header>

      <!-- cocktails list -->
      <CocktailsList />
    </div>

    <!-- palm leaves -->
    <footer
      class="w-[200%] sm:w-[110%] absolute -bottom-50 lg:-bottom-100 -z-10 left-1/2 -translate-x-1/2"
    >
      <img alt="" class="block w-full" src="./assets/leavesBg.svg" />
    </footer>
  </div>
</template>
