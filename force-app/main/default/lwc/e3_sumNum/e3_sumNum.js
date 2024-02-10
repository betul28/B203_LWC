import { LightningElement } from 'lwc';

export default class E3_sumNum extends LightningElement {


num1;
num2;

    number1(mnurk){

        this.num1 = Number(mnurk.target.value);

    }

    number2(alber){

        this.num2 = alber.target.value;

    }

    get sum(){

       return this.num1 + Number(this.num2);

    }


}