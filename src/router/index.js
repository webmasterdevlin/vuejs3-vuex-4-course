import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";

const routerHistory = createWebHistory(process.env.BASE_URL);

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/heroes",
      name: "heroes",
      meta: {
        title: "Heroes",
      },
      component: () => import("../heroes/views/Heroes"),
    },
    {
      path: "/anti-heroes",
      name: "anti-heroes",
      meta: {
        title: "Anti-Heroes",
      },
      component: () => import("../anti-heroes/views/AntiHeroes"),
    },
  ],
});
