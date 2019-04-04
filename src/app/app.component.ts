import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkList';
  newItem;
  checkList = ['Drink Water', 'Have Lunch'];
  completedList = [];

  AddItem(item) {
    this.checkList.push(item);
    this.newItem = '';
  }
  completedItem(event) {
    console.log(event);
  }
}
