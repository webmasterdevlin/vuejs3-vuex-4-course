<template>
  <div class="sticky-top">
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row"
      style="margin-bottom: 2rem"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">LOGO</router-link>
        <ul class="nav navbar-nav d-flex flex-row bd-highlight">
          <li class="nav-item">
            <router-link to="/heroes" exact class="nav-link"
              >{{ heroes.length > 0 ? heroes.length : "" }} Heroes</router-link
            >
          </li>
        </ul>
        <section v-if="isAuthenticated">
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item me-4">
              <span>{{ email }}</span>
            </li>
            <li class="nav-item">
              <a href="/" onclick="localStorage.clear('token')">Logout</a>
            </li>
          </ul>
        </section>
        <section v-else>
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link class="nav-link me-4" to="/login"
                >Sign in</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="btn btn-outline-primary" to="/register"
                >Sign up</router-link
              >
            </li>
          </ul>
        </section>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",

  computed: {
    ...mapGetters("authModule", {
      isAuthenticated: "isAuthenticated",
      email: "email",
    }),

    ...mapGetters("heroModule", {
      heroes: "heroes",
    }),
  },
};
</script>

<style scoped></style>
