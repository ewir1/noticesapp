import { Component } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent {

  loading: boolean;

  constructor(
    public noticeService: NoticeService,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe(paramsNotice => {

      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.noticeService
          .getNoticesEntertainment(paramsNotice['ids'])
          .subscribe(res => res);
      }, 3000);

      this.loading = true;
    });
  }

}
