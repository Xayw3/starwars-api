<template>
  <select @change="onChange" v-model="sort.sortValue" name="filmsSort">
    <option value="id">By id</option>
    <option value="release-up">By release date up</option>
    <option value="release-down">By release date down</option>
  </select>
  <div v-for="{ title, episode_id } in sortedFilms" :key="episode_id">
    <p>{{ title }}</p>
  </div>
</template>

<script lang="ts">
import { useFilmsStore } from "../stores/films";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useFilmsStore();
    const { getFilmsFromApi } = store;
    const { films } = storeToRefs(store);

    const sort = ref({
      sortValue: "id",
    });

    const axiosData = getFilmsFromApi();
    console.log(films);

    const sortedFilms = computed(() => {
      const sortedByDate = [...films.value].sort(
        (a, b) =>
          Number(new Date(a.release_date)) - Number(new Date(b.release_date))
      );
      if (sort.value.sortValue === "release-up") {
        return sortedByDate.reverse();
      } else if (sort.value.sortValue === "release-down") {
        return sortedByDate;
      }
      return [...films.value].sort((a, b) => a.episode_id - b.episode_id);
    });

    const onChange = (e: Event & { target: HTMLOptionElement }) => e.target.value;

    return { axiosData, films, sortedFilms, onChange, sort };
  },
};
</script>
