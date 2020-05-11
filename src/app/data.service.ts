import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, filter, map, tap} from 'rxjs/operators';
import {Observable, throwError} from "rxjs";

import { IUser } from './user';
import {isUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userUrl = 'api/users/users.json';

  constructor(private http: HttpClient) { }

  //Get user details
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userUrl).pipe(
      tap(data => data.join()),
      catchError(this.handleError)
    );
  }

  /*getUserList(searchBy: string, inputData: string): Observable<IUser[]> {
    if(searchBy == 'location'){
      return this.getUsers().pipe(
        map((users: IUser[]) => users.filter((user: IUser, index, users) => user.location == inputData)),
      );
    }
  }*/

  filterUsers(filterObject?: any): Observable<IUser[]> {
    console.log('filterObject' + JSON.stringify(filterObject));

    //const filterDetails = filterObject;

    return this.getUsers().pipe(

      map(users => {
        // if filterBy is empty return all users
        if (isUndefined(filterObject.filterByLocation) &&
          isUndefined(filterObject.filterByTeam) &&
          isUndefined(filterObject.filterByAll)) {
          return users;
        }

        // search for specific user
        const filteredUsers: IUser[] = [];
        if(filterObject && filterObject.filterByLocation){

          users.filter(function(user) {

            if(filterObject.filterByTeam){
              if (user.currentTeam.toLowerCase().includes(filterObject.teamInput.toLowerCase()) &&
                user.location.toLowerCase().includes(filterObject.locationInput.toLowerCase())) {
                filteredUsers.push(user);
              }
            } else {
              if (user.location.toLowerCase().includes(filterObject.locationInput.toLowerCase())) {
                filteredUsers.push(user);
              }
            }

          });
          return filteredUsers;

        } else if(filterObject && filterObject.filterByTeam){ // Search for specific team

          users.filter(function(user) {

            if(filterObject.filterByLocation){
              if (user.currentTeam.toLowerCase().includes(filterObject.teamInput.toLowerCase()) &&
                  user.location.toLowerCase().includes(filterObject.locationInput.toLowerCase())) {
                filteredUsers.push(user);
              }
            } else {
              if (user.currentTeam.toLowerCase().includes(filterObject.teamInput.toLowerCase())) {
                filteredUsers.push(user);
              }
            }

          });

          return filteredUsers;
        } else if(filterObject && filterObject.filterByAll){ // Search all the combination

          users.filter(function(user) {

              if (user.currentTeam.toLowerCase()== filterObject.filterBy.team.toLowerCase() ||
                  user.location.toLowerCase()==filterObject.filterBy.location.toLowerCase() ||
                  user.rollType.toLowerCase()==filterObject.filterBy.rollType.toLowerCase() ||
                  user.designation.toLowerCase()==filterObject.filterBy.designation.toLowerCase() ||
                  user.experience.toLowerCase()==filterObject.filterBy.experience.toLowerCase() ||
                  user.department.toLowerCase()==filterObject.filterBy.department.toLowerCase() ||
                  user.doj==filterObject.filterBy.doj
              ) {
                filteredUsers.push(user);
              }
          });

          return filteredUsers;
        }



      })
    );
  }

  //User details api error handle
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
