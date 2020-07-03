import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;

  constructor(public router: Router, private message: NzMessageService) { }
  addWhitebg() {
    document.getElementById('inner-content').className = "inner-content inner-content-white-bg "
    return true
  }
  removeWhitebg() {
    document.getElementById('inner-content').className = "inner-content"
    return true
  }
  ngOnInit() { }
  logout() {
    localStorage.clear();
    this.message.create('success', 'Logged out');
    this.router.navigate(["/auth/signin"]);

  }
}
