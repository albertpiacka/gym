import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  // Workouts
  workouts: any[] = [];
 
  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('history').then(val => {
      this.workouts = val
    })
  }

}
