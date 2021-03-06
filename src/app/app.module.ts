import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { ChatPage } from '../pages/chat/chat';
import { RoomsPage } from '../pages/rooms/rooms';
import { CreateRoomPage } from '../pages/create-room/create-room';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseAuth = {
    apiKey: "AIzaSyCaY-LnyxlfoC07hzh1uk_UV88XABMhVvo",
    authDomain: "test-project-ionic2.firebaseapp.com",
    databaseURL: "https://test-project-ionic2.firebaseio.com",
    projectId: "test-project-ionic2",
    storageBucket: "test-project-ionic2.appspot.com",
    messagingSenderId: "628430462201"
};

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RegisterPage,
        LoginPage,
        LoggedinPage,
        ChatPage,
        RoomsPage,
        CreateRoomPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseAuth),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RegisterPage,
        LoginPage,
        LoggedinPage,
        ChatPage,
        RoomsPage,
        CreateRoomPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
