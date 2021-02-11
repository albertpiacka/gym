import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'workouts',
    loadChildren: () => import('./views/workouts/workouts.module').then( m => m.WorkoutsPageModule)
  },
  {
    path: 'new-workout',
    loadChildren: () => import('./views/new-workout/new-workout.module').then( m => m.NewWorkoutPageModule)
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
  {
    path: 'intro-modal',
    loadChildren: () => import('./modal/intro-modal/intro-modal.module').then( m => m.IntroModalPageModule)
  },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
