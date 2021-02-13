import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WorkoutModalPage } from '../../modal/workout-modal/workout-modal.page'
import { trigger, state, style, animate, transition } from '@angular/animations' 
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
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
export class FavoritesPage implements OnInit {

  // Favorites workouts
  workouts: any[] = [];

  constructor(
    public modalController: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('favorites').then(val => {
      this.workouts = val
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

  removeFromFavorites(workout){
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

        this.workouts = this.workouts.filter(w => w.id !== workout.id)
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
