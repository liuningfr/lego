<template>
  <div class="app-container">
    <uploader action="http://local.test:7001/api/upload/" drag>
    <div class="uploader-container">
      <h4>上传图片</h4>
    </div>
    <template #loading>
      <div class="uploader-container">
        <h4>上传中</h4>
      </div>
    </template>
    <template #uploaded="{uploadedData}">
      <div class="uploaded-area">
        <img :src="uploadedData.data.url">
        <h3>点击重新上传</h3>
      </div>
    </template>
    </uploader>
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

<style lang="scss">
.page-title {
  color: #fff;
}
.file-upload .upload-area {
  background: #efefef;
  border: 1px dashed #ccc;
  border-radius: 4px;
  cursor: pointer;
  padding: 20px;
  width: 360px;
  height: 180px;
  text-align: center;
  &:hover {
    border: 1px dashed #1890ff;
  }
  &.is-dragover {
    border: 2px dashed #1890ff;
    background: rgba(#1890ff, .2);
  }
}
.uploaded-area img {
  height: 100px;
}
</style>
