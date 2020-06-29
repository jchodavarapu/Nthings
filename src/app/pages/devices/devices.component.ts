import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Device } from 'src/app/core/models';
import { Observable, from } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { UploadFile } from 'ng-zorro-antd/upload';
const columns = [
  { key: 'name', title: 'name', width: '100px' },
  { key: 'description', title: 'description', width: '100px' },
  { key: 'message_rate', title: 'message rate', width: '100px', template: 'message_rate' },
  { key: 'image', title: 'image', width: '100px', template: 'image' },
  { key: 'channels', title: 'channels', width: '100px' },
  { key: 'status', title: 'status', width: '100px', template: 'status' },
  { key: 'id', title: 'Actions', width: '100px', template: 'action' },
]
const colrsDict = {
  active: 'blue',
  discovered: 'green',
  disconnected: 'volcano'
}
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: Observable<Device[]>
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


  channels = ['Channel - 1', 'Channel - 2'];
  inputChannelVisible = false;
  inputChannelValue = '';

  formats = ['Format - 1', 'Format - 2'];
  inputFormatVisible = false;
  inputFormatValue = '';

  channelOptions = ["Channel - 1", "Channel - 2", "Channel - 3", "Channel - 4", "Channel - 5", "Channel - 6", "Channel - 7", "Channel - 8"]
  filteredChannelOptions = []

  formatOptions = ["Format - 1", "Format - 2", "Format - 3", "Format - 4", "Format - 5", "Format - 6", "Format - 7", "Format - 8"]
  filteredFormatOptions = []
  @ViewChild('inputElement', { static: false }) inputElement: ElementRef;


  constructor(private modalService: NzModalService) { }
  onChannelInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (value)
      this.filteredChannelOptions =
        this.channelOptions.filter(option => (option.toLowerCase().indexOf(value.toLowerCase()) !== -1) && !this.channels.includes(option));
  }
  onFormatInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (value)
      this.filteredFormatOptions =
        this.formatOptions.filter(option => (option.toLowerCase().indexOf(value.toLowerCase()) !== -1) && !this.formats.includes(option));
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
    this.devices = from([[
      {
        name: 'temperature sensor',
        description: 'Awesome description',
        message_rate: 12,
        image: 'https://cdn1-shop.mikroe.com/img/product/lm35-sensor/lm35-sensor-thickbox_default-12x.jpg',
        channels: 5,
        status: 'active',
      },
      {
        name: 'proximity sensor',
        description: 'Awesome description',
        message_rate: 2,
        image: 'https://images-na.ssl-images-amazon.com/images/I/411Vi6amGwL._SX342_.jpg',
        channels: 7,
        status: 'discovered',
      },
      {
        name: 'gas sensor',
        description: 'Awesome description',
        message_rate: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiehiZ3U6AjfBlr8N7FqPoOgXAPsE3lJJSWXYxI1mmCaB1780V&usqp=CAU',
        channels: 8,
        status: 'disconnected',
      },
      {
        name: 'humidity sensor',
        description: 'Awesome description',
        message_rate: 1,
        image: null,
        channels: 15,
        status: 'active',
      },
      {
        name: 'humidity sensor',
        description: 'Awesome description',
        message_rate: 4,
        image: 'https://foxlabstore.com/wp-content/uploads/2019/01/DHT11-Temprature-and-Humidity-Sensor-Module-main.jpg',
        channels: 9,
        status: 'discovered',
      },
      {
        name: 'color sensor',
        description: 'Awesome description',
        message_rate: 0,
        image: 'https://5.imimg.com/data5/DK/PR/MY-47838441/tcs-3200-color-sensor-500x500.jpg',
        channels: 5,
        status: 'disconnected',
      },
      {
        name: 'ir sensor',
        description: 'Awesome description',
        message_rate: 23,
        image: 'https://i0.wp.com/www.nuttyengineer.com/wp-content/uploads/2016/10/IR-sensor.jpg?fit=800%2C800&ssl=1',
        channels: 5,
        status: 'active',
      },
      {
        name: 'smoke sensor',
        description: 'Awesome description',
        message_rate: 31,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZ8vW40OPUw92VvL21T927hYZoR55cK6E3y2sO0j9yhpjOvJDL&usqp=CAU',
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



  handleChannelClose(removedTag: {}): void {
    this.channels = this.channels.filter(tag => tag !== removedTag);
  }

  sliceChannelName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showChannelInput(): void {
    this.inputChannelVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  handleChannelInputConfirm(): void {
    if (this.inputChannelValue && this.channelOptions.includes(this.inputChannelValue) && this.channels.indexOf(this.inputChannelValue) === -1) {
      this.channels = [...this.channels, this.inputChannelValue];
    }
    this.inputChannelValue = '';
    this.inputChannelVisible = false;
  }


  handleFormatClose(removedTag: {}): void {
    this.formats = this.formats.filter(tag => tag !== removedTag);
  }

  sliceFormatName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showFormatInput(): void {
    this.inputFormatVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  handleFormatInputConfirm(): void {
    if (this.inputFormatValue && this.formatOptions.includes(this.inputFormatValue) && this.formats.indexOf(this.inputFormatValue) === -1) {
      this.formats = [...this.formats, this.inputFormatValue];
    }
    this.inputFormatValue = '';
    this.inputFormatVisible = false;
  }
}
