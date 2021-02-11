import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
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

  constructor(private localStorageDbService: LocalstorageDbService, public modalController: ModalController, public toastController: ToastController) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartType = 'line';
  public barChartLegend = true;

  ngOnInit() { 
    // Initialize database 
    this.db = this.localStorageDbService.returnDb()

    // Workout data
    this.workout = this.data
    
    // We get all history data of workouts
    this.history = this.db.get('history')
                          .value()

    // Meta view
    // Next we filter only history regarding this workout
    this.history = this.history.filter(w => w.id == this.workout.id)

    this.workout.exercises.forEach(e => {
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

    // Meta play
    // Push each set to array so we can get total length of sets 
    this.workout.exercises.forEach(e => {
      e.sets.forEach(set => {
        this.sets.push(set)
      })
    })

    //Meta edit

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
        set.weight = Number(set.weight) + Number(e.increments)
        set.finished = false
      })
    })

    // Add record to history
    this.db.get('history')
           .unshift(this.workout)
           .write()

    this.presentToast()

    setTimeout(()=>{
      this.dismiss()
    }, 1000)
  }

  saveChanges(){
    this.db.get('workouts')
           .find({id: this.workout.id})
           .assign(this.workout)
           .write()

    this.dismiss()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: `Congratulations! You finished you workout ${this.workout.name}`,
      duration: 2000
    });
    toast.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
