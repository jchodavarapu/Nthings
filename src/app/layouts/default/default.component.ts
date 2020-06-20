import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;

  addWhitebg() {
    document.getElementById('inner-content').className = "inner-content inner-content-white-bg "
    return true
  }
  removeWhitebg() {
    document.getElementById('inner-content').className = "inner-content"
    return true
  }
  ngOnInit() { }
}
