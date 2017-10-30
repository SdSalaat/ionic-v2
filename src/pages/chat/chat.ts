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
    keyword : any;

    constructor(
        public db:AngularFireDatabase,
        public navCtrl: NavController,
        public navParams: NavParams) {

        this.keyword = this.navParams.data.keyword;
        this.subscription = this.db.list('/rooms/'+ this.keyword).valueChanges().subscribe(data =>{
            this.messages = data;
        });

    }

    sendMessage(){
        this.db.list('/rooms/'+ this.keyword).push({
            displayName: this.activeUser.displayName,
            message: this.message
        })
            .then( () =>{
                //Message Sent...
            });
        this.message = '';
    }

    ionViewWillLeave(){
        console.log('user is about to Go');
        this.subscription.unsubscribe();
        this.db.list('/rooms/'+ this.keyword).push({
            specialMessage: true,
            message: `${this.activeUser.displayName} has Left The Room`
        });
    }

    ionViewDidLoad() {
        this.db.list('/rooms/'+ this.keyword).push({
            specialMessage: true,
            message: `${this.activeUser.displayName} has Joined The Room`
        });
        console.log('ionViewDidLoad ChatPage');
    }

}
