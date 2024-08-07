<template>
  <div class="py-4 p-st" :class="{
    'bg-light': !nightMode,
    'bg-dark2': nightMode,
    'text-light': nightMode,
  }">
    <div class="container">
      <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span class="title text-center" :class="{ pgray: !nightMode, 'text-light': nightMode }">Portfolio.</span>
      </div>
      <hr width="50%" :class="{ pgray: !nightMode, 'bg-secondary': nightMode }" />

      <vue-tabs :activeTextColor="!nightMode ? '#535A5E' : '#dfdfdf'">
        <v-tab title="Projects">
          <ProjectsGrid :nightMode="nightMode" :projects="all_items"/>
        </v-tab>

        <v-tab title="Open Source">
          <ProjectsGrid :nightMode="nightMode" :projects="open_source_projects"/>
        </v-tab>
      </vue-tabs>
    </div>
    <transition name="modal">
      <Modal :showModal="showModal" @close="closeModal" v-if="showModal" :portfolio="modal_info"
        :nightMode="nightMode" />
    </transition>
    <transition name="modal">
      <DesignModal :showModal="showDesignModal" @close="closeModal" v-if="showDesignModal"
        :portfolio="design_modal_info" :nightMode="nightMode" />
    </transition>
  </div>
</template>

<script>
import Modal from "./helpers/Modal";
import DesignModal from "./helpers/DesignModal";
import info from "../../info";
import ProjectsGrid from "./ProjectsGrid";

import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

import "vueperslides/dist/vueperslides.css";

export default {
  name: "Portfolio",
  components: {
    Modal,
    VueTabs,
    VTab,
    DesignModal,
    ProjectsGrid,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      all_items: info.projects.work,
      open_source_projects: info.projects.open_source,
      projects_portfolio: [],
      showModal: false,
      showDesignModal: false,
      modal_info: {},
      design_modal_info: {},
      number: 3,
      showBtn: "show more",
      shower: 0,
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    };
  },
  created() {
    for (var i = 0; i < this.number; i++) {
      this.projects_portfolio.push(this.all_items[i]);
    }
  },
  watch: {
    number() {
      this.projects_portfolio = [];
      for (var i = 0; i < this.number; i++) {
        this.projects_portfolio.push(this.all_items[i]);
      }
    },
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    closeModal() {
      this.showModal = false;
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
    },
    showDesignModalFn(design_portfolio) {
      this.design_modal_info = design_portfolio;
      this.showDesignModal = true;
    },
    showMore() {
      if (this.number !== this.all_items.length) {
        this.number += 3;

        window.scrollBy({
          top: document.getElementsByClassName("smcard")[0].clientHeight,
          behavior: "smooth",
        });

        if (this.number > this.all_items.length)
          this.number = this.all_items.length;
      }

      if (this.number === this.all_items.length && this.shower === 0) {
        this.shower = 1;
        this.showBtn = "show less";
      } else if (this.number === this.all_items.length && this.shower === 1) {
        const elementPosition = document.getElementById("portfolio").offsetTop;
        window.scrollTo({ top: elementPosition + 5, behavior: "smooth" });
        this.shower = 0;
        this.number = 3;
        this.showBtn = "show more";
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

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

/deep/ .vue-tabs .nav-tabs {
  border: none;
  font-size: 20px;
  font-weight: 500;
  display: flex;

  justify-content: center;
}

/deep/ .vue-tabs .tabs__link {
  color: #a0a0a0;
}

/deep/ .vue-tabs .nav-tabs>li.active>a {
  background: transparent;
  border: none;
  transition: all 0.5s;
  padding-right: 0;
  padding-left: 0;
  margin-right: 15px;
  margin-left: 15px;
}

/deep/ .vue-tabs .nav-tabs>li>a:hover {
  background: transparent;
  color: #cbcbcb;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs>li>a {
  background: transparent;
  border: none;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs>li>a:after {
  content: "";
  width: 20%;
  position: absolute;
  bottom: 3px;
  border-width: 0 0 2px;
  border-style: solid;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs>li.active>a:after {
  width: 100%;
  transition: all 0.5s;
}

.design-img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;
}

.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.dimg:hover .design-img {
  position: relative;
  border-radius: 15px;
  opacity: 0.1;
  cursor: pointer;
}

.dimg:hover .middle {
  opacity: 1;
}

/deep/.vueperslide {
  border-radius: 10px !important;
}

/deep/.vueperslides__parallax-wrapper {
  border-radius: 10px !important;
}

.btn {
  border-color: #759CC9;
  color: #759CC9;
}

.btn:hover {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

/deep/ .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: grey;
}

.badge {
  background-color: #bbd4dd;
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75
}
</style>
