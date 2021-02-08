import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'new-workout',
    loadChildren: () => import('./views/new-workout/new-workout.module').then( m => m.NewWorkoutPageModule)
  },
  {
    path: 'workouts',
    loadChildren: () => import('./views/workouts/workouts.module').then( m => m.WorkoutsPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./views/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'archived',
    loadChildren: () => import('./views/archived/archived.module').then( m => m.ArchivedPageModule)
  },
  {
    path: 'trash',
    loadChildren: () => import('./views/trash/trash.module').then( m => m.TrashPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./views/history/history.module').then( m => m.HistoryPageModule)
  },
  // {
  //   path: 'workout-modal',
  //   loadChildren: () => import('./modal/workout-modal/workout-modal.module').then( m => m.WorkoutModalPageModule)
  // },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
