# 快速使用

请先[安装](#/doc/install)本组件库。

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```javascript
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import RyUi from "zrosy-ui";
import "zrosy-ui/dist/lib/zrosy-ui.css";

const app = createApp(App);

app.use(RyUi);
app.mount("#app");
```

### 按需引入

```javascript
import { RyButton } from "zrosy-ui";
import "zrosy-ui/dist/lib/zrosy-ui.css";
```

完成引入就可以使用我提供的组件啦。

#### Vue 单文件组件

代码示例：

```html
<template>
  <div>
    <ry-button>按钮</ry-button>
  </div>
</template>
```

下一节：[Avatar](#/doc/avatar)