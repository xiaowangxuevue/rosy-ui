<preview>
    尺寸
    </preview>
    <template>
  <ry-switch v-model="checked" size="small" />
  <ry-switch v-model="checked" size="default" />
  <ry-switch v-model="checked" size="large" />
</template>
    
    <script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>