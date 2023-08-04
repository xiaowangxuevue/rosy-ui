import { App } from "vue";

import RySwitch from "./switch/index.vue";
import RyButton from "./button/index.vue";
import RyTabs from "./tabs/index.vue";
import RyTab from "./tab/index.vue";
import RyDialog from "./dialog/index.vue";
import { openDialog } from "./dialog/openDialog";

export { RySwitch, RyButton, RyTabs, RyTab, RyDialog, openDialog };

const components = [RyButton, RySwitch, RyTabs, RyTab, RyDialog];

export function registerRyUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerRyUi;