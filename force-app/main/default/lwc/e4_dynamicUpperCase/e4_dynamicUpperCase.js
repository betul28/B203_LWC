import { LightningElement } from 'lwc';

export default class E4_dynamicUpperCase extends LightningElement {


    firstName;
    lastName;

    isim(fatma){
        this.firstName =  fatma.target.value;
    }

    soyisim(hakan){

        this.lastName = hakan.target.value;

    }

    get fullUpperName(){

        //return this.firstName.toUpperCase() + ' ' + this.lastName.toUpperCase();
        return (this.firstName + ' ' + this.lastName).toUpperCase();

    }


}