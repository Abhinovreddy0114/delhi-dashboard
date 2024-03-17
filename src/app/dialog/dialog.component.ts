import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService : DataService,
    private route : ActivatedRoute,

  ) {
    console.log('***********', data)
  }

 
  closeDialog(): void {
    this.dialogRef.close();
  }
  days: number[] = Array.from({ length: 31 }, (_, index) => index + 1);
}
