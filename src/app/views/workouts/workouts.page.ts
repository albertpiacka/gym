import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WorkoutModalPage } from '../../modal/workout-modal/workout-modal.page'
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {

  // Workouts
  workouts: any[] = [];

  // Exercises
  exercises: any[] = []

  constructor
  (
    public modalController: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('workouts').then(val => {
      val.forEach(w => {
        this.workouts.push(w)
        w.exercises.forEach(e => {
          this.exercises.push(e)
        })
      })
    })
  }

  async presentModal(workout, meta) {
    const modal = await this.modalController.create({
      component: WorkoutModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'data': workout,
        'meta': meta
      }
    });
    return await modal.present();
  }


  addToFavorites(workout){
    this.storage.get('favorites').then(val => {
      if(val.filter(w => w.id == workout.id).length == 1){
        workout.status = 'unliked'
        let all = val
        all = all.filter(w => w.id !== workout.id)
        this.storage.set('favorites', all)

        this.storage.get('workouts').then(val => {
          let all = val

          all = all.filter(w => w.id !== workout.id)

          all.push(workout)

          this.storage.set('workouts', all)
        })
      } else {
        workout.status = 'liked'
        let all = val
        all.push(workout)
        this.storage.set('favorites', all)

        this.storage.get('workouts').then(val => {
          let all = val

          all = all.filter(w => w.id !== workout.id)

          all.push(workout)

          this.storage.set('workouts', all)
        })
      }
    })
  }

  addToArchived(workout){
    this.storage.get('archived').then(val => {
      if(val.filter(w => w.id == workout.id).length == 0){
        workout.status = 'unliked'
        let all = val
        all.push(workout)

        this.storage.set('archived', all)

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

        this.workouts = this.workouts.filter(w => w.id !== workout.id)
      } 
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

        this.workouts = this.workouts.filter(w => w.id !== workout.id)
      } 
    })
  }

}
