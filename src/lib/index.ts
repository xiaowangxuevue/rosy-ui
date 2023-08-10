import { App } from "vue";
import Ellipsis from "./ellipsis/index.vue";
import RySwitch from "./switch/index.vue";
import RyButton from "./button/index.vue";
import RyTabs from "./tabs/index.vue";
import RyTab from "./tab/index.vue";
import RyDialog from "./dialog/index.vue";
import Avatar from "./avatar/index.vue";
import Icon from "./icon/index.vue";
import Link from "./link/index.vue"
import { openDialog } from "./dialog/openDialog";

export { RySwitch, Icon,Ellipsis, Avatar, RyButton, RyTabs, RyTab, RyDialog, openDialog };

const components = [RyButton, Icon, Link, Ellipsis, Avatar, RySwitch, RyTabs, RyTab, RyDialog];

export function registerRyUi(app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}

export default registerRyUi;