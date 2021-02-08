import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-workout-modal',
  templateUrl: './workout-modal.page.html',
  styleUrls: ['./workout-modal.page.scss'],
})
export class WorkoutModalPage implements OnInit {

  @Input() data: any;
  @Input() meta: string;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
