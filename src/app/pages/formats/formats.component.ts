import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Format } from 'src/app/core/models';

const columns = [
  { key: 'name', title: 'name', width: '100px' },
  { key: 'description', title: 'description', width: '100px' },
  // { key: 'message_rate', title: 'message rate', width: '100px', template: 'message_rate' },
  { key: 'channels', title: 'channels', width: '100px' },
  { key: 'status', title: 'status', width: '100px', template: 'status' },
  { key: 'id', title: 'Actions', width: '100px', template: 'action' },
]
const colrsDict = {
  active: 'blue',
  discovered: 'green',
  inactive: 'volcano'
}
@Component({
  selector: 'app-formats',
  templateUrl: './formats.component.html',
  styleUrls: ['./formats.component.css']
})
export class FormatsComponent implements OnInit {
  formats: Observable<Format[]>
  columns = columns
  colrsDict = colrsDict
  view: string = 'grid'

  constructor() {
  }

  addWhitebg() {
    document.getElementById('inner-content').className = "inner-content inner-content-white-bg "
    return true
  }
  removeWhitebg() {
    document.getElementById('inner-content').className = "inner-content"
    return true
  }
  ngOnInit() {
    this.formats = from([[
      {
        name: 'Format - 1',
        description: 'Awesome description',
        channels: 5,
        status: 'active',
      },
      {
        name: 'Format - 2',
        description: 'Awesome description',
        channels: 7,
        status: 'inactive',
      },
      {
        name: 'Format - 3',
        description: 'Awesome description',
        channels: 8,
        status: 'active',
      },
      {
        name: 'Format - 4',
        description: 'Awesome description',
        channels: 15,
        status: 'active',
      },
      {
        name: 'Format - 5',
        description: 'Awesome description',
        channels: 9,
        status: 'inactive',
      },
      {
        name: 'Format - 6',
        description: 'Awesome description',
        channels: 5,
        status: 'inactive',
      },
      {
        name: 'Format - 7',
        description: 'Awesome description',
        channels: 5,
        status: 'active',
      },
      {
        name: 'Format - 8',
        description: 'Awesome description',
        channels: 5,
        status: 'inactive',
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
