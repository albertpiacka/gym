import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations' 
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  animations: [ 
    trigger('scaleIn', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.75)'
        }),

        animate('0.2s ease')
      ]),

      transition(':leave', [
        animate(
          '0.2s ease', 
          style({
            opacity: 0,
            transform: 'scale(0.75)'
          })
        )
      ])
    ]),
  ]
})
export class HistoryPage implements OnInit {

  // Workouts
  workouts: any[] = [];
 
  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('history').then(val => {
      val.forEach(w => {
        this.workouts.unshift(w)
      })
    })
  }

}
