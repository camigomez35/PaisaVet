import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  testCheckboxOpen: boolean;
  testCheckboxResult;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }


    donar() {
      let alert = this.alertCtrl.create();
      alert.setTitle('¿Cuánto dinero deseas donar?');

      alert.addInput({
        type: 'radio',
        label: '5$',
        value: 'value2',
        checked: true
      });

      alert.addInput({
        type: 'radio',
        label: '10$',
        value: 'value3'
      });

      alert.addInput({
        type: 'radio',
        label: '15$',
        value: 'value4'
      });

      alert.addInput({
        type: 'radio',
        label: '20$',
        value: 'value5'
      });

      alert.addButton('Cancel');
      alert.addButton({
        text: 'Donar',
        handler: data => {
          console.log('Checkbox data:', data);
          this.testCheckboxOpen = false;
          this.testCheckboxResult = data;
        }
      });
      alert.present().then(() => {
        this.testCheckboxOpen = true;
      });
    }

}
