import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { LoginPage } from '../pages/login/login';

=======
import { CategoriesPage } from '../pages/categories/categories';
>>>>>>> 65aff7b8bcb0f7d7e0d101b85d404e4feb6bee64

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    LoginPage
=======
    CategoriesPage
>>>>>>> 65aff7b8bcb0f7d7e0d101b85d404e4feb6bee64
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    LoginPage
=======
    CategoriesPage
>>>>>>> 65aff7b8bcb0f7d7e0d101b85d404e4feb6bee64
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
