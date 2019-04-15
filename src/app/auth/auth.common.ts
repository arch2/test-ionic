import { BrowserModule } from '@angular/platform-browser';

//import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { LoginComponent, RegisterComponent } from './components';
import { AuthRoutingModule } from './auth-routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicPageModule, IonicModule } from 'ionic-angular';

export const IMPORTED_MODULES: any = [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    IonicModule,
    IonicPageModule.forChild(LoginComponent)
];
export const COMPONENT_DECLARATIONS: any[] = [
    LoginComponent,
    RegisterComponent
];
export const COMPONENT_EXPORTS: any[] = [

];
export const PROVIDERS_DECLARATIONS: any[] = [
    // StatusBar,
    // SplashScreen,
    // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
]
export const BOOTSTRAP_DECLARATIONS: any[] = [
    //LoginComponent
]
