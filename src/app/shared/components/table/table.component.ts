import { Component, OnInit, Input } from '@angular/core';
import { PagerService } from '../../services/pagination.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() items: any[] = [];
  search: string;
  pager: any = {};
  pagedItems: any[];
  pageSize = 5;
  displayItems = [];

  constructor(private pagerService: PagerService) { }

  ngOnInit() {
    this.setPage(1);
    this.displayItems = this.items.slice(0, this.pageSize);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.items.length, page, this.pageSize);

    // get current page of items
    this.displayItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  setPageSize(size: number) {
    this.pageSize = size;
    this.displayItems = this.items.slice(0, this.pageSize);
  }



}
