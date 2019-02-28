import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  query: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  search(event) {
    this.api.query.next(event);
  }

}
