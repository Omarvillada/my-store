import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Omar';
  age = 24;
  image = 'https://source.unsplash.com/random'
  btnDisable = true

  toggleButton(){
    this.btnDisable = !this.btnDisable
  }

  ageincreaseAge(){
    this.age += 1;
  }
}
