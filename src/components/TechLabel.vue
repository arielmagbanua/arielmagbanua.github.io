<template>
  <div class="inline-block m-1 h-auto flex-grow">
    <i v-if="renderable" :class="techClass"></i>
    <span
      v-else
      class="bg-gray-200 rounded-full px-3 py-1 m-1 text-sm font-semibold text-gray-700">
      {{ lang }}
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      renderableTech: [
        'php',
        'laravel',
        'html5',
        'css3',
        'vuejs',
        'js',
        'node-js',
        'google-play',
        'java',
        'android'
      ]
    }
  },
  props: {
    lang: {
      type: String,
      required: true
    }
  },
  computed: {
    techClass () {
      return `fab fa-${this.lang} fa-2x`
    },
    renderable () {
      return this.renderableTech.includes(this.lang)
    }
  }
}
</script>
