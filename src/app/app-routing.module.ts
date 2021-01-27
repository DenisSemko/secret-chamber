import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from 'src/app/main-page/main-page.component';
import { QuizPageComponent } from 'src/app/quiz-page/quiz-page.component';
import { ErrorPageComponent } from 'src/app/error-page/error-page.component';
import { FinalComponent } from 'src/app/final/final.component';


const routes: Routes = [
  {
    path: 'quiz',
    component: QuizPageComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: 'final',
    component: FinalComponent
  },
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
