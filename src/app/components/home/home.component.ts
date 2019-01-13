import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  latam: any[] = [];

  loading: boolean;

  constructor(
    public noticeService: NoticeService,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe(paramsNotice => {
      this.noticeService.getNoticesWorld(paramsNotice['id']).subscribe(res => res);

      this.loading = true;

      this.noticeService.getLatam().subscribe(res => {
        setTimeout(() => {
          this.loading = false;
          this.latam = res;
        }, 3000);

        this.loading = true;
      });

    });

  }

}

