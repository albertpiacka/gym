import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations' 
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
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
export class TrashPage implements OnInit {
  // Workouts
  workouts: any[] = [];

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('trash').then(val => {
      this.workouts = val
    })
  }

  reviveWorkout(workout){
    this.storage.get('trash').then(val => {
      let all = val
      all = all.filter(w => w.id !== workout.id)

      this.storage.set('trash', all)

      this.storage.get('workouts').then(val => {
        let all = val
  
        all.push(workout)
  
        this.storage.set('workouts', all)
  
        this.workouts = this.workouts.filter(w => w.id !== workout.id)
      })
    })
  }

  deletePermanently(workout){
    this.storage.get('trash').then(val => {
      let all = val

      all = all.filter(w => w.id !== workout.id)

      this.storage.set('trash', all)

      this.workouts = this.workouts.filter(w => w.id !== workout.id)
    })
  }

}
