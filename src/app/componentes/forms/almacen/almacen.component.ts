import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css'],
})
export class AlmacenComponent implements OnInit{
  chart:any;

  constructor() {}

  ngOnInit(): void {
    this.chart = document.getElementById('my_first_chart');
    Chart.register(...registerables);
    this.loadChart();
  }

  loadChart(){
    new Chart(this.chart,{
      type:'line',


      data:{
        labels: [
          'Pregunta 2',
          'Pregunta 4',
          'Pregunta 1',
          'Pregunta 3'
        ],
        datasets:[{
          type: 'bar',
          label: 'Cantidad de No',
          data: [5, 4, 2, 1],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          yAxisID: 'y'
        },{
          type: 'line',
          label: 'Porcentaje',
          data: [41, 74, 90, 100],
          tension:0.2,
          borderColor: 'rgb(54, 162, 235)',
          yAxisID: 'percentage'
        }]
      },
      options:{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            type:'linear',
            position:'left',
            max: 12
          },
          percentage: {
            beginAtZero: true,
            type:'linear',
            position:'right',
            grid: {
              drawOnChartArea: false
            },
            ticks:{
              callback: function(value, index, values){
                return `${value} %`
              }
            }
          },
          x: {
            grid: {
              drawBorder: false
            }
          }
        }
      }
    })
  }
}
