<template>
  <component :is="tag" :style="styleProps" class="l-text-component">
    {{text}}
  </component>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { pick } from 'lodash-es'
// array that contains style props
export default defineComponent({
  name: 'l-text',
  props: {
    text: {
      type: String,
    },
    fontSize: {
      type: String,
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup (props) {
    // 重用并且简化
    // 抽离并且获得 styleProps
    const styleProps = computed(() => pick(props, ['fontSize']))
    return {
       styleProps
    }
  }
})
</script>

<style scoped>
h2.l-text-component, p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>