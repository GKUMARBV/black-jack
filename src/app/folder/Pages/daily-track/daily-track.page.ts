import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-track',
  templateUrl: './daily-track.page.html',
  styleUrls: ['./daily-track.page.scss'],
})
export class DailyTrackPage implements OnInit {
  dailytrack: any = [];
  totalAmount: any = 0;

  constructor() {}

  ngOnInit() {
    console.log('Daily track !');
    const localData = JSON.parse(
      JSON.stringify(localStorage.getItem('dataSource'))
    );
    if (localData && localData.length) {
      const localDataVal = JSON.parse(localData).reverse();
      console.log('localDataVal : ' + JSON.stringify(localDataVal));
      this.dailytrack = localDataVal.sort(this.sortFunction);
      this.getTotalAmount(localDataVal);
    }
  }

  getTotalAmount(localDataVal: any) {
    this.totalAmount = localDataVal.reduce((accumulator: any, object: any) => {
      let amount = object.amount - 50000;
      return accumulator + amount;
    }, 0);
  }

  sortFunction(a: any, b: any) {
    var dateA = new Date(a.sortDate).getTime();
    var dateB = new Date(b.sortDate).getTime();
    return dateA > dateB ? -1 : 1;
  }

  removeItem(id: any) {
    console.log('index : ' + JSON.stringify(id));
    const localData = JSON.parse(
      JSON.stringify(localStorage.getItem('dataSource'))
    );
    if (localData && localData.length) {
      let removeElement = JSON.parse(localData).reverse();
      const localDataVal = removeElement.filter((item: any, index: number) => {
        return item?.id !== id;
      });
      this.dailytrack = localDataVal.sort(this.sortFunction);
      this.getTotalAmount(localDataVal);
      localStorage.setItem('dataSource', JSON.stringify(this.dailytrack));
    }
  }

  getAmount(val: any) {
    let minusInitial = val - 50000;
    return minusInitial.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
  }

  getColor(amount: any) {
    return amount < 0;
  }
}
