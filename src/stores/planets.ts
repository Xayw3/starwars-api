import type Planets from "@/models/planetsModel";
import axios from "axios";
import { defineStore } from "pinia";

export const usePlanetsStore = defineStore({
  id: "filmsStore",
  state: () => ({
    planets: [] as Planets[],
    planet: {} as Planets,
  }),
  getters: {
    getPlanets(state) {
      return state.planets;
    },
  },
  actions: {
    async getPlanetsFromApi() {
      try {
        const res = await axios.get("https://swapi.dev/api/planets");
        this.planets = res.data.results;
      } catch (error) {
        console.log(error);
      }
    },
    async getPlanetFromApi(id: string) {
      try {
        const res = await axios.get(`https://swapi.dev/api/planets/${id}`);
        this.planets = res.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
