<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  text-align: center;
  color: $color-black;
}

#nav {
  padding: $space-lg;

  a {
    font-weight: 500;
    color: $color-dark;

    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}
</style>
