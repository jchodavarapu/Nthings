import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Format } from 'src/app/core/models';

const columns = [
  { key: 'name', title: 'name', width: '100px' },
  { key: 'description', title: 'description', width: '100px' },
  // { key: 'message_rate', title: 'message rate', width: '100px', template: 'message_rate' },
  { key: 'channels', title: 'channels', width: '100px' },
  { key: 'status', title: 'status', width: '100px' },
  { key: 'id', title: 'Actions', width: '100px', template: 'action' },
]
@Component({
  selector: 'app-formats',
  templateUrl: './formats.component.html',
  styleUrls: ['./formats.component.css']
})
export class FormatsComponent implements OnInit {
  formats: Observable<Format[]>
  columns = columns
  view: string = 'grid'

  constructor() {
  }

  ngOnInit() {
    this.formats = from([[
      {
        name: 'Format - 1',
        description: 'Awesome decription',
        channels: 5,
        status: 'active',
      },
      {
        name: 'Format - 2',
        description: 'Awesome decription',
        channels: 7,
        status: 'active',
      },
      {
        name: 'Format - 3',
        description: 'Awesome decription',
        channels: 8,
        status: 'active',
      },
      {
        name: 'Format - 4',
        description: 'Awesome decription',
        channels: 15,
        status: 'active',
      },
      {
        name: 'Format - 5',
        description: 'Awesome decription',
        channels: 9,
        status: 'active',
      },
      {
        name: 'Format - 6',
        description: 'Awesome decription',
        channels: 5,
        status: 'active',
      },
      {
        name: 'Format - 7',
        description: 'Awesome decription',
        channels: 5,
        status: 'active',
      },
      {
        name: 'Format - 8',
        description: 'Awesome decription',
        channels: 5,
        status: 'active',
      },
    ]])
  }

  toggleView(view: string) {
    if (this.view != view)
      this.view = view;
    else {
      this.view = this.view === 'list' ? 'grid' : 'list';
    }
  }

}
