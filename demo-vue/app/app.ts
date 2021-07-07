import Vue from 'nativescript-vue';

import Home from './components/Home.vue';

// register LottieView component for the plugin
Vue.registerElement(
  'lottie-view',
  () => require('@nativescript-community/ui-lottie').LottieView
);

new Vue({
  template: `
        <Frame>
            <Home />
        </Frame>`,

  components: {
    Home
  }
}).$start();
