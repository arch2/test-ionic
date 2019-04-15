import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth';
import { AuthGuard } from '../providers';

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'auth'
    },
    {
        path: 'tabs',
        loadChildren: '../tabs/tabs.module#TabsPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: '../auth/auth.module#AuthModule',

    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class MainRoutingModule { }
