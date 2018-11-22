import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ShopComponent } from './UI-Shop/shop/shop.component';
import { NewsComponent } from './news/news.component';
import { SingupLoginComponent } from './singup-login/singup-login.component';
import { ClubsComponent} from './clubs/clubs.component';
import { DanceClubComponent } from './dance-club/dance-club.component';
import { VoteComponent } from './vote/vote.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'e-shop', component: ShopComponent},
  {path: 'news', component: NewsComponent},
  {path: 'clubs', component: ClubsComponent},
  {path: 'sign-up-log-in', component: SingupLoginComponent},
  {path: 'clubs/Dance-Club', component: DanceClubComponent,
  children:[{path: 'Vote', component: VoteComponent}]},
  {path: "*", redirectTo:'home'}
  //{path: 'clubs/Dance-Club/Vote', component: VoteComponent, outlet: 'DanceClub'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
export const routingComponents = [ShopComponent, NewsComponent, ClubsComponent, SingupLoginComponent, DanceClubComponent, VoteComponent]