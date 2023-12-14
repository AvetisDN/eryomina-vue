import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import IosStarIcon from "vue-ionicons/dist/ios-star.vue";
import IosStarOutlineIcon from "vue-ionicons/dist/ios-star-outline.vue";
import IosStarHalfIcon from "vue-ionicons/dist/ios-star-half.vue";
import IosArrowForwardIcon from "vue-ionicons/dist/ios-arrow-forward.vue";
import IosArrowBackIcon from "vue-ionicons/dist/ios-arrow-back.vue";

const app = createApp(App);
app.component("IosStarIcon", IosStarIcon);
app.component("IosStarOutlineIcon", IosStarOutlineIcon);
app.component("IosStarHalfIcon", IosStarHalfIcon);
app.component("IosArrowForwardIcon", IosArrowForwardIcon);
app.component("IosArrowBackIcon", IosArrowBackIcon);
app.mount("#app");
