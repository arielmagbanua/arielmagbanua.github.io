<template>
  <div class="container mx-auto profile">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
    >
      <div class="px-6">
        <div class="mt-10 py-10 text-center">
          <div class="flex flex-wrap xl:flex-row lg:flex-row sm:flex-col md:flex-col justify-center">
            <project-card v-for="project in projects" :key="project.title"
              :title="project.title"
              :description="project.description"
              :cover="project.cover"
              :technologies="project.technologies"
              :url="project.url"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import { firestore } from '../libs/firestore'

export default {
  data () {
    return {
      projects: []
    }
  },
  components: {
    ProjectCard
  },
  mounted: async function () {
    const snapshot = await firestore.collection('projects')
      // .where('show', '==', true) // TODO: Fix the where clause
      .orderBy('importance', 'desc')
      .get()

    this.projects = snapshot.docs.map((doc) => doc.data())
      .filter((project) => project.show)
  }
}
</script>
