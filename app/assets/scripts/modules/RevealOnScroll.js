import $ from "jquery";
/*use viewpoint to handle scroll event*/
import Waypoints from "./../../../../node_modules/waypoints/lib/noframework.waypoints.js";
export default class RevealOnScroll{
  constructor(jquerySelectedElements, offset){
    this.itemsToReveal = jquerySelectedElements ; // $(".feature-item");
    this.offset = offset ; //    console.log("this.itemsToReveal=",this.itemsToReveal);
    this.hideInitially();
    this.useWaypointsForScrolling();
  }

  /*Initially hide the item to be revealed*/
  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
  }

  useWaypointsForScrolling(){
    var that = this;  /* this -> RevealOnScroll object */
    /*()=>{} does not work here, use function(){}*/
     this.itemsToReveal.each(function(){    //  var thisDomElement = this ;        // console.log(this);
      new Waypoint({
        element : this,//DomElement ,
        handler : ()=>{
          $(this)//$(thisDomElement) // .removeClass("reveal-item")
            .addClass("reveal-item--is-visible")
        },
        offset : that.offset
        });
      })
  }
}
// export default RevealOnScroll ;
