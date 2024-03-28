import type { App, Component } from "vue";
const components: { [name: string]: Component } = {};
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
