import { Component } from '@angular/core';
import { NoticeService } from './services/notice.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notices';

  region: any = [
    {
      country: ''
    }
  ];

  countries: any[] = [];

  result: string;

  resultado: string;

  politic: any[] = [];

  latam: any[] = [];

  coins: any[] = [];

  weather: any;

  constructor(
    public noticeService: NoticeService,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe(paramsNotice => {
      this.noticeService.getCitiesWeather(paramsNotice['id']).subscribe(res => res);

      this.noticeService.getLatam().subscribe(res => {
        this.latam = res;
      });

      this.noticeService.getCoin().subscribe(res => this.coins = res);

      this.noticeService.getWeather().subscribe(res => this.weather = res);

    });

  }

  guardar(forma: NgForm) {
    this.result = this.region.country;
    console.log(this.result);
  }

  buscar(termino: string) {
    this.noticeService.getCitiesWeather(termino).subscribe((data: any) => {
      this.resultado = data;
    });
  }
}

