import { Component, OnInit } from '@angular/core';
import { Device, Channel } from 'src/app/core/models';
import { Observable, from } from 'rxjs';
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
  device: Device = {
    name: 'temperature sensor',
    description: 'Awesome description',
    message_rate: 12,
    image: 'https://cdn1-shop.mikroe.com/img/product/lm35-sensor/lm35-sensor-thickbox_default-12x.jpg',
    channels: 4,
    status: 'active',
  }
  constructor() {
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
}
