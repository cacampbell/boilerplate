import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../ui/views/Home.tsx";

interface Position {
    x: number;
    y: number;
}

type PositionResult = Position | { selector: string; offset?: Position } | void;

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    }
]

const router = new VueRouter({
    mode: "hash",
    base: "/",
    routes,
    scrollBehavior(_, __, savedPosition): PositionResult {
        if (savedPosition != null) {
            return savedPosition;
        }

        return {
            x: 0,
            y: 0
        }
    }
});

export default router;