import { Component, OnInit } from '@angular/core';
import { LocalstorageDbService } from '../../services/localstorage-db.service'

interface Exercise {
  id: number,
  name: string,
  sets: number,
  reps: number,
  starting: number,
  increments: number,
}

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.page.html',
  styleUrls: ['./new-workout.page.scss'],
})
export class NewWorkoutPage implements OnInit {
  // Input for workout name
  workoutName: string = '';

  // Input for exercises
  name: string = '';
  sets: number = null;
  reps: number = null;
  starting: number = null;
  increments: number = null;

  // Database variable
  db: any = '';

  // Data
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
        reps: this.sets,
        starting: this.starting,
        increments: this.increments
      }
    )

    this.name = ''
    this.sets = null
    this.reps = null
    this.starting = null
    this.increments = null
  }

  createWorkout(){
    let workout = 
    {
      name: this.workoutName,
      created_at: Date().split(' ', 4).join().replace(/,/g, ' '),
      exercises: []
    }

    this.exercises.forEach(exercise => {
      workout.exercises.push(exercise)
    })

    this.db.get('workouts')
           .push(workout)
           .write()
    
    
  }

  ngOnInit() {
    this.db = this.localStorageDbService.returnDb()
  }

}
