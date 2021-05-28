import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NoLoginGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'blog/:id', loadChildren: './blog/blog.module#BlogPageModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogPageModule' },
  { path: 'login', loadChildren: './admin/login/login.module#LoginPageModule', canActivate : [NoLoginGuard] },
  { path: 'dashboard', loadChildren: './admin/dashboard/dashboard.module#DashboardPageModule', canActivate : [AuthGuard] },
  { path: 'details/:id', loadChildren: './admin/todo-details/todo-details.module#TodoDetailsPageModule', canActivate : [AuthGuard] },
  { path: 'details', loadChildren: './admin/todo-details/todo-details.module#TodoDetailsPageModule', canActivate : [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
