import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { RegisterPage } from '../register/register';
=======
<<<<<<< HEAD
import { LoginPage } from '../login/login';
=======
import { CategoriesPage } from '../categories/categories';
>>>>>>> 65aff7b8bcb0f7d7e0d101b85d404e4feb6bee64
>>>>>>> b571b215cb4811d64060786570adab6c50f72294

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

<<<<<<< HEAD
  Register(){
    this.navCtrl.push(RegisterPage);
  }
=======
<<<<<<< HEAD
  login(){
    this.navCtrl.push(LoginPage);
  }

=======
  nextPage(){
    this.navCtrl.push(CategoriesPage);
  }
>>>>>>> 65aff7b8bcb0f7d7e0d101b85d404e4feb6bee64
>>>>>>> b571b215cb4811d64060786570adab6c50f72294
}
