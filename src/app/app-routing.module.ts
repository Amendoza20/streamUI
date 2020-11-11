import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { VideoFormComponent } from './components/video-form/video-form.component';
import { AccountComponent } from './components/account/account.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { VideoPageComponent } from './video-page/video-page.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: HomeComponent },
  { path: 'upload', component: VideoFormComponent},
  { path: 'home/upload', component: VideoFormComponent},
  { path: 'video-page/:videoName', component: VideoPageComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'account', component: AccountComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
