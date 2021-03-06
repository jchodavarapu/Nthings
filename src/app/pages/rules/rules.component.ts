import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Rule } from 'src/app/core/models';

import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

const columns = [
  { key: 'name', title: 'name', width: '100px' },
  { key: 'description', title: 'description', width: '100px' },
  // { key: 'message_rate', title: 'message rate', width: '100px', template: 'message_rate' },
  { key: 'conditions', title: 'conditions', width: '100px' },
  { key: 'status', title: 'status', width: '100px', template: 'status' },
  { key: 'id', title: 'Actions', width: '100px', template: 'action' },
]
const colrsDict = {
  active: 'blue',
  discovered: 'green',
  inactive: 'volcano'
}
@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  rules: Observable<Rule[]>
  colrsDict = colrsDict
  columns = columns
  view: string = 'grid'


  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent, { static: false }) editor: JsonEditorComponent;

  constructor() {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    //this.options.mode = 'code'; //set only one mode

    this.data = { "products": [{ "name": "car", "product": [{ "name": "honda", "model": [{ "id": "civic", "name": "civic" }, { "id": "accord", "name": "accord" }, { "id": "crv", "name": "crv" }, { "id": "pilot", "name": "pilot" }, { "id": "odyssey", "name": "odyssey" }] }] }] }

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
    this.rules = from([[
      {
        name: 'Rule - 1',
        description: 'Awesome description',
        emails: 12,
        smss: 0,
        webhooks: 6,
        conditions: 5,
        status: 'active',
      },
      {
        name: 'Rule - 2',
        description: 'Awesome description',
        emails: 2,
        smss: 5,
        webhooks: 6,
        conditions: 7,
        status: 'active',
      },
      {
        name: 'Rule - 3',
        description: 'Awesome description',
        emails: 0,
        smss: 5,
        webhooks: 6,
        conditions: 8,
        status: 'inactive',
      },
      {
        name: 'Rule - 4',
        description: 'Awesome description',
        emails: 0,
        smss: 5,
        webhooks: 0,
        conditions: 15,
        status: 'active',
      },
      {
        name: 'Rule - 5',
        description: 'Awesome description',
        emails: 4,
        smss: 5,
        webhooks: 6,
        conditions: 9,
        status: 'inactive',
      },
      {
        name: 'Rule - 6',
        description: 'Awesome description',
        emails: 0,
        smss: 0,
        webhooks: 0,
        conditions: 5,
        status: 'inactive',
      },
      {
        name: 'Rule - 7',
        description: 'Awesome description',
        emails: 23,
        smss: 5,
        webhooks: 6,
        conditions: 5,
        status: 'active',
      },
      {
        name: 'Rule - 8',
        description: 'Awesome description',
        emails: 31,
        smss: 5,
        webhooks: 0,
        conditions: 5,
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
