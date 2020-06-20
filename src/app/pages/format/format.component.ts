import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css']
})
export class FormatComponent implements OnInit {
  models: any
  constructor() { }

  addWhitebg() {
    document.getElementById('inner-content').className = "inner-content inner-content-white-bg "
    return true
  }
  removeWhitebg() {
    document.getElementById('inner-content').className = "inner-content"
    return true
  }
  ngOnInit() {

    this.models = [
      {
        'name': 'Address',
        'nameSpace': 'address',
        'data': {
          'type': ['object']
        }
      },
      {
        'name': 'Person',
        'nameSpace': 'person',
        'data': {
          'type': 'object',
          'properties': {
            'name': {
              'type': 'string',
              'minLength': 3,
              'maxLength': 255
            },
            'age': {
              'type': 'integer',
              'minimum': 18
            }
          },
          'required': [
            'name',
            'age'
          ]
        }
      }

    ];
  }

}
