import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-header5',
  templateUrl: './header5.component.html',
  styleUrl: './header5.component.css',
  providers: [provideNativeDateAdapter()],
})
export class Header5Component {
  searchTerm: string = '';

  search(): void {
    // Implement your search logic here
    console.log('Search term:', this.searchTerm);
    // You can emit an event or call a service to handle the search functionality
  }

}
