import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations' 
import { Storage } from '@ionic/storage';

interface Exercise {
  id: number,
  name: string,
  sets: any[],
  increments: number,
}

interface Workout {
  id: number,
  name: string,
  created_at: string,
  exercises: Exercise[],
}

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.page.html',
  styleUrls: ['./new-workout.page.scss'],
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
export class NewWorkoutPage implements OnInit {

  // Input for workout name
  workoutName: string = '';

  // Input for exercises
  name: string = '';
  sets: any[] = []

  setCounter: number = 1
  reps: number = null
  weight: number = null
  rest: number = null

  increments: number = 2.5;

  // Data
  exercises: Exercise[] = [];
  counter: number = 1;

  constructor
  (
    private storage: Storage,
    private route: ActivatedRoute,
    private router: Router
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

    let id = 0

    this.storage.get('workouts').then(val => {
      id += val.length 
    }).then(() => {
      this.storage.get('favorites').then(val => {
        id += val.length 
      })
    }).then(() => {
      this.storage.get('archived').then(val => {
        id += val.length 
      })
    }).then(() => {
      this.storage.get('trash').then(val => {
        id += val.length + 1

        let workout = 
        {
          id: id,
          name: this.workoutName,
          created_at: Date().split(' ', 4).join().replace(/,/g, ' '),
          status: 'unliked',
          exercises: this.exercises
        }
    
        this.queryWorkout(workout)
      })
    })
  }

  queryWorkout(w){
    this.storage.get('workouts').then((workout: Workout[]) => {
      if(workout){
        let all = workout
        all.push(w)
        this.storage.set('workouts', all).then(() => {
          this.router.navigate(['workouts'])
        })
      } else {
        this.storage.set('workouts', [w]).then(() => {
          this.router.navigate(['workouts'])
        })
      }
    })
  }

  ngOnInit() {
  }

}
