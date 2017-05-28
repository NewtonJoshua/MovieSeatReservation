import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Injectable()
export class ToastService {

  constructor(private toastyService: ToastyService, private toastyConfig: ToastyConfig) { }

  toast(data) {

    const toastOptions: ToastOptions = {
      title: data.title,
      msg: data.msg,
      showClose: true,
      timeout: 5000,
      theme: 'bootstrap'
    };
     this.toastyService[data.type](toastOptions);
    // this.toastyService.info(toastOptions);
    // this.toastyService.success(toastOptions);
    // this.toastyService.wait(toastOptions);
    // this.toastyService.error(toastOptions);
    // this.toastyService.warning(toastOptions);
  }


}
