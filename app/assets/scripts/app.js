import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import $ from "jquery";

const mobileMenu = new MobileMenu(),
    featureRevealOnScroll = new RevealOnScroll($(".feature-item"),"90%"),
    testimonialRevealOnScroll = new RevealOnScroll($(".testimonial"),"75%") ;
const stickyHeader = new StickyHeader();
