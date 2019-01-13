import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  search = '';

  constructor(public noticeService: NoticeService, public route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      if (params['text']) {
        this.search = params['text'];
        this.searchNotice();
      }
    });
  }

  searchNotice() {
    if (this.search.length === 0) {
      return;
    }

    this.noticeService.searchNotice(this.search)
        .subscribe();
  }

}
