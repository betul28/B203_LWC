import { LightningElement } from 'lwc';

export default class CompLibrary extends LightningElement {


    value = ['option1'];

    get options() {
        return [
            { label: 'Ross', value: 'Ross' },
            { label: 'Rachel', value: 'Rachel' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    handleChange(e) {
        this.value = e.detail.value;
    }


    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }


}