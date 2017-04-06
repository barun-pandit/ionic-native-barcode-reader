import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {

	}
	
	scan(){
		this.barcodeScanner.scan().then((barcodeData) => {
		 // Success! Barcode data is here
		 alert(JSON.stringify(barcodeData));
		}, (err) => {
			// An error occurred
			alert(JSON.stringify(err));
		});
	}
}
