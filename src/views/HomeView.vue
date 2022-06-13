<template>
  <div>
    <input type="text" v-model="heroName.name" />
    <button @click="onSubmit">click</button>
  </div>
  <div v-for="person in people" :key="person.name" class="peoples">
    <p>{{ person.name }}</p>
  </div>
</template>

<script lang="ts">
import { useStarWarsStore } from "../stores/starWars";
import { storeToRefs } from "pinia";
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const store = useStarWarsStore();
    const { getPeoplesFromApi } = store;
    const { people } = storeToRefs(store);
    const heroName = ref({
      name: "",
    });

    const axiosData = getPeoplesFromApi("");

    const onSubmit = () => axiosData === getPeoplesFromApi(heroName.value.name);

    return { people, heroName, onSubmit, axiosData };
  },
};
</script>
