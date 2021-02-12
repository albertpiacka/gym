import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
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
    let id = 0

    this.storage.get('workouts').then(val => {
      id += val.length + 1
    }).then(() => {
      this.storage.get('favorites').then(val => {
        id += val.length + 1
      })
    }).then(() => {
      this.storage.get('archived').then(val => {
        id += val.length + 1
      })

      workout.id = id

      this.storage.get('trash').then(val => {
        let all = val
        all = all.filter(w => w.id !== workout.id)
  
        this.storage.set('trash', all)
      })

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
