import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SignIn from "@/views/SignIn.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
