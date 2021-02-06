import { Component, OnInit } from '@angular/core';
import { LocalstorageDbService } from '../../services/localstorage-db.service'

interface Exercise {
  id: number,
  name: string,
  sets: number,
  reps: number,
}

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.page.html',
  styleUrls: ['./new-workout.page.scss'],
})
export class NewWorkoutPage implements OnInit {
  // Input data
  name: any = '';
  sets: any = '';
  reps: any = '';

  // Database variable
  db: any = '';

  exercises: Exercise[] = [];
  counter: number = 0;

  constructor(private localStorageDbService: LocalstorageDbService) { }

  addExercise(){
    this.counter++

    if(!this.name || !this.sets || !this.reps){
      return 
    }

    this.exercises.push(
      {
        id: this.counter,
        name: this.name,
        sets: this.sets,
        reps: this.sets
      }
    )

    this.db.get('workouts')
           .push(
            {
              id: this.counter,
              name: this.name,
              sets: this.sets,
              reps: this.sets
            }
           )
           .write()

    this.name = ''
    this.sets = ''
    this.reps = ''
  }

  ngOnInit() {
    this.db = this.localStorageDbService.returnDb()
  }

}
