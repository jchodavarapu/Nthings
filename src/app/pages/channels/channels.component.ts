import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Channel } from 'src/app/core/models';
import { Observable, from } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { UploadFile } from 'ng-zorro-antd/upload';
const columns = [
  { key: 'name', title: 'name', width: '100px' },
  { key: 'description', title: 'description', width: '100px' },
  { key: 'message_rate', title: 'message rate', width: '100px', template: 'message_rate' },
  { key: 'devices', title: 'devices', width: '100px' },
  { key: 'status', title: 'status', width: '100px' },
  { key: 'id', title: 'Actions', width: '100px', template: 'action' },
]
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  channels: Observable<Channel[]>
  columns = columns
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


  devices = ['Device 1', 'Device 2'];
  inputDeviceVisible = false;
  inputDeviceValue = '';

  filters = ['Filter 1', 'Filter 2'];
  inputFilterVisible = false;
  inputFilterValue = '';

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
    this.channels = from([[
      {
        name: 'Channel - 1',
        description: 'Awesome decription',
        message_rate: 12,
        devices: 5,
        status: 'active',
      },
      {
        name: 'Channel - 2',
        description: 'Awesome decription',
        message_rate: 2,
        devices: 7,
        status: 'active',
      },
      {
        name: 'Channel - 3',
        description: 'Awesome decription',
        message_rate: 0,
        devices: 8,
        status: 'active',
      },
      {
        name: 'Channel - 4',
        description: 'Awesome decription',
        message_rate: 1,
        devices: 15,
        status: 'active',
      },
      {
        name: 'Channel - 5',
        description: 'Awesome decription',
        message_rate: 4,
        devices: 9,
        status: 'active',
      },
      {
        name: 'Channel - 6',
        description: 'Awesome decription',
        message_rate: 0,
        devices: 5,
        status: 'active',
      },
      {
        name: 'Channel - 7',
        description: 'Awesome decription',
        message_rate: 23,
        devices: 5,
        status: 'active',
      },
      {
        name: 'Channel - 8',
        description: 'Awesome decription',
        message_rate: 31,
        devices: 5,
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

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };


  handleDeviceClose(removedTag: {}): void {
    this.devices = this.devices.filter(tag => tag !== removedTag);
  }

  sliceDeviceName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showDeviceInput(): void {
    this.inputDeviceVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  handleDeviceInputConfirm(): void {
    if (this.inputDeviceValue && this.devices.indexOf(this.inputDeviceValue) === -1) {
      this.devices = [...this.devices, this.inputDeviceValue];
    }
    this.inputDeviceValue = '';
    this.inputDeviceVisible = false;
  }


  handleFilterClose(removedTag: {}): void {
    this.filters = this.filters.filter(tag => tag !== removedTag);
  }

  sliceFilterName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showFilterInput(): void {
    this.inputFilterVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  handleFilterInputConfirm(): void {
    if (this.inputFilterValue && this.filters.indexOf(this.inputFilterValue) === -1) {
      this.filters = [...this.filters, this.inputFilterValue];
    }
    this.inputFilterValue = '';
    this.inputFilterVisible = false;
  }
}
