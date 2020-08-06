<template>
  <div class="flex items-end flex-col max-w-sm rounded overflow-hidden shadow-lg my-2 mx-2">
    <img class="w-full" :src="cover" alt="Project" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        <a :href="url">{{ title }}</a>
      </div>
      <p class="text-gray-700 text-base">
        <a :href="url">{{ description }}</a>
      </p>
    </div>
    <div class="px-6 py-4 h-full w-full flex-wrap flex-row flex items-center">
      <tech-label v-for="tech in technologies" :key="tech"
        :lang = tech
      />
      <div v-for="tech in otherTechnologies" :key="tech" class="h-auto inline-block flex-grow m-2">
        <span
          class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

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
    },
    otherTechnologies: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
