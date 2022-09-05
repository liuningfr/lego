<template>
  <template-detail />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './views/Home.vue'
import Editor from './views/Editor.vue'
import TemplateDetail from './views/TemplateDetail.vue'

export default defineComponent({
  name: 'App',
  components: {
    // Home,
    // Editor,
    TemplateDetail,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
