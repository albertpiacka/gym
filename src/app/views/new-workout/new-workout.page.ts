import { Component, OnInit } from '@angular/core';
import { LocalstorageDbService } from '../../services/localstorage-db.service'

interface Exercise {
  id: number,
  name: string,
  sets: object[],
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
  sets: object[] = []

  setCounter: number = 1
  reps: number = null
  weight: number = null
  rest: number = null

  increments: number = 2.5;

  // Database variable
  db: any = '';

  // Data
  exercises: Exercise[] = [];
  counter: number = 1;

  constructor
  (
    private localStorageDbService: LocalstorageDbService
  ) { }

  addExercise(){
    this.counter++

    if(!this.name || !this.sets ){
      return 
    }

    this.exercises.push(
      {
        id: this.counter,
        name: this.name,
        sets: this.sets,
        increments: this.increments
      }
    )

    this.name = ''
    this.reps = null
    this.weight = null
    this.rest = null
    this.sets = []
    this.increments = 2.5
  }

  addSet(){
    if(!this.reps || !this.weight){
      return
    }
    this.sets.push(
      {
        id: this.setCounter,
        reps: this.reps,
        weight: this.weight,
        rest: this.rest,
        finished: false,
      }
    )

    this.setCounter++
    this.reps = null
    this.weight = null
    this.rest = null
  }

  createWorkout(){
    let workouts = this.db.get('workouts')
                          .value()

    let archived = this.db.get('archived')
                          .value()

    let trash = this.db.get('trash')
                          .value()

    let id = workouts.length + 1 + archived.length + 1 + trash.length + 1

    let workout = 
    {
      id: id,
      name: this.workoutName,
      created_at: Date().split(' ', 4).join().replace(/,/g, ' '),
      status: 'unliked',
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
