import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Role } from 'src/app/core/models';
import { Observable, from } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
const columns = [
  { key: 'name', title: 'name', width: '100px' },
  { key: 'description', title: 'description', width: '100px' },
  { key: 'users', title: 'users', width: '100px' },
  { key: 'status', title: 'status', width: '100px' },
  { key: 'id', title: 'Actions', width: '100px', template: 'action' },
]
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  models: any;
  roles: Observable<Role[]>
  columns = columns
  view: string = 'grid'
  tplModal: NzModalRef;
  tplModalButtonLoading: boolean = false;

  users = ['User 1', 'User 2'];
  inputUserVisible = false;
  inputUserValue = '';

  permissions = ['Permission 1', 'Permission 2'];
  inputPermissionVisible = false;
  inputPermissionValue = '';

  @ViewChild('inputElement', { static: false }) inputElement: ElementRef;


  constructor(private modalService: NzModalService) { }

  addWhitebg() {
    document.getElementById('inner-content').className = "inner-content inner-content-white-bg "
    return true
  }
  removeWhitebg() {
    document.getElementById('inner-content').className = "inner-content"
    return true
  }
  ngOnInit() {
    this.roles = from([[
      {
        name: 'Admin',
        description: 'Awesome decription',
        users: 5,
        status: 'active',
      },
      {
        name: 'Operator',
        description: 'Awesome decription',
        users: 7,
        status: 'active',
      },
      {
        name: 'Maintainer',
        description: 'Awesome decription',
        users: 8,
        status: 'active',
      },
      {
        name: 'Default',
        description: 'Awesome decription',
        users: 15,
        status: 'active',
      },
      {
        name: 'Manager',
        description: 'Awesome decription',
        users: 9,
        status: 'active',
      },
      {
        name: 'Custom role',
        description: 'Awesome decription',
        users: 5,
        status: 'active',
      },
      {
        name: 'Default role',
        description: 'Awesome decription',
        users: 5,
        status: 'active',
      },
      {
        name: 'Superadmin',
        description: 'Awesome decription',
        users: 5,
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

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }

  handlePermissionClose(removedTag: {}): void {
    this.permissions = this.permissions.filter(tag => tag !== removedTag);
  }

  slicePermissionName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showPermissionInput(): void {
    this.inputPermissionVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  handlePermissionInputConfirm(): void {
    if (this.inputPermissionValue && this.permissions.indexOf(this.inputPermissionValue) === -1) {
      this.permissions = [...this.permissions, this.inputPermissionValue];
    }
    this.inputPermissionValue = '';
    this.inputPermissionVisible = false;
  }
}
