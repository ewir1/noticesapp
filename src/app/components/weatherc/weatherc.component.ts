import { Component, Input } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-weatherc',
  templateUrl: './weatherc.component.html',
  styleUrls: ['./weatherc.component.scss']
})
export class WeathercComponent {

  @Input() cities;
  @Input() titleWather;

  usuario: any = [
    {
      pais: ''
    }
  ];

  paises: any[] = [];

  result: string;

  resultado: string;

   weather: any;

  constructor(
    public noticeService: NoticeService,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe(paramsNotice => {
      this.noticeService.getCitiesWeather(paramsNotice['id']).subscribe(res => res);

      this.noticeService.getCities().subscribe(res => res);

      this.noticeService.getWeather().subscribe(res => this.weather = res);
    });
  }

  guardar(forma: NgForm) {
    this.result = this.usuario.pais;
  }

  buscar(termino: string) {
    this.noticeService.getCitiesWeather(termino).subscribe((data: any) => this.resultado = data);
  }
}
