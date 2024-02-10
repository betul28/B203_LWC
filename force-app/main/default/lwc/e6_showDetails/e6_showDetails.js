import { LightningElement } from 'lwc';

export default class E6_showDetails extends LightningElement {

display = false;


changeDisplay(event){
this.display = event.target.checked;

}
}