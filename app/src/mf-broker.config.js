import { RollCakeMFBroker } from "@rollcakejs/rollcake-spa";

const buckets = [];

export default new RollCakeMFBroker({
    buckets: buckets,
    state: {}
});