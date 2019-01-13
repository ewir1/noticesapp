import { Component } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {

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
          .getNoticesBusiness(paramsNotice['ids'])
          .subscribe(res => res);
      }, 3000);

        this.loading = true;
    });
  }

}
