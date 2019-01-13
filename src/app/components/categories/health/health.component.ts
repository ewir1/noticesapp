import { Component } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent {

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
          .getNoticesHealth(paramsNotice['ids'])
          .subscribe(res => res);
      }, 3000);

      this.loading = true;
    });
  }

}
