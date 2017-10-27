import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private fire: AngularFireAuth, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  @ViewChild('username') username;
  @ViewChild('password') password;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: "Info!",
      subTitle: message,
      buttons: ['COOL']
    }).present();
  }

  signInUser(){

    this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
      .then(data =>{
        console.log(data);
        this.alert("Suucessfully Logged In...");
        this.navCtrl.setRoot(LoggedinPage);
      })
      .catch(error =>{
        console.log(error);
        this.alert(error.message);
      });
    console.log('Signing in with ' + this.username.value + ' and ' + this.password.value);
  }

}


