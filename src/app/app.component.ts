import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  check = false;
  title = '';

  showOrHide() {
    this.check = !this.check;
  }
  // hienThiHoacKhong(event: boolean) {
  //   this.check = !this.check;
  // }
  onClick() {
    this.check = false;
  }
}
