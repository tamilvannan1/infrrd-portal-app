import {Component} from '@angular/core';

interface Team {
  value: string;
  displayText: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infrrd-portal';

  teams: Team[] = [
    {value: 'product', displayText: 'Product Team'},
    {value: 'IDC Singapore', displayText: 'IDC Singapore'},
    {value: 'OCBC Singapore', displayText: 'OCBC'},
    {value: 'Radian', displayText: 'Radian'},
    {value: 'Rustify', displayText: 'Rustify'}
  ];

  showSubMenu: boolean = true;



}
