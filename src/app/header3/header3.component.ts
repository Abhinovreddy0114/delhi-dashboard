import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrl: './header3.component.css',
  providers: [provideNativeDateAdapter()],
})
export class Header3Component {
  searchTerm: string = '';

  search(): void {
    // Implement your search logic here
    console.log('Search term:', this.searchTerm);
    // You can emit an event or call a service to handle the search functionality
  }

}
