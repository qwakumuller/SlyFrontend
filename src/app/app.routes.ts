import { Routes } from '@angular/router';
import { MenuComponentComponent } from './Components/menu-component/menu-component.component';
import { VisitorFormComponent } from './Components/visitor-form/visitor-form.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { VisitorPageComponent } from './Components/visitor-page/visitor-page.component';

export const routes: Routes = [
    {path: "getAllVisitor", component: VisitorPageComponent },
    {path: "menu", component: MenuComponentComponent }, 
    {path: "visitorform", component: VisitorFormComponent },
    {path: "about-us", component: AboutUsComponent },
    {path: '', component: MainpageComponent},
    {path: "mainpage", component: MainpageComponent }
    
  

];
