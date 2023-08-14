<template>
  <div class="topnav">
    <svg class="icon toggle-aside" aria-hidden="true" v-if="toggleMenuButton" @click="toggleAside">
      <use xlink:href="#icon-list"></use>
    </svg>
    <div class="logo" @click="getHome">
      <!-- <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-leaf"></use>
      </svg> -->
      <!-- <span>rosy UI</span> -->
      <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
   
      <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
      <svg width="800px" height="800px" viewBox="0 0 300 300" id="footstep" version="1.1" xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

        <g>

          <path
            d="   M70,222c0,24.3,19.7,44,44,44c17.748,0,23.996-11.874,40-11.874S176.252,266,194,266c24.3,0,44-19.7,44-44   c0-20.156-13.552-37.146-32.044-42.356C205.984,179.099,206,178.55,206,178c0-24.3-19.772-44-52-44s-52,19.7-52,44   c0,0.55,0.016,1.099,0.044,1.644C83.552,184.854,70,201.844,70,222z"
            style="fill-rule:evenodd;clip-rule:evenodd;fill:#FBAD4A;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" />

          <path
            d="   M129.777,113.978c25.827-11.579,22.258-26.188,14.647-44.627c-7.611-18.439-27.727-32.036-43.425-25.828   c-9.757,3.859-12.296,10.849-13.428,22.748c-1.132,11.899-2.882,18.583,0,25.561C95.182,110.271,103.955,125.556,129.777,113.978z"
            style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFDD95;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" />

          <path
            d="   M182.222,113.978c-25.827-11.579-22.258-26.188-14.647-44.627c7.612-18.439,27.728-32.036,43.425-25.828   c9.757,3.859,12.296,10.849,13.428,22.748c1.132,11.899,2.882,18.583,0,25.561C216.817,110.271,208.045,125.556,182.222,113.978z"
            style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFDD95;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" />

          <ellipse cx="68" cy="140" rx="24.466" ry="34.657"
            style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFDD95;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -79.076 89.0817)" />

          <path
            d="   M214.683,164.035c8.889,9.54,27.425,7.409,41.407-4.76c13.983-12.17,18.111-29.769,9.226-39.309   c-8.885-9.54-27.425-7.409-41.407,4.761C209.93,136.895,205.798,154.494,214.683,164.035z"
            style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFDD95;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" />

        </g>

        <g />

        <g />

        <g />

        <g />

        <g />

        <g />

        <g />

        <g />

        <g />

        <g />

        <g />

        <g />

        <g />

        <g />

        <g />

      </svg>
       <span>Rycss UI</span>
    </div>
    <div class="menu">
      <router-link exact to="/home">首页</router-link>
      <router-link to="/doc">文档</router-link>
      <a href="" target="_blank">GitHub</a>
      <span>0.0.9</span>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { CssFilled } from "@vicons/all";
import { type Ref, inject } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  toggleMenuButton: {
    type: Boolean,
    default: true,
  },
});

const getHome = () => {
  router.push({
    path: "/",
  });
};

const asideVisible = inject<Ref<boolean>>("asideVisible");
const toggleAside = () => {
  if (asideVisible !== undefined) {
    asideVisible.value = !asideVisible.value;
  }
};
</script>


<style lang="scss">
.topnav {
  height: 63px;
  background-color: #ffffff;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 4px rgba(79, 70, 229);
  position: fixed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  .logo {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    >svg {
      width: 50px;
      height: 50px;
    }

    span {
      margin-left: 20px;
      color:  #6366F1;
      cursor: pointer;
      font-size: 22px;
      line-height: 28px;
      height: 28px;
      font-weight: 700;
    }

    &:hover {
      border-bottom: none;
    }
  }

  .menu {
    a {
      display: inline-block;
      text-decoration: none;
      padding: 0 20px;
      height: 63px;
      font-weight: 700;
      line-height: 63px;

      &:hover,
      &:active {
        color: #6366F1;
      }
    }

    .router-link-active {
      color: #6366F1;
      border-bottom: 1px solid;
    }

    span {
      color: rgb(51, 54, 57);
      font-size: 14px;
    }
  }

  .toggle-aside {
    width: 24px;
    height: 24px;
    cursor: pointer;
    display: none;
  }

  @media (max-width: 500px) {
    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }

    >.toggle-aside {
      display: inline-block;
    }
  }
}</style>