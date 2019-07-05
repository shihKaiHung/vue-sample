declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  import {VueRouter} from "vue-router/types/router";

  interface Vue {
    $router: VueRouter;
    $message: () => void;
    $refs: {
      [key: string]: HTMLInputElement;
    };
    $emit: (event: string, ...args) => void;
  }
}
