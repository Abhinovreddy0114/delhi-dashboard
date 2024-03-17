import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css',
  providers: [provideNativeDateAdapter()],
})
export class Header2Component {
  searchTerm: string = '';

  search(): void {
    // Implement your search logic here
    console.log('Search term:', this.searchTerm);
    // You can emit an event or call a service to handle the search functionality
  }

}
