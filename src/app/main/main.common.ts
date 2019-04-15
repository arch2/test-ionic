import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './components';
import { MainRoutingModule } from './main-routing.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { ProviderModule } from '../providers/provider.module';

export const IMPORTED_MODULES: any = [
    IonicModule.forRoot(),
    BrowserModule,
    MainRoutingModule,
    ProviderModule
];
export const COMPONENT_DECLARATIONS: any[] = [
    MainComponent
];
export const COMPONENT_EXPORTS: any[] = [

];
export const PROVIDERS_DECLARATIONS: any[] = [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
]
export const BOOTSTRAP_DECLARATIONS: any[] = [
    MainComponent
]
