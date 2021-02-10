import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalstorageDbService } from 'src/app/services/localstorage-db.service';

@Component({
  selector: 'app-workout-modal',
  templateUrl: './workout-modal.page.html',
  styleUrls: ['./workout-modal.page.scss'],
})
export class WorkoutModalPage implements OnInit {

  @Input() data: any;
  @Input() meta: string;

  // Variables for meta VIEW

  history: any[] = []

  exercises: any[] = []

  // Variables for meta PLAY

  // Workout variable
  workout: any = ''

  // Database variable
  db: any = '';

  // Rest counter value 
  rest: number = null

  // Timer variable for rest, so we can clear it after every set
  timer: any = null

  // Sets done
  done: number = null

  // Total number of sets
  sets: any[] = []

  constructor(private localStorageDbService: LocalstorageDbService, public modalController: ModalController) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLabels = ['10', '10', '10', '10'];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: [55, 55, 57.5, 60 ], label: 'Series A'},
  ];

  ngOnInit() { 
    // Initialize database 
    this.db = this.localStorageDbService.returnDb()

    // Workout data
    this.workout = this.data
    
    // We get all history data of workouts
    this.history = this.db.get('history')
                          .value()

    // Next we filter only history regarding this workout
    this.history = this.history.filter(w => w.id == this.workout.id)

    this.data.exercises.forEach(e => {
      this.exercises.push({id: e.id, sets: [], barChartLabels: [], barChartData: [{data: [], label: ''}]})
    })

    this.history.forEach(w => {
      w.exercises.forEach(e => {
        e.sets.forEach(s => {
          this.exercises.filter(n => n.id == e.id)[0].sets.push(s)
          this.exercises.filter(n => n.id == e.id)[0].barChartLabels.push(s.reps)
          this.exercises.filter(n => n.id == e.id)[0].barChartData[0].data.push(s.weight)
          this.exercises.filter(n => n.id == e.id)[0].barChartData[0].label = e.name
        })
      })
    })

    // Push each set to array so we can get total length of sets 
    this.data.exercises.forEach(e => {
      e.sets.forEach(set => {
        this.sets.push(set)
      })
    })
  }

  setDone(set){
    // Clear interval so it doesn't speed up in each calling
    clearInterval(this.timer)
    if(set.finished == false){
        // Rest variable contains number of seconds
        this.rest = set.rest
        this.timer = setInterval(() => {
          if(this.rest !== 0){
            this.rest--
          }
        }, 1000)
        set.finished = true
        this.done++
    } else {
      set.finished = false
      this.rest = null
      this.done--
    }
  }

  workoutFinished(){
    this.workout.exercises.forEach(e => {
      e.sets.forEach(set => {
        // Each set has to be returned to 'unfinished' state before each new workout 
        // Weight is also raised by an increment
        set.weight = Number(set.weight) + e.increments
        set.finished = false
      })
    })

    // Replace original workout with new workout (weight is larger now due to increments)
    this.db.get('workouts')
           .find({id: this.workout.id})
           .assign(this.workout)
           .write()

    // Push new record of workout to history table
    this.db.get('history')
           .push(this.workout)
           .write()

    this.dismiss()
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
