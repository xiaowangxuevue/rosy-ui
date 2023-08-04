<preview>
    卡片风格
    </preview>
    <template>
  <ry-tabs v-model="selected" type="card">
    <ry-tab title="兰亭临帖">兰亭临帖</ry-tab>
    <ry-tab title="行书">行书</ry-tab>
    <ry-tab title="如">如</ry-tab>
    <ry-tab title="行云流水">行云流水</ry-tab>
  </ry-tabs>
</template>
    
<script setup lang="ts">
import { ref } from "vue";

const selected = ref("兰亭临帖");
</script>
    
    <style scoped></style>