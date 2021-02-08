import { Component } from '@angular/core';
import { LocalstorageDbService } from './services/localstorage-db.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public user: string;
  public appPages = [
    { title: 'New workout', url: '/new-workout', icon: 'add-circle' },
    { title: 'My workouts', url: '/workouts', icon: 'barbell' },
    { title: 'Favorites', url: '/favorites', icon: 'heart' },
    { title: 'Archived', url: '/archived', icon: 'archive' },
    { title: 'Trash', url: '/trash', icon: 'trash' },
    { title: 'History', url: '/history', icon: 'calendar' },
  ];
  constructor(private localStorageDbService: LocalstorageDbService) {}

  ngOnInit() {
    this.user = 'Albert';
    localStorage.setItem('name', this.user)
    this.localStorageDbService.createExerciseDb()
  }
}
