import $ from "jquery";

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

const mobileMenu = new MobileMenu(),
    featureRevealOnScroll = new RevealOnScroll($(".feature-item"),"90%"),
    testimonialRevealOnScroll = new RevealOnScroll($(".testimonial"),"75%"),
    stickyHeader = new StickyHeader(),
    modal = new Modal();
