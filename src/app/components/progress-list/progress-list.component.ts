import { Component } from '@angular/core';

interface Item {
  name: string;
  progress: number;
}

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
  styleUrls: ['./progress-list.component.css']
})
export class ProgressListComponent {

  items: Item[] = [
    { name: 'HTML', progress: 50 },
    { name: 'CSS', progress: 75 },
    { name: 'JavaScript', progress: 25 }
  ];

  addItem() {
    const newItem: Item = {
      name: `Item ${this.items.length + 1}`,
      progress: 0
    };
    this.items.push(newItem);
  }

}
