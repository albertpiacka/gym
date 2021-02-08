import { Component, OnInit } from '@angular/core';
import { LocalstorageDbService } from 'src/app/services/localstorage-db.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.page.html',
  styleUrls: ['./trash.page.scss'],
})
export class TrashPage implements OnInit {

  // Database variable
  db: any = '';

  // Workouts
  workouts: any[] = [];

  constructor(private localStorageDbService: LocalstorageDbService) { }

  ngOnInit() {
    this.db = this.localStorageDbService.returnDb()
    this.workouts = this.db.get('trash').value()
  }

  reviveWorkout(workout){
    this.db.get('trash')
           .remove({id: workout.id})
           .write()

    this.db.get('workouts')
           .push(workout)
           .write()
  }

  deletePermanently(workout){
    this.db.get('trash')
           .remove({id: workout.id})
           .write()
  }

}
