<template>
  <div v-for="planet in planets" :key="planet" class="peoples">
    <p>{{ planet.name }}</p>
  </div>
</template>

<script lang="ts">
import { usePlanetsStore } from "../stores/planets";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

export default {
  setup() {
    const store = usePlanetsStore();
    const { getPlanetFromApi } = store;
    const { planet } = storeToRefs(store);
    const userData = ref();
    const route = useRoute;

    const axiosData = getPlanetFromApi("1");
    console.log(route);

    return { axiosData, planet, userData, route };
  },
};
</script>
