import type Peoples from "@/models/peopleModel";
import axios from "axios";
import { defineStore } from "pinia";

export const useStarWarsStore = defineStore({
  id: "starWars",
  state: () => ({
    people: [] as Peoples[],
  }),
  getters: {
    getPeoples(state) {
      return state.people;
    },
  },
  actions: {
    async getPeoplesFromApi(name: string) {
      try {
        const res = await axios.get(
          `https://swapi.dev/api/people/?search=${name}`
        );
        this.people = res.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
