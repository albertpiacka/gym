import { Injectable } from '@angular/core';
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageDbService {
  constructor(private storage: Storage) { }

  public createDb(){
    let dataSets = ['workouts', 'favorites', 'archived', 'trash', 'history']

    dataSets.forEach(dataSet => {
      this.storage.get(dataSet).then(val => {
        if(!val){
          this.storage.set(dataSet, [])
        }
      })
    })
  }
}
