import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeTextoComponent } from './components/heroe-texto/heroe-texto.component';


const APP_ROUTES = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'heroes', component: HeroesComponent },
    {path: 'heroe/:id', component: HeroeComponent },
    {path: 'heroe-texto/:termino', component: HeroeTextoComponent },
    {path: '**', pathMath: 'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);