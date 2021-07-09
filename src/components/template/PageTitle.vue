<template>
  <div class="page-title no-print">
    <h1 class="ml-3 mr-3">
      <i v-if="icon" :class="icon"></i>
      {{main}}
    </h1>
    <h2 class="ml-3 mr-3">{{sub}}</h2>
    <hr/>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["icon", "main", "sub"],
};
</script>

<style>
.page-title h1 {
  margin: 0px;
}

.page-title h2 {
  color: #777;
  margin-top: 5px;
  font-size: 1.3rem;
}
</style>