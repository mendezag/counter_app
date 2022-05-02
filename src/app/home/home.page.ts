import { Component } from '@angular/core';
import { IonThumbnail } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private n: number;
  public showNumber: string;s


  constructor(
    public screenOrientation: ScreenOrientation
  ) {
    this.n = 0;
    this.showNumber = "00";
  }

  up(){
    this.n++;
    this.showNumber ='' + this.n
  }

  down(){
    this.n--;
    this.showNumber = '' + this.n
  }
   
}
