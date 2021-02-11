import { Component, OnInit } from '@angular/core';
import { LocalstorageDbService } from 'src/app/services/localstorage-db.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  // Database variable
  db: any = '';

  // Workouts
  workouts: any[] = [];
 
  constructor(private localStorageDbService: LocalstorageDbService) { }

  ngOnInit() {
    this.db = this.localStorageDbService.returnDb()
    this.workouts = this.db.get('history').cloneDeep().value()
  }

}
