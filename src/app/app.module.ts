import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyAo3u4ZavTlTvR8kzCebwRP7H1ciDqjFjo",
    authDomain: "loginionic-68eed.firebaseapp.com",
    databaseURL: "https://loginionic-68eed.firebaseio.com",
    projectId: "loginionic-68eed",
    storageBucket: "loginionic-68eed.appspot.com",
    messagingSenderId: "970291037580",
    appId: "1:970291037580:web:a4bd42c343c545f0"
};

@NgModule({
  declarations: [AppComponent  ],
  entryComponents: [  ],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
