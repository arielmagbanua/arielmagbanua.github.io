<template>
  <div class="container mx-auto px-4 profile">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
    >
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
            <div class="relative">
              <img
                alt="..."
                src="../assets/img/pic.jpg"
                class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                style="max-width: 150px;"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
          <div class="w-full lg:w-4/12 px-4 lg:order-1"></div>
        </div>
        <div class="text-center mt-24">
          <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">Ariel Magbanua</h3>
          <div class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
            <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>
            Davao City, Philippines
          </div>
          <div class="mb-2 text-gray-700 mt-10">
            <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
            Software Engineer - Research and Development - Zeald
          </div>
        </div>
        <div class="mt-10 py-10 border-t border-b border-gray-300 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-9/12 px-4">
              <p class="mb-4 text-lg leading-relaxed text-gray-800">
                I am a passionate software engineer who enjoys coding and building applications.
                I build applications for both web and mobile and currently exploring machine learning and AI.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap flex-col justify-center xl:px-40 lg:px-40 px-2">
            <work-experience-card
              title="Software Engineer"
              employer="Zeald"
              employmentType="Full-time"
              description="Currently working as a software engineer in the Research and Development Department. Our department focuses on research and development of our current or upcoming systems, products, and tools."
              from="January 2019"
              to="Present"
              imageUrl="/img/zeald_logo.png"
              shadow="shadow-lg"
            />
            <work-experience-card
              title="Software Engineer"
              employer="IdeaHub IT Solutions Provider, Inc."
              employmentType="Full-time"
              description="Deployed as an android developer for a US client for three years and worked on various web applications for a lead generation client, using mostly Laravel framework."
              from="September 2012"
              to="January 2019"
              imageUrl="/img/ideahub_logo.png"
            />
            <work-experience-card
              title="IT Instructor"
              employer="STI College of Davao"
              description="Teaching Mobile Applications Development (Android) and Data Structures and Algorithms."
              from="June 2018"
              to="November 2018"
              imageUrl="/img/sti_logo.png"
            />
            <a href="https://www.linkedin.com/in/arielmagbanua/" class="mt-2 font-normal text-pink-500">Show more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkExperienceCard from '../components/WorkExperienceCard'

export default {
  components: {
    WorkExperienceCard
  }
}
</script>
