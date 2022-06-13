import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FilmsView from "@/views/FilmsView.vue";
import PlanetsView from "@/views/PlanetsView.vue";
import PlanetView from "@/views/PlanetView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/films",
      name: "films",
      component: FilmsView,
    },
    {
      path: "/planets",
      name: "planets",
      component: PlanetsView,
    },
    {
      path: "/planets/:id",
      name: "planet",
      component: PlanetView,
    },
  ],
});

export default router;
