import type Films from "@/models/filmsModel";
import axios from "axios";
import { defineStore } from "pinia";

export const useFilmsStore = defineStore({
  id: "filmsStore",
  state: () => ({
    films: [] as Films[],
  }),
  getters: {
    getFilms(state) {
      return state.films;
    },
  },
  actions: {
    async getFilmsFromApi() {
      try {
        const res = await axios.get("https://swapi.dev/api/films");
        this.films = res.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
