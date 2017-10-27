import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  signIn(){
    this.navCtrl.push(LoginPage);
  }


}
