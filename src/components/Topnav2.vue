<template>
    <div class="topnav">
      <svg class="icon toggle-aside" aria-hidden="true" v-if="toggleMenuButton" @click="toggleAside">
        <use xlink:href="#icon-list"></use>
      </svg>
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
    top: 0;
    right: 0;
    width: 70%;
    z-index: 10;
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