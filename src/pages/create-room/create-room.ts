import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the CreateRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-create-room',
    templateUrl: 'create-room.html',
})
export class CreateRoomPage {

    activeUser = JSON.parse(localStorage.getItem('activeUser'));
    errorMsg = '';
    message : string = "";

    @ViewChild('roomName') roomName;
    @ViewChild('roomPassword') roomPassword;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public db:AngularFireDatabase
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CreateRoomPage');
    }

    createRoom(){
        let a = this.roomPassword.value.length;
        if( a < 4){
            this.errorMsg = "Password Should Contain at least five characters";
        }
        else{
            if(/[0-9]/.test(this.roomPassword.value) == false){
                this.errorMsg = "Password Should Contain numbers Only"
            }
            else{
                let obj = {
                    'roomName': this.roomName.value,
                    'roomPassword': this.roomPassword.value
                };

                console.log(obj);

                let d = new Date();
                let n = d.toUTCString();
                this.db.list('rooms/'+obj.roomName).push({
                    roomPassword:this.roomPassword.value,
                    displayName: this.activeUser.displayName,
                    specialMessage: true,
                    message: `${this.activeUser.displayName} creates group on \n ${n}`
                })
                    .then( () =>{
                        //Message Sent...
                        this.viewCtrl.dismiss(obj);
                    });
            }
        }

    }
    closeModal(){
        this.viewCtrl.dismiss();
    }

}
