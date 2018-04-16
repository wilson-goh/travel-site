import $ from 'jquery';

// export
class MobileMenu{
  /*menuIcon = null;
  menuContent = null ; */
  constructor(){
    // properties
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");

    // apply methods
    this.actions();
  }

  /*create the method*/
  actions(){
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }
  /*
  this keyword called by click event, therefore it is not correspond to origin object
  this belong to click event object , it is dom object where the event fires ..
  in order to point back to begin object  need to bind it using bind method
  */
  toggleTheMenu(){
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close");
  }
/*
  toggleTheMenu(){
    alert("toggleTheMenu");
  }*/

}
export default MobileMenu ;
/*
right way to organise code

*/
