import Card from "../components/Card.vue";
import Player from "../components/Player.vue"
import Router from "vue-router";
import Vue from "vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'card',
            component: Card
        },
        {
            path: '/m3u8Online',
            name: 'm3u8Online',
            component: Player
        }
    ]
})