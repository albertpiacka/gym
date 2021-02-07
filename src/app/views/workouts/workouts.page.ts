import { Component, OnInit } from '@angular/core';
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

  constructor(private localStorageDbService: LocalstorageDbService) { }

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

}
