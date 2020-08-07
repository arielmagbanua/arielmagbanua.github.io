<template>
  <div class="container mx-auto px-4 profile">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
    >
      <div class="px-6">
        <div class="mt-10 py-10 text-center">
          <div class="flex flex-wrap flex-row justify-center">
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

export default {
  data () {
    return {
      projects: [
        {
          title: 'Personal Page',
          description: 'My personal profile page which details my current work and experience as well as my projects',
          cover: 'https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80',
          url: 'https://arielmagbanua.com/',
          technologies: [
            'html5', 'css3', 'js', 'vuejs', 'firestore', 'firebase functions'
          ]
        },
        {
          title: 'Ariel and Phebe Wedding',
          description: 'The official wedding page of Ariel and Phebe. It has submit rsvp feature and map to where the wedding and reception will take place.',
          cover: 'https://arielandphebe.com/img/hero/hero4.jpg',
          url: 'https://arielandphebe.com/',
          technologies: [
            'html5', 'css3', 'js', 'vuejs', 'node-js', 'firestore', 'firebase functions', 'twitter api', 'google cloud vision'
          ]
        },
        {
          title: 'Para Po!',
          description: 'It allows the user to find jeepney that passes to his/her desired origin and destination locations. It does compute estimated fare for each possible jeepney for those who are not familiar with the usual fare of Davao City jeepneys.',
          technologies: [
            'android', 'java', 'google-play', 'fcm', 'google maps', 'places api'
          ]
        },
        {
          title: 'Para Po! (Web)',
          description: 'The web app allows the user to search and view all available Jeepney routes in Davao City. The web application also serves as administrator and data source of the partner android application which is Para Po!',
          technologies: [
            'laravel', 'php', 'html5', 'css3', 'mysql', 'google maps'
          ]
        },
        {
          title: 'Lead Reactor',
          description: 'Web application for managing the Engage Logic IQ publishers, advertisers, survey campaigns, and collection of leads.',
          url: 'http://leadreactor.engageiq.com/',
          technologies: [
            'laravel', 'php', 'html5', 'css3', 'js', 'mysql'
          ]
        }
      ]
    }
  },
  components: {
    ProjectCard
  }
}
</script>
