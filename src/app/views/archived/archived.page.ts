import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WorkoutModalPage } from '../../modal/workout-modal/workout-modal.page'
import { LocalstorageDbService } from '../../services/localstorage-db.service'

@Component({
  selector: 'app-archived',
  templateUrl: './archived.page.html',
  styleUrls: ['./archived.page.scss'],
})
export class ArchivedPage implements OnInit {

  // Database variable
  db: any = '';

  // Workouts
  workouts: any[] = [];

  constructor(private localStorageDbService: LocalstorageDbService, public modalController: ModalController) { }

  ngOnInit() {
    this.db = this.localStorageDbService.returnDb()
    this.workouts = this.db.get('archived').value()
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
             .push(workout)
             .write()

      this.db.get('workouts')
             .find({id: workout.id})
             .assign({status: 'liked'})
             .write()

      this.db.get('archived')
             .remove({id: workout.id})
             .write()

      this.db.get('favorites')
              .push(workout)
              .write()

      this.db.get('favorites')
              .find({id: workout.id})
              .assign({status: 'liked'})
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
    }
    else 
    {
      this.db.get('workouts')
             .push(workout)
             .write()

      this.db.get('archived')
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
    }
  }

}
