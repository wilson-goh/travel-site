import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";

var mobileMenu = new MobileMenu() ;
var featureRevealOnScroll = new RevealOnScroll($(".feature-item"),"85%") ;
var testimonialRevealOnScroll = new RevealOnScroll($(".testimonial"),"70%") ;
