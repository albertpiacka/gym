import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-intro-modal',
  templateUrl: './intro-modal.page.html',
  styleUrls: ['./intro-modal.page.scss'],
})
export class IntroModalPage implements OnInit {

  name: string = ''

  constructor(
    public modalController: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  done(){
    this.storage.set('name', this.name).then(() => {
      this.dismiss()
    })
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
