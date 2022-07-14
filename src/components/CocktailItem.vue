<!-- CocktailItem.vue -->
<script>
export default {
  data() {
    return {
      cocktailDatas: null, // cocktailDatas map
      viewMore: false, // view more section boolean
    };
  },

  mounted() {
    // fetch data after the component is mounted
    this.fetchData();
  },

  methods: {
    fetchData() {
      // use the random cocktail api
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        // parsing the response body as json
        .then((response) => response.json())
        // replace cocktailDatas with the api datas
        .then((data) => {
          this.cocktailDatas = data["drinks"][0];
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<script setup>
import IconChevronDown from "./icons/IconChevronDown.vue";
import IconLoading from "./icons/IconLoading.vue";
</script>

<template>
  <div
    class="flex flex-col items-center lg:self-start w-full max-w-320 min-h-380 rounded-8 shadow-lg bg-white space-y-20 overflow-hidden group relative cursor-pointer"
    :class="{ loading: !cocktailDatas }"
    @click="viewMore = !viewMore"
  >
    <!-- if no data -> loading spinner -->
    <div v-if="!cocktailDatas" class="flex items-center space-x-16">
      <IconLoading />
      <p>loading...</p>
    </div>
    <!-- else -> cocktails datas -->
    <div v-else class="w-full">
      <!-- img -->
      <div class="w-full overflow-hidden">
        <img
          alt="cocktail thumbnail"
          class="block w-full max-h-200 object-cover object-center group-hover:scale-110 transition-transform duration-300"
          :src="cocktailDatas.strDrinkThumb"
        />
      </div>

      <div
        class="flex flex-col items-center px-10 lg:px-18 pt-20 space-y-20 overflow-hidden"
      >
        <!-- title -->
        <h3>{{ cocktailDatas.strDrink }}</h3>

        <!-- view more section -->
        <div class="flex flex-col items-center overflow-hidden pb-60">
          <Transition name="recipe">
            <div v-if="viewMore" class="flex flex-col space-y-18">
              <div class="recipeContainer">
                <h4>Ingredients</h4>
                <!-- ingredients list  -->
                <ul p class="recipeText list-disc list-inside">
                  <!-- 1 to 15 ingredients range -->
                  <template v-for="n in 15">
                    <li
                      v-if="
                        cocktailDatas[`strMeasure${n}`] !== null &&
                        cocktailDatas[`strMeasure${n}`] !== ''
                      "
                      :key="n"
                    >
                      {{ cocktailDatas[`strMeasure${n}`] }}
                      {{ cocktailDatas[`strIngredient${n}`] }}
                    </li>
                  </template>
                </ul>
              </div>
              <!-- glass -->
              <div class="recipeContainer">
                <h4>Glass</h4>
                <p class="recipeText">{{ cocktailDatas.strGlass }}</p>
              </div>
              <!-- recipe -->
              <div class="recipeContainer">
                <h4>Recipe</h4>
                <p class="recipeText">{{ cocktailDatas.strInstructions }}</p>
              </div>
            </div>
          </Transition>
          <!-- view more text -->
          <div
            class="w-full flex space-x-20 items-center justify-center absolute bottom-20"
          >
            <p class="text-lightest">View the recipe</p>
            <div
              class="transition duration-300"
              :class="{ iconSpin: viewMore, iconBounce: !viewMore }"
            >
              <IconChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.iconSpin {
  @apply rotate-180;
}

.iconBounce {
  @apply animate-bounce;
}

.loading {
  @apply justify-center;
}

.recipeContainer {
  @apply flex flex-col space-y-4;
}

.recipeText {
  @apply px-8;
}

/* transition style */
.recipe-enter-active,
.recipe-leave-active {
  transition: all 0.4s ease-in-out;
}

.recipe-leave-to {
  transform: translate(0, -100%);
  opacity: 0;
}

.recipe-enter-from {
  transform: translate(0, -100%);
  opacity: 0;
}
</style>
