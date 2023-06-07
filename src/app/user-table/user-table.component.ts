import { Component } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  users: any[] = [
    { Name: 'John Doe', Age: 25, Email: 'john@example.com' },
    { Name: 'Jane Smith', Age: 32, Email: 'jane@example.com' },
    { Name: 'Bob Johnson', Age: 40, Email: 'bob@example.com' },
    { Name: 'Alice Johnson', Age: 27, Email: 'alice@example.com' },
    { Name: 'Michael Smith', Age: 38, Email: 'michael@example.com' },
    { Name: 'Sarah Brown', Age: 31, Email: 'sarah@example.com' },
    { Name: 'David Wilson', Age: 43, Email: 'david@example.com' },
    { Name: 'Emily Davis', Age: 29, Email: 'emily@example.com' },
    { Name: 'Daniel Taylor', Age: 36, Email: 'daniel@example.com' },
    { Name: 'Olivia Miller', Age: 34, Email: 'olivia@example.com' }
  ];
}
