<template>
  <div class="app-container">
    <uploader action="http://local.test:7001/api/upload/"/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Uploader from './components/Uploader.vue'

export default defineComponent({
  name: 'App',
  components: {
    Uploader
  },
});
</script>

<style>
.page-title {
  color: #fff;
}
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>
