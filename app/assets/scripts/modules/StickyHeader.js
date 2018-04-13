import $ from "jquery";
import $smoothScroll from "jquery-smooth-scroll";
/*use viewpoint to handle scroll event*/
import Waypoints from "./../../../../node_modules/waypoints/lib/noframework.waypoints.js";

export default class StickyHeader{
  constructor(){
    this.siteHeader = $(".site-header"); // .x class x in css

    /* create a jquery selected object
       this object have array-like elements
       and its first element is native dom element */
    this.headerTriggerElement = $(".large-hero__title");

    /*create a pageSection collector to collect
    any element has page-section class */
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");

    /*run the method*/
    this.useSmoothScroll();
    this.useWaypointsForFixHeader();
    this.useWayPointsForPageSection();

  }

  useSmoothScroll(){
    this.headerLinks.smoothScroll();
  }
  useWaypointsForFixHeader(){
    var that = this;  /* this -> RevealOnScroll object */
    const str = "site-header--darker" ;
    new Waypoint({
      element : this.headerTriggerElement[0],//need a native Dom Element ,
      handler : (upOrDown)=>{
          if(upOrDown == "down")
            that.siteHeader.addClass(str);
          else
            that.siteHeader.removeClass(str);
        }
      //,  offset : that.offset
      });
    }

  useWayPointsForPageSection(){
    var that = this;
    this.pageSections.each(function(){
      new Waypoint({
        element : this,//DomElement ,
        handler : (direction)=>{
          if(direction =="down"){
            let matchedLink = this.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchedLink).addClass("is-current-link");
          }
        },
        offset : "25%"
      });
      new Waypoint({
        element : this,//DomElement ,
        handler : (direction)=>{
          if (direction == "up"){
            let matchedLink = this.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchedLink).addClass("is-current-link");
          }
        },
        offset : "20%"
      });
    });
  }


  /*
   this.headerTriggerElement.each(function(){    //  var thisDomElement = this ;        // console.log(this);
    new Waypoint({
      element : this,//DomElement ,
      handler : ()=> that.siteHeader.addClass("site-header--darker")
      });
    }) */


}
