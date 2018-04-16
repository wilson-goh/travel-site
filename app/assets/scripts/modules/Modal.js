import $ from "jquery";

export default
class Modal{
  constructor(){
    /* modal attributes*/
    this.document = $(document);
    this.openModals = $(".open-modal");
    this.closeModals = $(".modal__close")
    this.modal = $(".modal");

    /*init the events*/
    this.actions();
  }

  actions(){
    //click the open modal button
    // inside "this" is reset to bind to the click object, therefore
    // it needs to use bind(this)
    // to set this back to  the openModal
    this.openModals.click(this.openModal.bind(this));
    //click the close modal button
    this.closeModals.click(this.closeModal.bind(this));
    // press the esc key
    this.document.keyup(this.keyPressHandle.bind(this));

  }

  /* modal methods*/
  openModal(){
    // make the modal block visible by adding modal visible css class
    // .bind(this) to handle the right element
    this.modal.addClass("modal--is-visible");
    return false ;
    // treturn false will prevent the click bubble up.
    // prevent the default behavior to happen,
    // therefore it will not scrolling to the top.
  }
  closeModal(){
    this.modal.removeClass("modal--is-visible");
  }
  keyPressHandle(evt){
    if(evt.keyCode == 27)
      this.closeModal();
  }

}
