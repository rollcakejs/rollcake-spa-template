import "regenerator-runtime/runtime";
import { RollCakeSpa } from "@rollcakejs/rollcake-spa";
import Router from "./router.config";
import MFBroker from "./mf-broker.config";

new RollCakeSpa(MFBroker, Router, document.getElementById("root"));