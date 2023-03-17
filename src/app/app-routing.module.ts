import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio-usuario',
    loadChildren: () => import('./pages/inicio-usuario/inicio-usuario.module').then( m => m.InicioUsuarioPageModule)
  },
  {
    path: 'funcionalidad1',
    loadChildren: () => import('./pages/funcionalidad1/funcionalidad1.module').then( m => m.Funcionalidad1PageModule)
  },
  {
    path: 'funcionalidad2',
    loadChildren: () => import('./pages/funcionalidad2/funcionalidad2.module').then( m => m.Funcionalidad2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
