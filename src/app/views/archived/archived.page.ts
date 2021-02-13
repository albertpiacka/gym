import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations' 
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-archived',
  templateUrl: './archived.page.html',
  styleUrls: ['./archived.page.scss'],
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
export class ArchivedPage implements OnInit {

  // Workouts
  workouts: any[] = [];

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('archived').then(val => {
      this.workouts = val
    })
  }

  revive(workout){
    this.storage.get('archived').then(val => {
      let all = val
      all = all.filter(w => w.id !== workout.id)

      this.storage.set('archived', all)

      this.storage.get('workouts').then(val => {
        let all = val

        all.push(workout)

        this.storage.set('workouts', all)

        this.workouts = this.workouts.filter(w => w.id !== workout.id)
      })
    })
  }

  addToTrash(workout){
   this.storage.get('trash').then(val => {
      if(val.filter(w => w.id == workout.id).length == 0){
        workout.status = 'unliked'
        let all = val
        all.push(workout)

        this.storage.set('trash', all)

        this.storage.get('workouts').then(val => {
          let all = val

          all = all.filter(w => w.id !== workout.id)

          this.storage.set('workouts', all)
        })

        this.storage.get('favorites').then(val => {
          let all = val

          all = all.filter(w => w.id !== workout.id)

          this.storage.set('favorites', all)
        })

        this.storage.get('archived').then(val => {
          let all = val

          all = all.filter(w => w.id !== workout.id)

          this.storage.set('archived', all)
        })

        this.workouts = this.workouts.filter(w => w.id !== workout.id)
      } 
    })
  }

}
