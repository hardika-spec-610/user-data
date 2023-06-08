import { Injectable } from '@angular/core';

interface User {
  Name: string;
  Age: number;
  Email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: User[] = [];

  // storeUserData(user: User) {
  //   this.userData.push(user);
  // }
  // getUserData(): User[] {
  //   return this.userData;
  // }
  constructor() {
    // Retrieve stored data from localStorage on service initialization
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
    }
  }

  storeUserData(user: User) {
    this.userData.push(user);
    // Store updated data in localStorage
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }
  getUserData(): User[] {
    return this.userData;
  }
}
