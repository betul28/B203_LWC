import { LightningElement } from 'lwc';

export default class E5_hideCheckbox extends LightningElement {


display = false;


changeDisplay(event){
this.display = event.target.checked;

}

}