import { LightningElement } from 'lwc';

export default class E2_FullUpperCase extends LightningElement {

isim = "hakan";
soyisim = "ersoy";

get fullUpper(){
    return this.isim.toUpperCase() + ' ' + this.soyisim.toUpperCase();
}


}