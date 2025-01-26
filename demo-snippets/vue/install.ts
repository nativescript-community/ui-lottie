import Vue from 'nativescript-vue';
import Basic from './Basic.vue';
import LottieView from '@nativescript-community/ui-lottie/vue';

export function installPlugin() {
    Vue.use(LottieView);

}

export const demos = [{ name: 'Basic', path: 'basic', component: Basic }];
