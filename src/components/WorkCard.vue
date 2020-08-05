<template>
  <div class="border border-gray-400 lg:border lg:border-gray-400 max-w-sm w-full lg:max-w-full lg:flex mb-2 mt-2" :class="shadow">
    <div
      class="h-48 w-48 lg:h-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="{backgroundImage: `url(${imageUrl})`}"
      title="Woman holding a mug"
    >
    </div>
    <div
      class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2 text-left">
          {{ title }}
        </div>
        <div class="text-gray-900 text-md text-left">
          {{ employer }} . {{ employmentType }}
        </div>
        <div class="text-sm mb-2 text-left">
          <p class="text-gray-600">
            {{ from }} - {{ to }}
          </p>
        </div><div class="text-sm text-left text-sm">
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
      default: 'shadow-sm'
    }
  }
}
</script>
