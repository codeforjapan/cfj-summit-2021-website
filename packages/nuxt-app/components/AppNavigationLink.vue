<template>
  <nuxt-link :to="path" active-class="Active">
    {{ label }}
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

type Props = {
  path: string;
  label: string;
};

export default Vue.extend<unknown, unknown, unknown, Props>({
  props: {
    path: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.Active {
  pointer-events: none;
  color: #4ac0e5;
}
</style>
