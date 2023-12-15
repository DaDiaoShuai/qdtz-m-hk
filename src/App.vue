<script setup>
import Header from './layout/header.vue'
import Content from './layout/content.vue'


</script>

<template>
  <Header/>
  <Content/>
  <p class="contact">
    {{ $t("messages.con") }}：
    mail@qdtz888.com
  </p>
</template>

<style scoped>
.contact {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #fff;
  z-index: 999;
}
</style>
