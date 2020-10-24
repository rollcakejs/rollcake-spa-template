import { RollCakeRouter } from "@rollcakejs/rollcake-spa";
import IndexPage from "./pages/IndexPage";

const routes = [
    {
        path: '/',
        item: IndexPage
    },
];

export default new RollCakeRouter({
    routes: routes
});