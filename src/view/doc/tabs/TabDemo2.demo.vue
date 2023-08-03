<demo>
    卡片风格
    </demo>
    <template>
  <Tabs v-model="selected" type="card">
    <Tab title="兰亭临帖">兰亭临帖</Tab>
    <Tab title="行书">行书</Tab>
    <Tab title="如">如</Tab>
    <Tab title="行云流水">行云流水</Tab>
  </Tabs>
</template>
    
<script setup lang="ts">
import Tabs from "@/lib/tabs/index.vue";
import Tab from "@/lib/tab/index.vue";
import { ref } from "vue";

const selected = ref("兰亭临帖");
</script>
    
    <style scoped></style>