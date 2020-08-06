<template>
  <div class="inline-block mx-2 h-auto flex-grow">
    <i :class="techClass"></i>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      required: true
    }
  },
  computed: {
    techClass () {
      return `fab fa-${this.lang} fa-2x`
    }
  }
}
</script>
