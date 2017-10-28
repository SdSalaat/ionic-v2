import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-loggedin',
    templateUrl: 'loggedin.html',
})
export class LoggedinPage {

    displayName: string;
    optionsForSlide: any;

    constructor(private fire: AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
        this.displayName = fire.auth.currentUser.displayName;
    }

    @ViewChild(Slides) slides: Slides;

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoggedinPage');
    }


    slideChanged(){
        let endOrNot = this.slides.isEnd();
        console.log(endOrNot);
        if(endOrNot == true){
            this.optionsForSlide = false;
        }
        else{
            this.optionsForSlide = true;
        }
    }

    goChatting(){
        this.navCtrl.push(ChatPage)
    }


}
