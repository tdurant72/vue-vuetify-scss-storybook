import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1674d0',
                secondary: '#fa11b8',
            },
        },
    },
})

export default vuetify
