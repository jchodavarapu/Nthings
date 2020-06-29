import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/core/models';
import { Observable, from } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { UploadFile } from 'ng-zorro-antd/upload';
const columns = [
  { key: 'firstName', title: 'first name', width: '100px' },
  { key: 'lastName', title: 'last name', width: '100px' },
  { key: 'email', title: 'email', width: '100px' },
  // { key: 'cover_image', title: 'cover image', width: '100px', template: 'image' },
  { key: 'profile_image', title: 'profile image', width: '100px', template: 'image' },
  // { key: 'role', title: 'role', width: '100px' },
  { key: 'status', title: 'status', width: '100px', template: 'status' },
  { key: 'id', title: 'Actions', width: '100px', template: 'action' },
]
const colrsDict = {
  active: 'blue',
  discovered: 'green',
  inactive: 'volcano'
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>
  columns = columns
  colrsDict = colrsDict
  view: string = 'grid'
  tplModal: NzModalRef;
  tplModalButtonLoading: boolean = false;

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [
    // {
    //   uid: -1,
    //   name: 'xxx.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    // }
  ];
  previewImage: string | undefined = '';
  previewVisible = false;


  roles = ["Admin", "Operator"];
  inputRoleVisible = false;
  inputRoleValue = '';

  roleOptions = ["Admin", "Operator", "Maintainer", "Default", "Manager", "Custom role", "Default role", "Superadmin"]
  filteredRoleOptions = []

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
    this.users = from([[
      {
        firstName: 'john',
        lastName: 'doe',
        email: 'john@doe.com',
        role: 'manager',
        status: 'inactive',
        cover_image: null,
        profile_image: null,
      },
      {
        firstName: 'jane',
        lastName: 'doe',
        email: 'jan@doe.com',
        role: 'admin',
        status: 'active',
        cover_image: null,
        profile_image: null,
      },
      {
        firstName: 'mary',
        lastName: 'doe',
        email: 'john@doe.com',
        role: 'manager',
        status: 'active',
        cover_image: null,
        profile_image: null,
      },
      {
        firstName: 'john',
        lastName: 'wick',
        email: 'john@wick.com',
        role: 'manager',
        status: 'active',
        cover_image: null,
        profile_image: null,
      },
      {
        firstName: 'martin',
        lastName: 'king',
        email: 'martin@king.com',
        role: 'manager',
        status: 'active',
        cover_image: null,
        profile_image: null,
      },
      {
        firstName: 'will',
        lastName: 'smith',
        email: 'will@smith.com',
        role: 'superadmin',
        status: 'inactive',
        cover_image: null,
        profile_image: null,
      },
      {
        firstName: 'lil',
        lastName: 'wayn',
        email: 'lil@wayn.com',
        role: 'manager',
        status: 'inactive',
        cover_image: null,
        profile_image: null,
      },
      {
        firstName: 'anna',
        lastName: 'dominic',
        email: 'anna@dominic.com',
        role: 'default',
        status: 'active',
        cover_image: null,
        profile_image: null,
      }
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

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };



  handleRoleClose(removedTag: {}): void {
    this.roles = this.roles.filter(tag => tag !== removedTag);
  }

  sliceRoleName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showRoleInput(): void {
    this.inputRoleVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }
  onRoleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (value)
      this.filteredRoleOptions =
        this.roleOptions.filter(option => (option.toLowerCase().indexOf(value.toLowerCase()) !== -1) && !this.roles.includes(option));
  }
  handleRoleInputConfirm(): void {
    if (this.inputRoleValue && this.roleOptions.includes(this.inputRoleValue) && this.roles.indexOf(this.inputRoleValue) === -1) {
      this.roles = [...this.roles, this.inputRoleValue];
    }
    this.inputRoleValue = '';
    this.inputRoleVisible = false;
  }

}
