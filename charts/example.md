#### app.module.ts

            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';

            import { AppRoutingModule } from './app-routing.module';
            import { AppComponent } from './app.component';
            import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
            import { AppMaterialModule } from './app-material/app-material.module';
            import { ReactiveFormsModule, FormsModule } from '@angular/forms';
            import { ToolbarComponent } from './components/toolbar/toolbar.component';
            import { HomeComponent } from './components/home/home.component';
            import { NgChartsModule } from 'ng2-charts';


            @NgModule({
              declarations: [
                AppComponent,
                ToolbarComponent,
                HomeComponent
              ],
              imports: [
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                AppMaterialModule,
                ReactiveFormsModule,
                FormsModule,
                NgChartsModule
              ],exports:[AppRoutingModule],
              providers: [],
              bootstrap: [AppComponent]
            })
            export class AppModule { }


#### component.html

            <canvas id="myChart" width="400" height="400"></canvas>
            <button mat-raised-button color="primary" (click)="changeData()">change data</button>

#### component.ts

            import { Component, OnInit } from '@angular/core';
            import { Chart } from 'chart.js';

            @Component({
              selector: 'app-homecomponent',
              templateUrl: './home.component.html',
              styleUrls: ['./home.component.css']
            })
            export class HomeComponent implements OnInit {
              chartData: any = [12, 19, 3, 5, 2, 3];
              constructor() { }
              myChart: any;

              ngOnInit(): void {

            const ctx: any = document.getElementById('myChart');
             this.myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: this.chartData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

              }

              changeData() {
                console.log(this.myChart.data.datasets);
                this.myChart.data.datasets[0]['label'] = 'number of votes';
                this.myChart.data.datasets[0]['backgroundColor'] = [
                  'rgba(255,11,19,0.3)',
                  'rgba(255,31,99,0.3)',
                  'rgba(255,51,34,0.3)',
                  'rgba(255,111,88,0.3)',
                  'rgba(255,150,22,0.3)',
                  'rgba(255,200,60,0.3)'
                ]
                this.myChart.data.datasets[0].data = [3, 2, 50, 3, 19, 12];
                this.myChart.update();
              }

            }
