import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WorkoutModalPage } from '../../modal/workout-modal/workout-modal.page'
import { LocalstorageDbService } from '../../services/localstorage-db.service'

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  // Database variable
  db: any = '';

  // Workouts
  workouts: any[] = [];

  // Exercises
  exercises: any[] = []

  constructor(private localStorageDbService: LocalstorageDbService, public modalController: ModalController) { }

  ngOnInit() {
    this.db = this.localStorageDbService.returnDb()
    this.workouts = this.db.get('workouts').value()

    this.workouts.forEach(workout => {
      workout.exercises.forEach(e => {
        this.exercises.push(e)
      })
    })

    this.exercises = this.exercises.reduce((acc, current) => {
      const x = acc.find(item => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
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
    if
    (
      !this.db.get('favorites')
              .find({id: workout.id})
              .value()
    )
    {
      this.db.get('workouts')
             .find({id: workout.id})
             .assign({status: 'liked'})
             .write()

      this.db.get('favorites')
              .push(workout)
              .write()
    }
    else 
    {
      this.db.get('workouts')
             .find({id: workout.id})
             .assign({status: 'unliked'})
             .write()

      this.db.get('favorites')
             .remove({id: workout.id})
             .write()
    }   
  }

  addToArchived(workout){
    if
    (
      !this.db.get('archived')
              .find({id: workout.id})
              .value()
    )
    {
      this.db.get('workouts')
             .remove({id: workout.id})
             .write()

      this.db.get('favorites')
             .remove({id: workout.id})
             .write()

      this.db.get('archived')
              .push(workout)
              .write()

      this.db.get('archived')
              .find({id: workout.id})
              .assign({status: 'unliked'})
              .write()
    }
    else 
    {
      this.db.get('workouts')
             .push(workout)
             .write()

      this.db.get('favorites')
             .remove({id: workout.id})
             .write()
    }   
  }

  addToTrash(workout){
    if
    (
      !this.db.get('trash')
              .find({id: workout.id})
              .value()
    )
    {
      this.db.get('workouts')
             .remove({id: workout.id})
             .write()

      this.db.get('archived')
             .remove({id: workout.id})
             .write()

      this.db.get('favorites')
             .remove({id: workout.id})
             .write()

      this.db.get('trash')
              .push(workout)
              .write()

      this.db.get('trash')
              .find({id: workout.id})
              .assign({status: 'unliked'})
              .write()
    }
  }

}
