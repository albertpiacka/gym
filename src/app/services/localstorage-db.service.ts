import { Injectable } from '@angular/core';
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

@Injectable({
  providedIn: 'root'
})
export class LocalstorageDbService {
  constructor() { }

  db: any = ''

  public returnName(){
    return localStorage.getItem('name')
  }

  public createExerciseDb(){
    const adapter = new LocalStorage('db')
    const db = low(adapter)

    db.defaults({ workouts: [], favorites: [], archived: [], trash: [], history: []})
      .write()

    this.db = db
  } 

  public returnDb(){
    return this.db
  }
}
