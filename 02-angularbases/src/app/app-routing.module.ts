import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsModule } from './pages/posts/posts.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  
  {
    path: 'posts',
    loadChildren: './pages/posts/posts.module#PostsModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

/**
 * Estamos especificando que este archivo utiliza router module
 */
@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule // Exportamos la nueva configuración del router module.
  ]
})
export class AppRoutingModule { }
