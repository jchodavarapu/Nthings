import { Component, OnInit, TemplateRef } from '@angular/core';
import { Device, Channel } from 'src/app/core/models';
import { Observable, from } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
const columns = [
  { key: 'name', title: 'name', width: '100px' },
  { key: 'description', title: 'description', width: '100px' },
  { key: 'message_rate', title: 'message rate', width: '100px', template: 'message_rate' },
  { key: 'devices', title: 'devices', width: '100px' },
  { key: 'status', title: 'status', width: '100px', template: 'status' },
]
const colrsDict = {
  active: 'blue',
  discovered: 'green',
  inactive: 'volcano'
}
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  channels: Observable<Channel[]>
  columns = columns
  colrsDict = colrsDict

  tplRunModal: NzModalRef;
  tplRunModalButtonLoading: boolean = false;

  tplConnectionModal: NzModalRef;
  tplConnectionModalButtonLoading: boolean = false;

  device: Device = {
    name: 'temperature sensor',
    description: 'Awesome description',
    message_rate: 12,
    image: 'https://cdn1-shop.mikroe.com/img/product/lm35-sensor/lm35-sensor-thickbox_default-12x.jpg',
    channels: 4,
    status: 'active',
  }
  constructor(private modalService: NzModalService) {
    this.channels = from([[
      {
        name: 'Channel - 1',
        description: 'Awesome description',
        message_rate: 12,
        devices: 5,
        status: 'active',
      },
      {
        name: 'Channel - 2',
        description: 'Awesome description',
        message_rate: 2,
        devices: 7,
        status: 'active',
      },
      {
        name: 'Channel - 3',
        description: 'Awesome description',
        message_rate: 0,
        devices: 8,
        status: 'active',
      },
      {
        name: 'Channel - 4',
        description: 'Awesome description',
        message_rate: 1,
        devices: 15,
        status: 'inactive',
      }
    ]])
  }

  ngOnInit() {
  }
  addWhitebg() {
    document.getElementById('inner-content').className = "inner-content inner-content-white-bg "
    return true
  }


  createTplRunModal(tplRunTitle: TemplateRef<{}>, tplRunContent: TemplateRef<{}>, tplRunFooter: TemplateRef<{}>): void {
    this.tplRunModal = this.modalService.create({
      nzTitle: tplRunTitle,
      nzContent: tplRunContent,
      nzFooter: tplRunFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplRunModal(type: string): void {
    if (type === 'cancel') {
      this.tplRunModal.destroy();
      return
    }
    this.tplRunModalButtonLoading = true;
    setTimeout(() => {
      this.tplRunModalButtonLoading = false;
      this.tplRunModal.destroy();
    }, 1000);
  }

  createTplConnectionModal(tplConnectionTitle: TemplateRef<{}>, tplConnectionContent: TemplateRef<{}>, tplConnectionFooter: TemplateRef<{}>): void {
    this.tplConnectionModal = this.modalService.create({
      nzTitle: tplConnectionTitle,
      nzContent: tplConnectionContent,
      nzFooter: tplConnectionFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplConnectionModal(type: string): void {
    if (type === 'cancel') {
      this.tplConnectionModal.destroy();
      return
    }
    this.tplConnectionModalButtonLoading = true;
    setTimeout(() => {
      this.tplConnectionModalButtonLoading = false;
      this.tplConnectionModal.destroy();
    }, 1000);
  }
}
