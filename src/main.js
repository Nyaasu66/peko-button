import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n'
import zhHans from './assets/lang/zhHans'
import en from './assets/lang/en'
import ja from './assets/lang/ja'


Vue.config.productionTip = false
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'zhHans',
    messages: {
        'zhHans': zhHans,
        'en': en,
        'ja': ja
    }
});
new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app')