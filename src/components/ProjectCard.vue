<template>
  <div
    class="w-full lg:max-w-sm project-card flex items-end flex-col rounded shadow-md overflow-hidden my-2 mx-2 shadow-md hover:shadow-lg"
  >
    <div
      class="w-full flex-none bg-cover project-cover-image"
      :style="coverImageStyle"
    >
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        <a :href="url">{{ title }}</a>
      </div>
      <p class="text-gray-700 text-base">
        <a :href="url">{{ description }}</a>
      </p>
    </div>
    <div class="px-6 py-4 h-auto w-full flex-wrap flex-row flex items-center">
      <tech-label v-for="tech in technologies" :key="tech"
        :lang = tech
      />
    </div>
  </div>
</template>

<style scoped>
  div.project-cover-image {
    height: 200px;
  }
</style>

<script>
import TechLabel from './TechLabel'

export default {
  components: {
    TechLabel
  },
  props: {
    cover: {
      type: String,
      default () {
        return 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
      }
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    url: {
      type: String
    },
    technologies: {
      type: Array,
      default () {
        return []
      }
    }
  },

  computed: {
    coverImageStyle () {
      return {
        backgroundImage: `url('${this.cover}')`
      }
    }
  }
}
</script>
