import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {
    activeUser = JSON.parse(localStorage.getItem('activeUser'));
    displayName : string = "";
    message : string = "";
    subscription: any;
    messages: object[] = [];

    constructor(
        public db:AngularFireDatabase,
        public navCtrl: NavController,
        public navParams: NavParams) {

        this.subscription = this.db.list('/chat').valueChanges().subscribe(data =>{
            this.messages = data;
        });

    }

    sendMessage(){
        this.db.list('/chat').push({
            displayName: this.activeUser.displayName,
            message: this.message
        })
            .then( () =>{
                //Message Sent...
            });
        this.message = '';
    }

    ionViewDidLoad() {

        console.log('ionViewDidLoad ChatPage');
    }

}
