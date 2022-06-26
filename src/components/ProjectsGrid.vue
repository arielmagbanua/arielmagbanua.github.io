<template>
  <div>
    <br />
    <div class="row">
      <div class="col-xl-4 col-bg-4 col-md-6 col-sm-12" v-for="(project, idx) in visible_projects" :key="project.name">
        <Card :style="{ 'transition-delay': (idx % 3) / 4.2 + 's' }" :portfolio="project" @show="showModalFn"
          data-aos="fade-up" :nightMode="nightMode" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500"
          data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="true" />
      </div>
    </div>
    <div class="text-center py-3" v-if="showBtn !== 'show less'">
      <button v-if="projects.length > number" class="btn" @click.prevent="showMore">{{ showBtn }}</button>
    </div>
    <transition name="modal">
      <Modal :showModal="showModal" @close="closeModal" v-if="showModal" :portfolio="modal_info"
        :nightMode="nightMode" />
    </transition>
  </div>
</template>

<script>
import Card from "./helpers/Card";
import Modal from "./helpers/Modal";

export default {
  name: "ProjectsGrid",
  components: {
    Card,
    Modal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
    projects: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      visible_projects: [],
      showModal: false,
      modal_info: {},
      number: 3,
      showBtn: "show more",
      shower: 0,
    }
  },
  created() {
    for (var i = 0; i < this.number; i++) {
      if (this.projects[i]) {
        this.visible_projects.push(this.projects[i]);
      }
    }
  },
  watch: {
    number() {
      this.visible_projects = [];
      for (var i = 0; i < this.number; i++) {
        if (this.projects[i]) {
          this.visible_projects.push(this.projects[i]);
        }
      }
    },
  },
  methods: {
    closeModal() {
      this.showModal = false;
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
    },
    showMore() {
      if (this.number != this.projects.length) {
        this.number += 3;

        window.scrollBy({
          top: document.getElementsByClassName("smcard")[0].clientHeight,
          behavior: "smooth",
        });

        if (this.number > this.projects.length) {
          this.number = this.projects.length;
        }
      }

      if (this.number == this.projects.length && this.shower == 0) {
        this.shower = 1;
        this.showBtn = "show less";
      } else if (this.number == this.projects.length && this.shower == 1) {
        var elementPosition = document.getElementById("portfolio").offsetTop;
        window.scrollTo({ top: elementPosition + 5, behavior: "smooth" });
        this.shower = 0;
        this.number = 3;
        this.showBtn = "show more";
      }
    },
  }
}
</script>

<style scoped>
.btn {
  border-color: #8585ad;
  color: #8585ad;
}

.btn:hover {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

.btn:focus {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}
</style>
