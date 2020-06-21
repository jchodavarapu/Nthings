import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css']
})
export class FormatComponent implements OnInit {
  models;
  schema;
  data;

  constructor() { }

  addWhitebg() {
    document.getElementById('inner-content').className = "inner-content inner-content-white-bg "
    return true
  }
  removeWhitebg() {
    document.getElementById('inner-content').className = "inner-content"
    return true
  }
  ngOnInit(): void {
    this.models = [
      {
        'name': 'Format',
        'nameSpace': 'format',
        'data': {
          'type': ['object'],
          'properties': {
            'name': {
              'type': ['string']
            }
          }
        }
      }
    ];

    this.schema = this.models[0];
  }

}
