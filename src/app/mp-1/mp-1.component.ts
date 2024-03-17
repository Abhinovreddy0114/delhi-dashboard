import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mp-1',
  templateUrl: './mp-1.component.html',
  styleUrl: './mp-1.component.css'
})
export class Mp1Component {
  streets: any[] | undefined;
  houses : any = {};
  // boxes = [];
  localityId: string |null =null;

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      this.localityId = params.get('id');
      if (this.localityId != null) {
        await this.readStreets();
        console.log('**********', this.streets)
        this.readStreets().then(()=>{
          console.log('$$$$$$$$$', this.streets)
          this.streets?.forEach(street => {
            this.readHouses(street.id).then((data)=>{
              this.houses[street.id] = data;
              console.log('@@@@@', this.houses);
            });
            
          });

        })
      }
      console.log(this.streets);
    });
  }
  constructor(public dataService: DataService,private route : ActivatedRoute,public dialog: MatDialog) { }
  
  async readStreets() {
    this.streets = await this.dataService.getStreetsByLocalityid(parseInt(this.localityId!));
  }
  async readHouses(streetId :number ) {
     return await this.dataService.getHousesByStreetId(streetId);
  }
  
  openDialog(house:any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      height: '1000px',
      position: {
        right: '0', // Adjust the value based on your desired position
        top: '0', // Adjust the value based on your desired position
      },
      data: house
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }
  
  workpackages = [
    {
      sno: 1,
      name: 'CPKG 1',
      gatesScanned: {
        total: 147762,
        residential: { total: 131868, scanned: 0 },
        residentialAndCommercial: { total: 11862, scanned: 0 },
        apartments: { total: 216, scanned: 0 },
        bulkCommercial: { total: 3816, scanned: 0 }
      }
    },
    {
      sno: 2,
      name: 'CULB 1',
      gatesScanned: {
        total: 13446,
        residential: { total: 12726, scanned: 0 },
        residentialAndCommercial: { total: 558, scanned: 0 },
        apartments: { total: 0, scanned: 0 },
        bulkCommercial: { total: 162, scanned: 0 }
      }
    },
    // Add more workpackages if needed
  ];
  activeButton: number | null = null;

  handleButtonClick(buttonNumber: number) {
    this.activeButton = buttonNumber;
    console.log(`activeButton value: ${this.activeButton}`);

    if (buttonNumber === 1) {
      this.createChart();
      // this.createSecondChart();
    } 
    // else if (buttonNumber === 3) {
    //   this.createthirdChart();
    //   this.createforthChart();
    // } else {
    //   // Handle other button numbers if needed
    // }
  }
  ngAfterViewInit() {

  }

  createChart(): void {
    Chart.register(...registerables);
    const data = {
      labels: ['CPKG 1', 'CLUB 1'],
      datasets: [{

        backgroundColor: 'rgb(89, 186, 193)',
        data: [8209, 747],
        label: 'Total Gates',
      }]
    };
    const options = {
      scales: {
        y: {

          beginAtZero: true,
          display: true,
          max: 10000, // Set the max value based on your scale (e.g., 2000 * 5)
          stepSize: 2000
        }
      }
    }
    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: options
    }
    const chartItem: HTMLCanvasElement = document.getElementById('myChart2') as HTMLCanvasElement;
    const ctx = chartItem.getContext('2d');
    if (ctx) {
      new Chart(ctx, config);
    }



  }
  buttonName = "Click Me";
  showTable = false;


  onMouseOver(): void {
    // Additional actions on mouseover if needed
  }

  onMouseOut(): void {
    // Additional actions on mouseout if needed
  }

  onButtonHover(): void {
    // Additional actions on button hover if needed
  }

  onButtonOut(): void {
    // Additional actions on button mouseout if needed
  }
  toggleTableVisibility(): void {
    this.showTable = !this.showTable;

  }
  searchTerm: string = '';

  search(): void {
    // Implement your search logic here
    console.log('Search term:', this.searchTerm);
    // You can emit an event or call a service to handle the search functionality
  }
  micropocketData = [
    { sNo: 1, micropocketNumber: 'MP-1', notScannedCount: 278 },
    { sNo: 2, micropocketNumber: 'MP-2', notScannedCount: 212 },
    { sNo: 3, micropocketNumber: 'MP-3', notScannedCount: 296 },
    { sNo: 4, micropocketNumber: 'MP-4', notScannedCount: 338 },
    { sNo: 5, micropocketNumber: 'MP-5', notScannedCount: 229 },
    { sNo: 6, micropocketNumber: 'MP-6', notScannedCount: 139 },
    { sNo: 7, micropocketNumber: 'MP-7', notScannedCount: 199 },
    { sNo: 8, micropocketNumber: 'MP-8', notScannedCount: 193 },
    { sNo: 9, micropocketNumber: 'MP-9', notScannedCount: 181 },
    { sNo: 10, micropocketNumber: 'MP-10', notScannedCount: 236 },
  ];
  createSecondChart(): void {

    Chart.register(...registerables);
    const data = {
      labels: ['17-1', '18-1', '19-1', '20-1', '21-1', '22-1',],
      datasets: [{
        backgroundColor: 'rgb(89, 186, 193)',
        data: [8956, 8956,8956,8956,8956,8956,],
        label: 'Not Scanned Count',
      }]
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: true,
          max: 10000, // Set the max value based on your scale (e.g., 2000 * 5)
          stepSize: 2000
        }
      }
    }
    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: options
    }

    const chartItem: HTMLCanvasElement = document.getElementById('mySecondChart') as HTMLCanvasElement;
    const ctx = chartItem.getContext('2d');
    if (ctx) {
      new Chart(ctx, config);
    }
  }
  employeesData = [
    { Sno: 1, 'Employee Name': 'Rusuva Santosh', 'Employee Id': 'PSB21122', 'Mobile No.': '0', Designation: 'Loader', 'Morning Status': 'Absent', 'Afternoon Status': 'Absent', Micropocket: 'MP-11' },
    { Sno: 2, 'Employee Name': 'PADALA GURUVARI', 'Employee Id': 'PSB11552', 'Mobile No.': '8985403414', Designation: 'PHWorker', 'Morning Status': 'Absent', 'Afternoon Status': 'Absent', Micropocket: 'MP-3' },
    { Sno: 3, 'Employee Name': 'RAGHUNADH NAYAK', 'Employee Id': 'PSB11585', 'Mobile No.': '8897703840', Designation: 'PHWorker', 'Morning Status': 'Absent', 'Afternoon Status': 'Absent', Micropocket: 'MP-18' },
    { Sno: 4, 'Employee Name': 'SRI VAISHNAVA JANAKI', 'Employee Id': 'PSB11557', 'Mobile No.': '8985403412', Designation: 'PHWorker', 'Morning Status': 'Absent', 'Afternoon Status': 'Absent', Micropocket: 'MP-7' },
    { Sno: 5, 'Employee Name': 'KALINGAPATNAM GIRIJA', 'Employee Id': 'PSB11564', 'Mobile No.': '9010201613', Designation: 'PHWorker', 'Morning Status': 'Absent', 'Afternoon Status': 'Absent', Micropocket: 'MP-14' },
    { Sno: 6, 'Employee Name': 'MAHADASARI RAMU', 'Employee Id': 'PSB11579', 'Mobile No.': '9652284853', Designation: 'PHWorker', 'Morning Status': 'Absent', 'Afternoon Status': 'Absent', Micropocket: 'MP-35' },
    { Sno: 7, 'Employee Name': 'PULI SEETAMMA', 'Employee Id': 'PSB11558', 'Mobile No.': '9573553928', Designation: 'PHWorker', 'Morning Status': 'Absent', 'Afternoon Status': 'Absent', Micropocket: 'MP-8' },
    { Sno: 8, 'Employee Name': 'KALINGAPATNAM VENKATI', 'Employee Id': 'PSB11619', 'Mobile No.': '8106563965', Designation: 'Loader', 'Morning Status': 'Absent', 'Afternoon Status': 'Absent', Micropocket: 'MP-7' },
    { Sno: 9, 'Employee Name': 'CHINTALA MURUGAN', 'Employee Id': 'PSB11573', 'Mobile No.': '9550738092', Designation: 'PHWorker', 'Morning Status': 'Absent', 'Afternoon Status': 'Absent', Micropocket: 'MP-6' },
    { Sno: 10, 'Employee Name': 'KALINGAPATNAM RAMA RAO', 'Employee Id': 'PSB11620', 'Mobile No.': '8317613748', Designation: 'PHWorker', 'Morning Status': 'Absent', 'Afternoon Status': 'Absent', Micropocket: 'MP-38' }
  ];
  vehicles = [
    { Sno: 1, 'Vehicle Name': 'test_vehicle', 'Vehicle Status': 'Parked', Status: 'InActive', 'Last Data Received': 'No Data', 'Not Working (In Days)': '-' },
    { Sno: 2, 'Vehicle Name': 'test2020', 'Vehicle Status': 'Parked', Status: 'InActive', 'Last Data Received': 'No Data', 'Not Working (In Days)': '-' },
    { Sno: 3, 'Vehicle Name': 'test_vijaya', 'Vehicle Status': 'Parked', Status: 'InActive', 'Last Data Received': 'No Data', 'Not Working (In Days)': '-' },
    { Sno: 4, 'Vehicle Name': 'AP07TH7493', 'Vehicle Status': 'Parked', Status: 'InActive', 'Last Data Received': 'No Data', 'Not Working (In Days)': '-' },
    { Sno: 5, 'Vehicle Name': 'AP07TH7493', 'Vehicle Status': 'Parked', Status: 'InActive', 'Last Data Received': 'No Data', 'Not Working (In Days)': '-' },
    { Sno: 6, 'Vehicle Name': 'AP07TH7493', 'Vehicle Status': 'Parked', Status: 'InActive', 'Last Data Received': 'No Data', 'Not Working (In Days)': '-' },
    { Sno: 7, 'Vehicle Name': '11111111111111', 'Vehicle Status': 'Parked', Status: 'InActive', 'Last Data Received': 'No Data', 'Not Working (In Days)': '-' },
    { Sno: 8, 'Vehicle Name': 'test_vijaya', 'Vehicle Status': 'Parked', Status: 'InActive', 'Last Data Received': 'No Data', 'Not Working (In Days)': '-' },
    { Sno: 9, 'Vehicle Name': 'test_vijaya', 'Vehicle Status': 'Parked', Status: 'InActive', 'Last Data Received': 'No Data', 'Not Working (In Days)': '-' },
    // Add more vehicle data as needed
  ];
  createthirdChart(): void {

    Chart.register(...registerables);
    const data = {
      labels: ['CPKG-1', 'CLUB-1',],
      datasets: [{
        backgroundColor: ' rgb(110, 105, 174)',
        data: [4, 0,],
        label: 'Workpackages',
      }]
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: true,
          max: 10, // Set the max value based on your scale (e.g., 2000 * 5)
          stepSize: 2
        }
      }
    }
    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: options
    }

    const chartItem: HTMLCanvasElement = document.getElementById('mythirdChart') as HTMLCanvasElement;
    console.log('Chart Item:', chartItem);

    if (chartItem) {
      const ctx = chartItem.getContext('2d');
      if (ctx) {
        new Chart(ctx, config);
      } else {
        console.error('Failed to get 2D rendering context for the canvas element.');
      }
    } else {
      console.error('Canvas element with ID "mythirdChart" not found in the DOM.');
    }
  }
  createforthChart(): void {

    Chart.register(...registerables);
    const data = {
      labels: ['CPKG-1', 'CLUB-1',],
      datasets: [{
        backgroundColor: ' rgb(110, 105, 174)',
        data: [4, 4,],
        label: 'Workpackages',
      }]
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: true,
          max: 10, // Set the max value based on your scale (e.g., 2000 * 5)
          stepSize: 2
        }
      }
    }
    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: options
    }

    const chartItem: HTMLCanvasElement = document.getElementById('myforthChart') as HTMLCanvasElement;
    const ctx = chartItem.getContext('2d');
    if (ctx) {
      new Chart(ctx, config);
    }
  }
  

  

}

