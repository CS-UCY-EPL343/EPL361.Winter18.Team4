import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ShopComponent } from './UI-Shop/shop/shop.component';
import { NewsComponent } from './news/news.component';
import { SingupLoginComponent } from './singup-login/singup-login.component';
import { ClubsComponent} from './clubs/clubs.component';
import { DanceClubComponent } from './dance-club/dance-club.component';
import { VoteComponent } from './vote/vote.component';
import { AppComponent } from './app.component';
import { AboutUsDanceComponent } from './about-us-dance/about-us-dance.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsDanceComponent } from './contact-us-dance/contact-us-dance.component';



const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'e-shop', component: ShopComponent},
  {path: 'news', component: NewsComponent},
  {path: 'clubs', component: ClubsComponent},
  {path: 'sign-up-log-in', component: SingupLoginComponent},
  {path: 'clubs/Dance-Club', component: DanceClubComponent,
  children:[{path: 'Vote', component: VoteComponent},
            {path: 'Gallery', component: GalleryComponent},
            {path: 'About-us', component: AboutUsDanceComponent},
            {path: 'Contact-us', component: ContactUsDanceComponent}]},
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
export const routingComponents = [ShopComponent, NewsComponent, ClubsComponent, SingupLoginComponent,
             DanceClubComponent, VoteComponent, GalleryComponent, AboutUsDanceComponent, ContactUsDanceComponent]