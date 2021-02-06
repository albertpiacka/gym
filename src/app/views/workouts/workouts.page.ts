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
  workouts: [] = [];

  constructor(private localStorageDbService: LocalstorageDbService) { }

  ngOnInit() {
    this.db = this.localStorageDbService.returnDb()
    this.workouts = this.db.get('workouts').value()

    this.db.get('testWorkouts')
            .push(
              {
                id: 1,
                name: 'upper body',
                exercises: [
                  {
                    name: 'squat',
                    sets: 5,
                    reps: 5
                  },
                  {
                    name: 'bench',
                    sets: 5,
                    reps: 5
                  },
                  {
                    name: 'row',
                    sets: 5,
                    reps: 5
                  },
                ]
              }
            )
            .write()
  }

}
