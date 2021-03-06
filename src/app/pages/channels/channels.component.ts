import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Channel } from 'src/app/core/models';
import { Observable, from } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
const columns = [
  { key: 'name', title: 'name', width: '100px' },
  { key: 'description', title: 'description', width: '100px' },
  { key: 'message_rate', title: 'message rate', width: '100px', template: 'message_rate' },
  { key: 'devices', title: 'devices', width: '100px' },
  { key: 'status', title: 'status', width: '100px', template: 'status' },
  { key: 'id', title: 'Actions', width: '100px', template: 'action' },
]
const colrsDict = {
  active: 'blue',
  discovered: 'green',
  inactive: 'volcano'
}
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  channels: Observable<Channel[]>
  columns = columns
  colrsDict = colrsDict
  view: string = 'grid'
  tplModal: NzModalRef;
  tplModalButtonLoading: boolean = false;


  devices = ["temperature sensor", "proximity sensor",];
  inputDeviceVisible = false;
  inputDeviceValue = '';

  filters = ['Filter - 1', 'Filter - 2'];
  inputFilterVisible = false;
  inputFilterValue = '';

  deviceOptions = ["temperature sensor", "proximity sensor", "gas sensor", "humidity sensor", "humidity sensor", "color sensor", "ir sensor", "smoke sensor"]
  filteredDeviceOptions = []

  filterOptions = ["Filter - 1", "Filter - 2", "Filter - 3", "Filter - 4", "Filter - 5", "Filter - 6", "Filter - 7", "Filter - 8"]
  filteredFilterOptions = []
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
      },
      {
        name: 'Channel - 5',
        description: 'Awesome description',
        message_rate: 4,
        devices: 9,
        status: 'active',
      },
      {
        name: 'Channel - 6',
        description: 'Awesome description',
        message_rate: 0,
        devices: 5,
        status: 'inactive',
      },
      {
        name: 'Channel - 7',
        description: 'Awesome description',
        message_rate: 23,
        devices: 5,
        status: 'inactive',
      },
      {
        name: 'Channel - 8',
        description: 'Awesome description',
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
  onDeviceInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (value)
      this.filteredDeviceOptions =
        this.deviceOptions.filter(option => (option.toLowerCase().indexOf(value.toLowerCase()) !== -1) && !this.devices.includes(option));
  }
  onFilterInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (value)
      this.filteredFilterOptions =
        this.filterOptions.filter(option => (option.toLowerCase().indexOf(value.toLowerCase()) !== -1) && !this.filters.includes(option));
  }

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
    if (this.inputDeviceValue && this.deviceOptions.includes(this.inputDeviceValue) && this.devices.indexOf(this.inputDeviceValue) === -1) {
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
    if (this.inputFilterValue && this.filterOptions.includes(this.inputFilterValue) && this.filters.indexOf(this.inputFilterValue) === -1) {
      this.filters = [...this.filters, this.inputFilterValue];
    }
    this.inputFilterValue = '';
    this.inputFilterVisible = false;
  }
}
