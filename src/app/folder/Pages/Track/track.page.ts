import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  public tractList: any = [];
  public traceListReverse: any = [];
  public amount: any = 500;
  public currentIndex = 1;
  public lastType: any = '';
  public doubleValue: any = false;
  public blackJackValue: any = false;
  public currentAmount: any = 50000;
  public currentAmountChange: any = 0;
  public count: any = 0;
  splitArray: any = [];

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  getType = (type: any) => {
    if (this.doubleValue) {
      return 'DOUBLE';
    } else {
      return type;
    }
  };

  getChange = () => {
    return this.currentAmountChange < 10000;
  };

  buttonClick(type: string) {
    this.count = this.count + 1;
    let currentAmount = this.amount;
    if (this.doubleValue) {
      currentAmount = currentAmount * 2;
    }
    let lastAmount =
      this.tractList[this.tractList.length - 1] &&
      this.tractList[this.tractList.length - 1]['lp']
        ? this.tractList[this.tractList.length - 1]['lp']
        : 0;
    if (this.lastType == type) {
      this.currentIndex = this.currentIndex + 1;
    } else {
      this.currentIndex = 1;
    }
    this.lastType = type;
    if (type == 'WIN') {
      let cal = Number(lastAmount) + Number(currentAmount);
      this.tractList.push({
        index: this.tractList.length,
        type: this.getType(type),
        amount: this.amount,
        lp: cal,
        count: this.currentIndex,
      });
      this.amount =
        this.tractList[this.tractList.length - 1] &&
        this.tractList[this.tractList.length - 1]['amount']
          ? Number(this.tractList[this.tractList.length - 1]['amount']) - 500
            ? Number(this.tractList[this.tractList.length - 1]['amount']) - 500
            : 500
          : 500;
    } else if (type == 'LOSS') {
      let cal = Number(lastAmount) - Number(currentAmount);
      let initialValue = -500;
      if (this.doubleValue) {
        initialValue = initialValue * 2;
      }
      this.tractList.push({
        index: this.tractList.length,
        type: this.getType(type),
        amount: this.amount,
        lp: cal ? cal : initialValue,
        count: this.currentIndex,
      });
      this.amount =
        this.tractList[this.tractList.length - 1] &&
        this.tractList[this.tractList.length - 1]['amount']
          ? Number(this.tractList[this.tractList.length - 1]['amount']) + 500
          : 500;
    } else if (type == 'PUSH') {
      this.tractList.push({
        index: this.tractList.length,
        type: this.getType(type),
        amount: this.amount,
        lp: lastAmount,
        count: this.currentIndex,
      });
    }
    let currentArray = this.tractList;
    this.traceListReverse = [].concat(currentArray).reverse();
    this.doubleValue = false;
    this.currentAmountChange =
      Number(this.currentAmount) +
      Number(
        this.tractList[this.tractList.length - 1] &&
          this.tractList[this.tractList.length - 1]['lp']
          ? this.tractList[this.tractList.length - 1]['lp']
          : 0
      );
  }

  IDAmount(type: any) {
    if (type == 'ADD') {
      this.amount = this.amount ? this.amount + 500 : 500;
    } else if (type == 'REMOVE') {
      this.amount = this.amount ? this.amount - 500 : 0;
    } else if (type == 'PUSH') {
      this.amount =
        this.tractList[this.tractList.length - 1] &&
        this.tractList[this.tractList.length - 1]['amount']
          ? Number(this.tractList[this.tractList.length - 1]['amount'])
          : 0;
    }
    this.doubleValue = false;
  }

  double() {
    this.doubleValue = true;
  }

  blackJack() {
    this.count = this.count + 1;
    let currentAmount = this.amount * 1.5;
    let lastAmount =
      this.tractList[this.tractList.length - 1] &&
      this.tractList[this.tractList.length - 1]['lp']
        ? this.tractList[this.tractList.length - 1]['lp']
        : 0;
    let cal = Number(lastAmount) + Number(currentAmount);
    this.tractList.push({
      index: this.tractList.length,
      type: 'BJ',
      amount: this.amount,
      lp: cal,
      count: this.currentIndex,
    });
    this.amount =
      this.tractList[this.tractList.length - 1] &&
      this.tractList[this.tractList.length - 1]['amount']
        ? Number(this.tractList[this.tractList.length - 1]['amount']) - 500
          ? Number(this.tractList[this.tractList.length - 1]['amount']) - 500
          : 500
        : 500;
    let currentArray = this.tractList;
    this.traceListReverse = [].concat(currentArray).reverse();
    this.currentAmountChange =
      Number(this.currentAmount) +
      Number(
        this.tractList[this.tractList.length - 1] &&
          this.tractList[this.tractList.length - 1]['lp']
          ? this.tractList[this.tractList.length - 1]['lp']
          : 0
      );
  }

  addToStorage() {
    const localData = JSON.parse(
      JSON.stringify(localStorage.getItem('dataSource'))
    );
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    if (localData && localData.length) {
      let array = [];
      array.push({
        date: date,
        time: time,
        amount: this.currentAmountChange,
        id: `${localData.length}gk`,
        sortDate: new Date(),
      });
      const getArray = JSON.parse(localData);
      const mergeData = getArray.concat(array);
      console.log('mergeData : ' + JSON.stringify(mergeData));
      console.log('array : ' + JSON.stringify(array));
      localStorage.setItem('dataSource', JSON.stringify(mergeData));
    } else {
      let array = [];
      array.push({
        date: date,
        time: time,
        amount: this.currentAmountChange,
        id: `${array.length}gk`,
        sortDate: new Date(),
      });
      localStorage.setItem('dataSource', JSON.stringify(array));
    }
  }

  getAmount(val: any) {
    return val.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
  }

  split() {
    console.log('split !');
    this.splitArray.push(this.amount);
  }

  splitClick(type: any, id: any) {}

  splitDelete(id: any) {}

  SplitDouble(id: any) {}

  splitBlackJack(id: any) {}
}
