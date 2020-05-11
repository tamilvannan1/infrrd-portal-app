import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

interface Department {
  value: string;
  displayText: string;
}

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  departments: Department[] = [
    {value: 'Front End Development', displayText: 'Front End Development'},
    {value: 'ML Engineering', displayText: 'ML Engineering'},
    {value: 'Quality Analyst', displayText: 'Quality Analyst'},
    {value: 'hr', displayText: 'Human Resource'},
    {value: 'rd', displayText: 'R & D'}
  ];

  subMenus: any[] = [{
    rollTypes: [
      {value: 'Full Time', displayText: 'Full Time'},
      {value: 'Part Time', displayText: 'Part Time'}
    ],
    designations: [
      {value: 'Sr.UI Developer', displayText: 'Sr.UI Developer'},
      {value: 'UI Developer', displayText: 'UI Developer'},
      {value: 'Test Engineer', displayText: 'Test Engineer'},
      {value: 'Java Developer', displayText: 'Java Developer'}
    ],
    experiences:[
      {value: '5.8 years', displayText: '5.8 Years'},
      {value: '4.5 Years', displayText: '4.5 Years'},
      {value: '3 years', displayText: '3 years'}
    ],
    doj:[
      {value: 2017, displayText: '2017'},
      {value: 2018, displayText: '2018'},
      {value: 2019, displayText: '2019'}
    ],
    locations:[
      {value: 'bangalore', displayText: 'Bangalore'},
      {value: 'singapore', displayText: 'Singapore'},
      {value: 'chennai', displayText: 'Chennai'}
    ],
    teams: [
      {value: 'product', displayText: 'Product Team'},
      {value: 'IDC Singapore', displayText: 'IDC Singapore'},
      {value: 'OCBC Singapore', displayText: 'OCBC'},
      {value: 'Radian', displayText: 'Radian'},
      {value: 'Rustify', displayText: 'Rustify'}
    ]
  }];

  filterForm: FormGroup;

  filterInput: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.filterForm = this.fb.group({
      department: [''],
      rollType: [''],
      designation: [''],
      experience: [''],
      doj: [''],
      location: [''],
      team: [''],

    });
  }

  @Output() filterEvent: EventEmitter<any> = new EventEmitter<any>();

  filter() {
    console.log('filter: ' + JSON.stringify(this.filterForm.value));
    this.filterInput = this.filterForm.value;
    this.filterEvent.emit(this.filterInput);
  }




  function1(){
    console.log('clicked');
  }
}
