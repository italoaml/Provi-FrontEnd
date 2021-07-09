<template>
    <div class="menu-filter">
    </div>
</template>

<script>
// import { baseApiUrl, showError } from '@/global'
// import axios from 'axios'
// import { mapState } from "vuex";

export default {
  name: "Menu",
}
</script>

<style>
.menu {
  grid-area: menu;
  background: #e2e2e2;
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.menu span,
.menu span:hover {
  color: black;
  text-decoration: none;
}
.menu .tree {  
  font-size: 16px;
  font-weight: bold;
}
.menu .tree-node.selected > .tree-content,
.menu .tree-node .tree-content:hover {
  background-color:#cccccc;
}
.menu .tree-node:not(.selected) > .tree-content:hover {
  background:#cccccc;
}
.tree-arrow.has-child {
  filter: black;
}
.menu .menu-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #aaa;
}
.menu .menu-filter i {
  color: #aaa;
  margin-right: 10px;
}
.menu input {
  color: #ccc;
  font-size: 1.3rem;
  border: 0;
  outline: 0;
  width: 100%;
  background: transparent;
}
.tree-filter-empty {
  color: #ccc;
  font-size: 1.3rem;
  margin-left: 20px;
}
</style>