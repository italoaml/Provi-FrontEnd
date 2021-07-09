<template>
  <footer class="footer no-print">
    <span>
      Copyright
      <strong>Provi</strong> © 2021-2021
    </span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  grid-area: footer;
  background: linear-gradient(to right, #5f2c82, #5f2c82);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  font-size: 14px;
}

</style>