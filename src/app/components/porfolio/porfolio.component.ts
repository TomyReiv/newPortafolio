import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  Proyecto } from 'src/app/interfaces/proyect.interface';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent {
  data!: { [key: string]: Proyecto };


  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get<any>('assets/proyects.json').pipe(
      map((response) => response)
    ).subscribe((data) => {
      this.data = data;

    });
  }

  redirectTo(url:string) {
    window.open(`https://${url}`, '_blank');
  }
}
