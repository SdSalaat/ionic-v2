import { Component} from '@angular/core';
import * as _ from 'lodash';
import { AngularFireDatabase} from 'angularfire2/database';
import { IonicPage, NavController, ActionSheetController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat'


import { CreateRoomPage } from '../create-room/create-room';


/**
 * Generated class for the RoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-rooms',
    templateUrl: 'rooms.html',
})
export class RoomsPage {
    subscription ;
    rooms = [];
    password: string ;
    roomsData;
    messages: object[] = [];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                public alertCtrl: AlertController,
                public db:AngularFireDatabase,
                public actionSheetCtrl:ActionSheetController,
    ) {
    }

    ionViewDidLoad() {
        this.subscription = this.db.object('/rooms').valueChanges().subscribe(data => {
            if(data != null){

                let arrObj = [];
                let obj = JSON.stringify(data, function(key, value) {
                    arrObj.push(value);
                });
                this.roomsData = arrObj;

                this.rooms = [];
                console.log(this.roomsData);
                let array = Object.keys(data).map(k => this.rooms.push(k));
            }
        });

    }

    openModal(){
        let myModal = this.modalCtrl.create(CreateRoomPage);
        myModal.onDidDismiss(data => {
            this.subscription = this.db.object('/rooms').valueChanges().subscribe(data => {
                this.roomsData = data;
                this.rooms = [];
                console.log(this.roomsData);
                let array = Object.keys(data).map(k => this.rooms.push(k));
            });
        });

        myModal.present();
    }


    itemSelected(keyword){

        let actionSheet = this.actionSheetCtrl.create({
            title: 'What do you want to do',

            buttons: [

                {
                    text: 'Enter Room Password',
                    handler: () => {
                        this.enterRoom(keyword);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }




    enterRoom(keyword){
        console.log(keyword);

        this.subscription = this.db.list('rooms/' + keyword).valueChanges().subscribe(data => {
            this.messages = data;
            console.log(this.messages);
        });


        let prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Enter password For Room Entrance",
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Enter Password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        let a = _.findIndex(this.messages, function (o) {
                            return o.roomPassword == data.password;
                        });
                        if (a != -1) {
                            let groupName = {"keyword": keyword};
                            this.navCtrl.push(ChatPage, groupName);
                        }
                        else{
                            let alert = this.alertCtrl.create({
                                title: 'Incorrect Password..!',
                                subTitle: 'You Entered Incorrect Password!',
                                buttons: ['OK']
                            });
                            alert.present();
                        }
                    }
                }
            ]
        });
        prompt.present();
    }
}