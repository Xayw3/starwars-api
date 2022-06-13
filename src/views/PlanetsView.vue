<template>
  <div v-for="planet in planets" :key="planet" class="peoples">
    <div>
      <p>{{ planet.name }}</p>
      <router-link :to="'/planets/' + planet.url.replace(/[^0-9]/g, '')">
        more info
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { usePlanetsStore } from "../stores/planets";
import { storeToRefs } from "pinia";
import { ref } from "@vue/reactivity";
import router from "@/router";

export default {
  setup() {
    const store = usePlanetsStore();
    const { getPlanetsFromApi } = store;
    const { planets } = storeToRefs(store);
    const heroName = ref({
      name: "",
    });


    const axiosData = getPlanetsFromApi();

    return { heroName, axiosData, planets };
  },
};
</script>
