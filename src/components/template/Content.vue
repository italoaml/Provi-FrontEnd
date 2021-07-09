<template>
  <div id="content" class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style>
.content {
  grid-area: content;
  background-color: #e7e5db;
  padding: 20px;
}
</style>