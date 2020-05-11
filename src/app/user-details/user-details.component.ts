import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {IUser} from "../user";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  errorMessage: string;
  users: IUser[] = [];
  filteredUsers: IUser[];
  userLength;

  isBangaloreEmp: boolean = true;
  filterObject: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log('In OnInit');

    /*this.dataService.getUsers().subscribe({
      next: users => {
        this.users = users;
        this.filteredUsers = this.users;
      },
      error: err => this.errorMessage = err
    });*/

    this.filterObject = {
      filterByLocation: true,
      locationInput: 'bangalore'
    };

    this.getUsers(this.filterObject);

  }

  getUsers(filterObject: any): void{
    this.dataService.filterUsers(filterObject).subscribe({
      next: users => {
        console.log(users);
        this.users = users;
        this.filteredUsers = this.users;
        this.userLength = this.filteredUsers ? this.filteredUsers.length : '';
        this.filterObject = {};
      },
      error: err => this.errorMessage = err
    });
  }


  getFilteredUser(filterBy, filterData){

    this.filterObject = {};

    if(this.isBangaloreEmp){
      this.filterObject.filterByLocation = true;
      this.filterObject.locationInput = 'bangalore';
    }

    if(filterBy && filterBy == 'location' ){

      this.getUsers(this.filterObject);

    } else if(filterBy == 'team'){

      this.filterObject.filterByTeam = true;
      this.filterObject.teamInput = filterData;

      this.getUsers(this.filterObject);

    } else {
      this.getUsers(this.filterObject);
    }
  }



  filerUserDetails(filterOption:any):void {
    console.log('function called from submenu' + filterOption.team);

    if(filterOption.location !== '' && filterOption.location !== 'bangalore'){
      this.isBangaloreEmp = false;
    }

    this.filterObject.filterByAll = true;
    this.filterObject.filterBy = filterOption;

    this.getUsers(this.filterObject);
  }



}
