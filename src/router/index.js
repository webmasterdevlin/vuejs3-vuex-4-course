import { createRouter, createWebHistory } from "vue-router";
// there is also createWebHashHistory and createMemoryHistory
import Heroes from "../heroes/views/Heroes";

const routerHistory = createWebHistory(process.env.BASE_URL);

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: "/",
      redirect: { name: "heroes" },
    },
    {
      path: "/heroes",
      name: "heroes",
      component: Heroes,
    },
  ],
});

const dirLog = {
  "": "？",
  back: "⏪",
  forward: "⏩",
};

routerHistory.listen((to, from, info) => {
  console.log(`${dirLog[info.direction]} as a ${info.type}`);
});