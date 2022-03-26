import { eventBus } from '../services/event-bus-service.js';

export default {
    // template: `
    //     <section class="about-page app-main">
    //         <h3 ref="header">About us...</h3>
    //         <button @click="callBus">Call the bus!</button>
    //     </section>
    // `,
    template: `
    <section class="about-container app-main">  
        <div class="me-container">
            <div class="me-content">
                <img class="my-image" src="img/bonni.jpg" alt="">
                <div class="about-description">
                    <h2>Hello</h2>
                    <p>
                        My name is Bonni
                    </p>
                </div>
            </div>
        </div>
    </section>
    `,

    created() {
        console.log('Created');
    },
    methods: {
        callBus() {
            // eventBus.$emit('puk');
            // eventBus.$emit('puk2');
        }
    },
    mounted() {
        console.log('Mounted');
        console.log(this.$refs.header);
    }
};