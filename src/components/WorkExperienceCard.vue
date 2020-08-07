<template>
  <div
    class="w-full lg:max-w-full flex flex-row mb-2 mt-2"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    :class="{'shadow-lg': hovered, 'shadow-md': !hovered}"
  >
    <div class="h-auto flex flex-col w-auto">
      <div
        class="h-24 w-24 bg-gray-400 bg-contain"
        :style="{backgroundImage: `url(${imageUrl})`}">
      </div>
    </div>
    <div class="w-full h-auto flex flex-col">
      <div class="px-2 py-4">
        <div class="text-gray-900 font-bold text-xl mb-2 text-left">
          {{ title }}
        </div>
        <div class="text-gray-900 text-md text-left">
          {{ employer }} . {{ employmentType }}
        </div>
        <div class="text-sm mb-2 text-left pb-2">
          <p class="text-gray-600">
            {{ from }} - {{ to }}
          </p>
        </div>
        <div class="text-sm text-left text-sm mt-4">
          <p class="text-gray-700 text-base">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hovered: false
    }
  },
  props: {
    title: {
      type: String,
      default: 'Job Title'
    },
    employer: {
      type: String,
      default: ''
    },
    employmentType: {
      type: String,
      default: 'Part-time'
    },
    from: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: 'Present'
    },
    description: {
      type: String,
      default: null
    },
    imageUrl: {
      type: String,
      default: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    shadow: {
      type: String,
      default: 'shadow-md'
    }
  }
}
</script>
