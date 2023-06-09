import { Component } from '@angular/core';
import { UserService } from '../user.service';

interface User {
  Name: string;
  Age: number;
  Email: string;
  [key: string]: any;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  userData: User[] = [
    // { Name: 'John Doe', Age: 25, Email: 'john@example.com' },
    // { Name: 'Jane Smith', Age: 32, Email: 'jane@example.com' },
    // { Name: 'Bob Johnson', Age: 40, Email: 'bob@example.com' },
    // { Name: 'Alice Johnson', Age: 27, Email: 'alice@example.com' },
    // { Name: 'Michael Smith', Age: 38, Email: 'michael@example.com' },
    // { Name: 'Sarah Brown', Age: 31, Email: 'sarah@example.com' },
    // { Name: 'David Wilson', Age: 43, Email: 'david@example.com' },
    // { Name: 'Emily Davis', Age: 29, Email: 'emily@example.com' },
    // { Name: 'Daniel Taylor', Age: 36, Email: 'daniel@example.com' },
    // { Name: 'Olivia Miller', Age: 34, Email: 'olivia@example.com' }
  ];

  // Variables for sorting
  sortBy: string = '';
  sortDirection: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userData = this.userService.getUserData();
  }
  sortData(column: string) {
    // Check if the same column is clicked for sorting again
    if (this.sortBy === column) {
      // Toggle sort direction between ascending and descending
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Set the column and default sort direction to ascending
      this.sortBy = column;
      this.sortDirection = 'asc';
    }

    // Perform the actual sorting
    this.userData.sort((a, b) => {
      if (a[column] < b[column]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (a[column] > b[column]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
