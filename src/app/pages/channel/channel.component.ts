import { Component, OnInit, TemplateRef } from '@angular/core';
import { Device, Channel } from 'src/app/core/models';
import { Observable, from } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
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
  inactive: 'volcano'
}
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  channels: Observable<Channel[]>
  columns = columns
  colrsDict = colrsDict

  tplRunModal: NzModalRef;
  tplRunModalButtonLoading: boolean = false;

  tplConnectionModal: NzModalRef;
  tplConnectionModalButtonLoading: boolean = false;

  channel: Channel = {
    name: 'Channel - 1',
    description: 'Awesome description',
    message_rate: 12,
    devices: 5,
    status: 'active',
  }
  devices: Observable<Device[]>

  constructor(private modalService: NzModalService) {
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
