import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCode'
})
export class FormatCodePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value)
    let {data} = JSON.parse(JSON.stringify(value))
    if (!data.properties) return ({})
    let obj = {}
    Object.keys(data.properties).map(key => obj[key] = data.properties[key].type)
    return obj;
  }

}
