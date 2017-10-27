import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    constructor(private fire: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
    }

    @ViewChild('username') username;
    @ViewChild('password') password;
    @ViewChild('displayName') displayName;

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

    registerUser(){
        this.fire.auth.createUserWithEmailAndPassword(this.username.value, this.password.value)
            .then(data =>{
                data.updateProfile({'displayName': this.displayName.value})
                    .then(data =>{
                        console.log(data);
                        this.navCtrl.pop();
                    });
            })
            .catch(function(error) {
                console.log(error);
            });
        console.log('registering with ' + this.username.value + ' and ' + this.password.value);
    }
}
