<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside :style="asideStyle">
        <div class="menu">
          <div class="menu-group" v-for="(itemx, index) in docMenus" :key="index">

            <span class="menu-group-title text-overflow">{{ index }}{{ index !== "文档" ? `（${itemx.length}）` : "" }}</span>
            <router-link v-for="(item, index) in itemx" class="menu-item text-overflow" :to="`/doc/${item.path}`">
       
              {{item.name }}</router-link>

          </div>

        </div>
      </aside>

      <div class="toggle-button" @click="toggleAside" :style="toggleAsidStyle">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </div>
      <main :style="mainStyle">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import {docMenus} from "@/router/doc-router.ts";

import Topnav from "@/components/Topnav.vue";
import { inject, type Ref, computed } from "vue";
const asideVisible = inject<Ref<boolean>>("asideVisible");
const clientWidth = inject<Ref<number>>("clientWidth");
const toggleAside = () => {
  asideVisible.value = !asideVisible.value;
};
const asideStyle = computed(() => {
  return { left: asideVisible.value ? "0px" : "-252px" };
});
const toggleAsidStyle = computed(() => {
  return {
    left: asideVisible.value ? "252px" : "0px",
    transform: asideVisible.value
      ? "rotate(180deg) translateX(50%)"
      : "rotate(0deg) translateX(50%)",
  };
});

const mainStyle = computed(() => {
  return clientWidth.value < 500
    ? { "padding-left": "24px" }
    : { "padding-left": asideVisible.value ? "302px" : "60px" };
});
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    display: flex;
    flex-grow: 1;
    position: absolute;
    top: 63px;
    left: 0px;
    height: calc(100% - 63px);
    width: 100%;
    transition: all 0.5 ease;
    z-index: 1;

    >aside {
      flex-shrink: 0;
      width: 252px;
      padding: 16px 0;
      height: 100%;
      background-color: rgb(249, 250, 251);
      border-right: 1px solid #efeff5;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      transition: all 250ms ease;
      overflow-y: auto;

      .menu,
      .menu-group {
        width: 100%;

      }

      .menu-group-title,
      .menu-item {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 1rem;

        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e5e7eb;

      }

      .menu-group-title {
        height: 36px;
        padding-left: 22px;
        font-size: 13px;
        overflow: hidden;
        color: rgba(156,163,175,0.5);
        font-weight: 600;

        &:hover {
          cursor: default;
        }
      }

      .menu-item {
        height: 40px;
        padding-left: 44px;
        color: rgb(51, 54, 57);
        font-size: 16px;
        border-left: 4px solid rgba(75, 85, 99,0.1);

        &:hover {
          color: rgb(243, 244, 246) !important;
          background-color: rgb(99, 102, 241);
          border-left: 4px solid rgb(75, 85, 99);
        }
      }

      .router-link-exact-active {
        color: rgb(243, 244, 246) !important;
        background-color: rgb(99, 102, 241);
        border-left: 4px solid rgb(75, 85, 99);
      }
    }

    >main {
      flex-grow: 1;
      box-sizing: border-box;
      padding: 32px 24px 100px 36px;
      transition: all 250ms ease;
      overflow: auto;
      background-color: rgba(243, 244, 246, 0.7);

      .preview-wrapper {
        width: 80%;

        @media (max-width: 500px) {
          width: 100%;
        }
      }
    }
  }
}

.toggle-button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgb(239, 239, 245);
  position: absolute;
  left: 252px;
  top: 240px;
  z-index: 11;
  background-color: #fff;
  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 6%);
  transition: left 250ms ease, transform 0.1s ease;

  >.icon {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 500px) {
    display: none;
  }
}
</style>