import Vue from 'nativescript-vue';
import LottieView from '@nativescript-community/ui-lottie/vue';

import Home from './components/Home.vue';

Vue.use(LottieView);

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
