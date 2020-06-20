import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Device } from 'src/app/core/models';
import { QueryBuilderConfig } from 'angular2-query-builder';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
  index = 0;
  selIndex = 0;
  emails: string[] = [];
  smss: string[] = [];
  webhooks: string[] = [];
  devices: Observable<Device[]>

  inputEmailVisible = false;
  inputEmailValue = '';

  inputSmsVisible = false;
  inputSmsValue = '';

  inputWebhookVisible = false;
  inputWebhookValue = '';

  @ViewChild('inputElement', { static: false }) inputElement: ElementRef;

  query = {
    condition: 'and',
    rules: [
      { field: 'age', operator: '<=', value: 'Bob' },
      { field: 'gender', operator: '>=', value: 'm' }
    ]
  };

  config: QueryBuilderConfig = {
    fields: {
      age: { name: 'Age', type: 'number' },
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          { name: 'Male', value: 'm' },
          { name: 'Female', value: 'f' }
        ]
      }
    }
  }
  constructor() { }

  ngOnInit() {
    this.devices = from([[
      {
        name: 'temperature sensor',
        description: 'Awesome decription',
        message_rate: 12,
        image: 'https://cdn1-shop.mikroe.com/img/product/lm35-sensor/lm35-sensor-thickbox_default-12x.jpg',
        channels: 5,
        status: 'active',
      },
      {
        name: 'proximity sensor',
        description: 'Awesome decription',
        message_rate: 2,
        image: 'https://images-na.ssl-images-amazon.com/images/I/411Vi6amGwL._SX342_.jpg',
        channels: 7,
        status: 'active',
      },
      {
        name: 'gas sensor',
        description: 'Awesome decription',
        message_rate: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiehiZ3U6AjfBlr8N7FqPoOgXAPsE3lJJSWXYxI1mmCaB1780V&usqp=CAU',
        channels: 8,
        status: 'active',
      },
      {
        name: 'humidity sensor',
        description: 'Awesome decription',
        message_rate: 1,
        image: null,
        channels: 15,
        status: 'active',
      },
    ]])
  }

  onIndexChange(index: number): void {
    this.index = index;
  }

  handleEmailClose(removedTag: {}): void {
    this.emails = this.emails.filter(tag => tag !== removedTag);
  }

  sliceEmailName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showEmailInput(): void {
    this.inputEmailVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  handleEmailInputConfirm(): void {
    if (this.inputEmailValue && this.emails.indexOf(this.inputEmailValue) === -1) {
      this.emails = [...this.emails, this.inputEmailValue];
    }
    this.inputEmailValue = '';
    this.inputEmailVisible = false;
  }

  handleSmsClose(removedTag: {}): void {
    this.smss = this.smss.filter(tag => tag !== removedTag);
  }

  sliceSmsName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showSmsInput(): void {
    this.inputSmsVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  handleSmsInputConfirm(): void {
    if (this.inputSmsValue && this.smss.indexOf(this.inputSmsValue) === -1) {
      this.smss = [...this.smss, this.inputSmsValue];
    }
    this.inputSmsValue = '';
    this.inputSmsVisible = false;
  }

  handleWebhookClose(removedTag: {}): void {
    this.webhooks = this.webhooks.filter(tag => tag !== removedTag);
  }

  sliceWebhookName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showWebhookInput(): void {
    this.inputWebhookVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  handleWebhookInputConfirm(): void {
    if (this.inputWebhookValue && this.webhooks.indexOf(this.inputWebhookValue) === -1) {
      this.webhooks = [...this.webhooks, this.inputWebhookValue];
    }
    this.inputWebhookValue = '';
    this.inputWebhookVisible = false;
  }

}
