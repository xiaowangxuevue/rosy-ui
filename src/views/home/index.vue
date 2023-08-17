
<template>
  <div class="topnavAndBanner">
    <Topnav :toggleMenuButton="false" />
    <div class="banner">
      <h1>Aurora UI</h1>
      <p>A Vue 3 UI Framework</p>
      <div class="actions">
        <ry-button @click="linkTo('github')">GitHub</ry-button>
        <ry-button @click="linkTo('getStart')" theme="primary">快速使用</ry-button>
      </div>
    </div>
  </div>

  <div class="features">
    <ul>
      <li>
        <h3>Vue 3 & Vite based</h3>
        <p>Seriously... Should we really introduce you to the Vue.js world ?</p>
      </li>
      <li>
        <h3>Vue 3 & Vite based</h3>
        <p>Seriously... Should we really introduce you to the Vue.js world ?</p>
      </li>
      <li>
        <h3>Vue 3 & Vite based</h3>
        <p>Seriously... Should we really introduce you to the Vue.js world ?</p>
      </li>
      <li>
        <h3>Customization</h3>
        <p>Customize easily with CSS vars, typed config, and even customizable components prefix !</p>
      </li>
      <li>
        <h3>Customization</h3>
        <p>Customize easily with CSS vars, typed config, and even customizable components prefix !</p>
      </li>
      <li>
        <h3>Simplicity</h3>
        <p>Orion aims at being as simple as possible, but still provides rich features out-of-the-box.</p>
      </li>
    </ul>
  </div>
</template>
<script setup>
import Topnav from "@/components/Topnav.vue";
import { useRouter } from "vue-router";

const router = useRouter();


const linkTo = (params) => {
  if (params === "github") {
    alert("正在开发hhhhh!");
  } else if (params === "getStart") {
    router.push({
      path: "/doc",
    });
  }
};
</script>
<style lang="scss" scoped>
// .topnavAndBanner {
//   /* background: linear-gradient(
//     145deg,
//     rgba(227, 255, 253, 1) 0%,
//     rgba(183, 233, 230, 1) 100%
//   ); */
//   /* clip-path: ellipse(80% 60% at 50% 40%); */
// }
.banner {
  padding: 170px 0 0;

  @media (max-width: 500px) {
    padding: 120px 0 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: rgb(44, 62, 80);
    font-size: 80px;
    line-height: 80px;
    font-weight: 500;
    margin-bottom: 18px;
    font-family: Metropolis, sans-serif;
    text-size-adjust: 100%;
    position: relative;

    &:hover::before {
      content: " ";
      position: absolute;
      top: 10px;
      left: 3rem;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgb(44, 62, 80);
    }

    &:hover::after {
      content: " ";
      position: absolute;
      top: 10px;
      left: 5.4rem;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: rgb(44, 62, 80);
    }
  }

  p {
    color: #6366F1;
    font-size: 16px;
    height: 25px;
    line-height: 25px;
    margin-bottom: 5px;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  >.actions {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .rosy-button {
      height: 40px;
      padding: 0 18px;
    }

    .rosy-button:last-of-type {
      margin-left: 20px;
      background-color: #6366F1;
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;
  border-top: 1px solid #6366F1;
  padding-top: 20px;
  min-width: 400px;

  @media (min-width: 800px) {
    width: 800px;
  }

  /* background-color: pink; */
  @media (min-width: 1200px) {
    width: 1200px;
  }

  >ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;

    >li {
      width: 365px;
      margin: 16px auto;
      display: flex;
      flex-direction: column;
      padding: 30px 20px;
      justify-content: start;
      align-content: space-between;

      background-color: rgb(246, 247, 249);



      >h3 {

        font-size: 1.25rem;
        font-weight: 700;
        margin: 8px;
        margin-left: 25px;
        color: #6366F1;
      }

      >p {
        margin-top: 15px;
        margin-left: 25px;
        font-size: 14px;
        color: rgb(56, 61, 71);
        font-weight: 400;
      }
    }
  }
}
</style>