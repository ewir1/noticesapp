import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
  })
export class NoimagePipe implements PipeTransform {
  transform(images: any): string {
    if (!images) {
      return 'assets/img/noimage.png';
    }

    if (images.urlToImage) {
      return images.urlToImage;
    }
    return 'assets/img/noimage.png';

    return null;
  }
}
