import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { PortifolioComponent } from './features/portifolio/portifolio.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"home",
        component: HomeComponent
    },
    {
        path:"about",
        component: AboutComponent
    },
    {
        path:"portifolio",
        component: PortifolioComponent
    },
    {
        path: "contact",
        component: ContactComponent
    }
];
