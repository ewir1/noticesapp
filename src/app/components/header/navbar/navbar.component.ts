import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  countries: any[] = [];

  result: string;

  resultado: string;

  world: any = {};

  sport: any = {};

  science: any = {};

  business: any = {};

  entertainment: any = {};

  health: any = {};

  technology: any = {};


  constructor(
    private noticeService: NoticeService,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(paramsCountry => {
      this.noticeService.getCountry().subscribe(res => this.countries = res);

      this.getNoticesWorld(paramsCountry['id']);
      this.getNoticesSports(paramsCountry['ids']);
      this.getNoticesScience(paramsCountry['ids']);
      this.getNoticesEntertainment(paramsCountry['ids']);
      this.getNoticesHealth(paramsCountry['ids']);
      this.getNoticesTechnology(paramsCountry['ids']);
    });
  }

  buscar(termino: string) {
    this.noticeService.getNoticesWorld(termino).subscribe(data => this.resultado = data);
    this.noticeService.getNoticesBusiness(termino).subscribe(data => this.resultado = data);
    this.noticeService.getNoticesSports(termino).subscribe(data => this.resultado = data);
    this.noticeService.getNoticesScience(termino).subscribe(data => this.resultado = data);
    this.noticeService.getNoticesEntertainment(termino).subscribe(data => this.resultado = data);
    this.noticeService.getNoticesHealth(termino).subscribe(data => this.resultado = data);
    this.noticeService.getNoticesTechnology(termino).subscribe(data => this.resultado = data);
  }

  getNoticesBusiness(id: string) {
    this.noticeService.getNoticesBusiness(id).subscribe(world => this.world = world);
  }

  getNoticesWorld(id: string) {
    this.noticeService.getNoticesWorld(id).subscribe(business => this.business = business );
  }

  getNoticesSports(ids: string) {
    this.noticeService.getNoticesSports(ids).subscribe(sports => this.sport = sports);
  }

  getNoticesScience(ids: string) {
    this.noticeService.getNoticesScience(ids).subscribe(science => this.science = science);
  }

  getNoticesEntertainment(ids: string) {
    this.noticeService.getNoticesEntertainment(ids).subscribe(entertainment => this.entertainment = entertainment);
  }

  getNoticesHealth(ids: string) {
    this.noticeService.getNoticesHealth(ids).subscribe(health => this.health = health);
  }

  getNoticesTechnology(ids: string) {
    this.noticeService.getNoticesTechnology(ids).subscribe(technology => this.technology = technology);
  }

  searchNotice(text: string) {
    if (text.length === 0) {
      return;
    }

    this.router.navigate(['buscar', text]);
  }
}
