<template>
  <header class="header">
    <h1 class="title">
      <router-link to="/">{{title}}</router-link>
    </h1>
    <UserDropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>
import UserDropdown from "./UseDropdown";
export default {
  name: "Header",
  components: { UserDropdown },
  props: {  
    hideToggle: Boolean,
    hideUserDropdown: Boolean,
  },
  data: function() {
    return {
      title: null  
    }
  },    
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    setTitle() {
      this.title = 'Provi'  
    },
  },
  mounted() {
    this.setTitle()
  }
};
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #5f2c82, #5f2c82);  
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 1.4rem;
  color: #fff;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}
.title a {
  color: #fff;
  text-decoration: none;
}
.title a:hover {
  color: #fff;
  text-decoration: none;
}
header.header > a.toggle {
  width: 60px;
  height: 100%;
  color: #fff;
  justify-self: flex-start;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
header.header > a.toggle:hover {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>