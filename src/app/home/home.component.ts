import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js'
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public dataService: DataService) { }
  zones: any[] | undefined;
  async readzones(){
    this.zones = await this.dataService.getZones();
    console.log(this.zones);
  }

  

  async ngOnInit() {
    await this.readzones();
    this.createChart();
    this.createthirdChart();
    this.createforthChart();
  }

  
  // workpackages = [
  //   {
  //     sno: 1,
  //     District: 'Central',
  //     UIB: 'Central',
  //     TotalMicropockets: "42",
  //     NotScannedMicropockets: '13',
  //     TotalGatesN: '10461',
  //     gatesScanned: {
  //       total: 147762,
  //       residential: { total: 131868, scanned: 0 },
  //       residentialAndCommercial: { total: 11862, scanned: 0 },
  //       apartments: { total: 216, scanned: 0 },
  //       bulkCommercial: { total: 3816, scanned: 0 },
  //     },
  //   },
  //   {
  //     sno: 2,
  //     District: 'South',
  //     UIB: 'South',
  //     TotalMicropockets: "38",
  //     NotScannedMicropockets: '8',
  //     TotalGatesN: '9823',
  //     gatesScanned: {
  //       total: 134567,
  //       residential: { total: 118234, scanned: 0 },
  //       residentialAndCommercial: { total: 10872, scanned: 0 },
  //       apartments: { total: 198, scanned: 0 },
  //       bulkCommercial: { total: 3263, scanned: 0 },
  //     },
  //   },
  //   {
  //     sno: 3,
  //     District: 'West',
  //     UIB: 'West',
  //     TotalMicropockets: "50",
  //     NotScannedMicropockets: '20',
  //     TotalGatesN: '12009',
  //     gatesScanned: {
  //       total: 162345,
  //       residential: { total: 143210, scanned: 0 },
  //       residentialAndCommercial: { total: 12654, scanned: 0 },
  //       apartments: { total: 245, scanned: 0 },
  //       bulkCommercial: { total: 4481, scanned: 0 },
  //     },
  //   },
  //   // Add 6 more workpackages
  //   {
  //     sno: 4,
  //     District: 'Najafgarh',
  //     UIB: 'Najafgarh',
  //     TotalMicropockets: "30",
  //     NotScannedMicropockets: '10',
  //     TotalGatesN: '7500',
  //     gatesScanned: {
  //       total: 105432,
  //       residential: { total: 95000, scanned: 0 },
  //       residentialAndCommercial: { total: 8765, scanned: 0 },
  //       apartments: { total: 152, scanned: 0 },
  //       bulkCommercial: { total: 2515, scanned: 0 },
  //     },
  //   },
  //   {
  //     sno: 5,
  //     District: 'Rohini',
  //     UIB: 'Rohini',
  //     TotalMicropockets: "45",
  //     NotScannedMicropockets: '15',
  //     TotalGatesN: '11500',
  //     gatesScanned: {
  //       total: 154890,
  //       residential: { total: 138765, scanned: 0 },
  //       residentialAndCommercial: { total: 11784, scanned: 0 },
  //       apartments: { total: 182, scanned: 0 },
  //       bulkCommercial: { total: 4139, scanned: 0 },
  //     },
  //   },
  //   {
  //     sno: 6,
  //     District: 'Civil Lines',
  //     UIB: 'Civil Lines',
  //     TotalMicropockets: "36",
  //     NotScannedMicropockets: '12',
  //     TotalGatesN: '9200',
  //     gatesScanned: {
  //       total: 126543,
  //       residential: { total: 110987, scanned: 0 },
  //       residentialAndCommercial: { total: 9986, scanned: 0 },
  //       apartments: { total: 162, scanned: 0 },
  //       bulkCommercial: { total: 3408, scanned: 0 },
  //     },
  //   },
  //   {
  //     sno: 7,
  //     District: 'Keshavpuram',
  //     UIB: 'Keshavpuram',
  //     TotalMicropockets: "28",
  //     NotScannedMicropockets: '8',
  //     TotalGatesN: '6900',
  //     gatesScanned: {
  //       total: 95432,
  //       residential: { total: 83210, scanned: 0 },
  //       residentialAndCommercial: { total: 7654, scanned: 0 },
  //       apartments: { total: 138, scanned: 0 },
  //       bulkCommercial: { total: 2430, scanned: 0 },
  //     },
  //   },
  //   {
  //     sno: 8,
  //     District: 'Karolbagh',
  //     UIB: 'Karolbagh',
  //     TotalMicropockets: "40",
  //     NotScannedMicropockets: '14',
  //     TotalGatesN: '10500',
  //     gatesScanned: {
  //       total: 143678,
  //       residential: { total: 126789, scanned: 0 },
  //       residentialAndCommercial: { total: 11343, scanned: 0 },
  //       apartments: { total: 205, scanned: 0 },
  //       bulkCommercial: { total: 4341, scanned: 0 },
  //     },
  //   },
  //   {
  //     sno: 9,
  //     District: 'City SP',
  //     UIB: 'City SP',
  //     TotalMicropockets: "32",
  //     NotScannedMicropockets: '11',
  //     TotalGatesN: '8200',
  //     gatesScanned: {
  //       total: 114567,
  //       residential: { total: 100432, scanned: 0 },
  //       residentialAndCommercial: { total: 8976, scanned: 0 },
  //       apartments: { total: 158, scanned: 0 },
  //       bulkCommercial: { total: 3001, scanned: 0 },
  //     },
  //   },
  //   {
  //     sno: 10,
  //     District: 'Narela',
  //     UIB: 'Narela',
  //     TotalMicropockets: "48",
  //     NotScannedMicropockets: '18',
  //     TotalGatesN: '12500',
  //     gatesScanned: {
  //       total: 169432,
  //       residential: { total: 152345, scanned: 0 },
  //       residentialAndCommercial: { total: 13654, scanned: 0 },
  //       apartments: { total: 214, scanned: 0 },
  //       bulkCommercial: { total: 4829, scanned: 0 },
  //     },
  //   },
  //   {
  //     sno: 11,
  //     District: 'Sh South',
  //     UIB: 'Sh South',
  //     TotalMicropockets: "36",
  //     NotScannedMicropockets: '12',
  //     TotalGatesN: '9200',
  //     gatesScanned: {
  //       total: 126543,
  //       residential: { total: 110987, scanned: 0 },
  //       residentialAndCommercial: { total: 9986, scanned: 0 },
  //       apartments: { total: 162, scanned: 0 },
  //       bulkCommercial: { total: 3408, scanned: 0 },
  //     },
  //   },
  //   {
  //     sno: 12,
  //     District: 'Sh North',
  //     UIB: 'Sh North',
  //     TotalMicropockets: "28",
  //     NotScannedMicropockets: '8',
  //     TotalGatesN: '6900',
  //     gatesScanned: {
  //       total: 95432,
  //       residential: { total: 83210, scanned: 0 },
  //       residentialAndCommercial: { total: 7654, scanned: 0 },
  //       apartments: { total: 138, scanned: 0 },
  //       bulkCommercial: { total: 2430, scanned: 0 },
  //     },
  //   },
  //   // Add 4 more workpackages
  //   // ...
  // ];
  createChart(): void {
    Chart.register(...registerables);
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 5, 2, 20, 30, 45],
      }]
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false
        }
      }
    }
    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: options
    }
    const chartItem: HTMLCanvasElement = document.getElementById('myChart') as HTMLCanvasElement;
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
