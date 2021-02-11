import { Component } from '@angular/core';
import { LocalstorageDbService } from './services/localstorage-db.service'
import { NativeStorage } from '@ionic-native/native-storage/ngx';

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
  constructor(private localStorageDbService: LocalstorageDbService, private nativeStorage: NativeStorage) {}
  

  ngOnInit() {
    if(!localStorage.getItem('name')){
      localStorage.setItem('name', '')
    }
    this.user = localStorage.getItem('name')
    this.localStorageDbService.createExerciseDb()
    
    this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );

    this.nativeStorage.getItem('myitem')
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }
}
