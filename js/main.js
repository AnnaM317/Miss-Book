// import bookApp from './pages/book-app.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';
import appHeader from './cmps/app-header.cmp.js';
import appFooter from './cmps/app-footer.cmp.js';
import { router } from './routes.js';

const options = {
    el: '#app',
    router,
    template: `
        <section>
            <user-msg />
            <app-header />
            <router-view />
            <!-- <book-app /> -->
            <app-footer />
        </section>
    `,
    components: {
        // bookApp,
        appHeader,
        appFooter,
        userMsg
    }
};

new Vue(options);

