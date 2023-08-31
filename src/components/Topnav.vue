<template>
  <div class="topnav">
    <svg class="icon toggle-aside" aria-hidden="true" v-if="toggleMenuButton" @click="toggleAside">
      <use xlink:href="#icon-list"></use>
    </svg>
    <div class="logo" @click="getHome">
      <span>Aurora UI</span>
    </div>
    <languageSwitch/>
    <div class="menu">
      <router-link exact to="/home">
        <div class="menu-link hid" >

          {{ $t('Home') }}
        </div>
      </router-link>
      <router-link to="/doc">
        <div class="menu-link hid">

          {{ $t('Doc') }}
        </div>
      </router-link>
      <a>
        <div class="menu-link">
          <ry-icon :size="25" style="margin-top: 22px;">
            <LogoGithub />
          </ry-icon>
        </div>
      </a>
      <span>0.0.10</span>
    </div>
  </div>
</template>
<script setup lang="ts">

import { LogoGithub } from "@vicons/ionicons5";
import { type Ref, inject } from "vue";
import { useRouter } from "vue-router";
import languageSwitch from './languageSwitch.vue';

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
  overflow: hidden;
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
      width: 40px;
      height: 40px;
    }

    span {
      margin-left: 10px;
      // color: #6366F1;
      cursor: pointer;
      font-size: 18px;
      line-height: 18px;
      height: 18px;
      font-weight: 700;
    }

    &:hover {
      border-bottom: none;
    }
  }


  .menu {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
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
      font-size: 18px;
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

 
    

    >.toggle-aside {
      display: inline-block;
    }
  }
}</style>