import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

    errorMsg = '';

    @ViewChild('roomName') roomName;
    @ViewChild('roomPassword') roomPassword;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CreateRoomPage');
    }

    createRoom(){
        let a = this.roomPassword.value.length;
        if( a < 4){
            this.errorMsg = "Password Shoud Contain atleast five characters";
        }
        else{
            if(/[0-9]/.test(this.roomPassword.value) == false){
                this.errorMsg = "Password Shoud Contain numbers Only"
            }
            else{
                let obj = {
                    'roomName': this.roomName.value,
                    'roomPassword': this.roomPassword.value
                };

                console.log(obj);
                /*this.viewCtrl.dismiss(obj);*/
            }
        }


    }

}
