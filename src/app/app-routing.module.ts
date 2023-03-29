import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurd/auth.gaurd';

const routes: Routes = [
  {
    path: '',
    redirectTo : '/dashboard',
    pathMatch :'full',
  },
  {
    path : 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate:[AuthGuard],
  },
  {
    path : 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[AuthGuard],
  },
  {
    path : 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate:[AuthGuard],
  },
  {
    path : 'web-socket',
    loadChildren: () => import('./web-socket/web-socket.module').then(m => m.WebSocketModule),
    canActivate:[AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
