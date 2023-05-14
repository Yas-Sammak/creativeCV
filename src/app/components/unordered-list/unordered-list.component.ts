import { Component } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.css']
})
export class UnorderedListComponent {

  age = '25';
  email = 'example@example.com';
  phone = '123-456-7890';
  address = '123 Main St';
  language = 'English';

}
