import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about')
        .then(m => m.About)
  },
  {
    path: 'exams',
    loadComponent: () =>
      import('./pages/exams/exams')
        .then(m => m.Exams)
  },
  {
    path: 'rewards',
    loadComponent: () =>
      import('./pages/rewards/rewards')
        .then(m => m.Rewards)
  },
  {
    path: 'franchise',
    loadComponent: () =>
      import('./pages/franchise/franchise')
        .then(m => m.Franchise)
  },
  {
    path: 'leaderboard',
    loadComponent: () =>
      import('./pages/leaderboard/leaderboard')
        .then(m => m.Leaderboard)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact')
        .then(m => m.Contact)
  },
  {
    path: '**',
    redirectTo: ''
  }
];