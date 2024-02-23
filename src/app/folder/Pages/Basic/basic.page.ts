import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.page.html',
  styleUrls: ['./basic.page.scss'],
})
export class BasicPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  public numberOne: any;
  public numberTwo: any;
  public resultNumber: any;
  public resultTrueFalse: any = '';
  public player = [
    'A17+',
    'A16',
    'A15',
    'A14',
    'A13',
    'A12',
    'A11',
    'A10',
    'A9',
    'A8_5',
    'AA8_10',
    'AA7',
    'AA6',
    'AA5',
    'AA4',
    'AA3',
    'AA2',
    'AAA88',
    'A1010',
    'A99',
    'A77',
    'A66',
    'A55',
    'A44',
    'A33',
    'A22',
  ];
  public dealer = ['A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'AA'];

  public combinations: any = {
    'A17+_A2': 'S',
    'A17+_A3': 'S',
    'A17+_A4': 'S',
    'A17+_A5': 'S',
    'A17+_A6': 'S',
    'A17+_A7': 'S',
    'A17+_A8': 'S',
    'A17+_A9': 'S',
    'A17+_A10': 'S',
    'A17+_AA': 'S',
    A16_A2: 'S',
    A16_A3: 'S',
    A16_A4: 'S',
    A16_A5: 'S',
    A16_A6: 'S',
    A16_A7: 'H',
    A16_A8: 'H',
    A16_A9: 'H',
    A16_A10: 'H',
    A16_AA: 'H',
    A15_A2: 'S',
    A15_A3: 'S',
    A15_A4: 'S',
    A15_A5: 'S',
    A15_A6: 'S',
    A15_A7: 'H',
    A15_A8: 'H',
    A15_A9: 'H',
    A15_A10: 'H',
    A15_AA: 'H',
    A14_A2: 'S',
    A14_A3: 'S',
    A14_A4: 'S',
    A14_A5: 'S',
    A14_A6: 'S',
    A14_A7: 'H',
    A14_A8: 'H',
    A14_A9: 'H',
    A14_A10: 'H',
    A14_AA: 'H',
    A13_A2: 'S',
    A13_A3: 'S',
    A13_A4: 'S',
    A13_A5: 'S',
    A13_A6: 'S',
    A13_A7: 'H',
    A13_A8: 'H',
    A13_A9: 'H',
    A13_A10: 'H',
    A13_AA: 'H',
    A12_A2: 'H',
    A12_A3: 'H',
    A12_A4: 'S',
    A12_A5: 'S',
    A12_A6: 'S',
    A12_A7: 'H',
    A12_A8: 'H',
    A12_A9: 'H',
    A12_A10: 'H',
    A12_AA: 'H',
    A11_A2: 'D',
    A11_A3: 'D',
    A11_A4: 'D',
    A11_A5: 'D',
    A11_A6: 'D',
    A11_A7: 'D',
    A11_A8: 'D',
    A11_A9: 'D',
    A11_A10: 'D',
    A11_AA: 'H',
    A10_A2: 'D',
    A10_A3: 'D',
    A10_A4: 'D',
    A10_A5: 'D',
    A10_A6: 'D',
    A10_A7: 'D',
    A10_A8: 'D',
    A10_A9: 'D',
    A10_A10: 'H',
    A10_AA: 'H',
    A9_A2: 'H',
    A9_A3: 'D',
    A9_A4: 'D',
    A9_A5: 'D',
    A9_A6: 'H',
    A9_A7: 'H',
    A9_A8: 'H',
    A9_A9: 'H',
    A9_A10: 'H',
    A9_AA: 'H',
    A8_5_A2: 'H',
    A8_5_A3: 'H',
    A8_5_A4: 'H',
    A8_5_A5: 'H',
    A8_5_A6: 'H',
    A8_5_A7: 'H',
    A8_5_A8: 'H',
    A8_5_A9: 'H',
    A8_5_A10: 'H',
    A8_5_AA: 'H',
    AA8_10_A2: 'S',
    AA8_10_A3: 'S',
    AA8_10_A4: 'S',
    AA8_10_A5: 'S',
    AA8_10_A6: 'S',
    AA8_10_A7: 'S',
    AA8_10_A8: 'S',
    AA8_10_A9: 'S',
    AA8_10_A10: 'S',
    AA8_10_AA: 'S',
    AA7_A2: 'S',
    AA7_A3: 'D',
    AA7_A4: 'D',
    AA7_A5: 'D',
    AA7_A6: 'D',
    AA7_A7: 'S',
    AA7_A8: 'S',
    AA7_A9: 'H',
    AA7_A10: 'H',
    AA7_AA: 'H',
    AA6_A2: 'H',
    AA6_A3: 'D',
    AA6_A4: 'D',
    AA6_A5: 'D',
    AA6_A6: 'D',
    AA6_A7: 'H',
    AA6_A8: 'H',
    AA6_A9: 'H',
    AA6_A10: 'H',
    AA6_AA: 'H',
    AA5_A2: 'H',
    AA5_A3: 'H',
    AA5_A4: 'D',
    AA5_A5: 'D',
    AA5_A6: 'D',
    AA5_A7: 'H',
    AA5_A8: 'H',
    AA5_A9: 'H',
    AA5_A10: 'H',
    AA5_AA: 'H',
    AA4_A2: 'H',
    AA4_A3: 'H',
    AA4_A4: 'D',
    AA4_A5: 'D',
    AA4_A6: 'D',
    AA4_A7: 'H',
    AA4_A8: 'H',
    AA4_A9: 'H',
    AA4_A10: 'H',
    AA4_AA: 'H',
    AA3_A2: 'H',
    AA3_A3: 'H',
    AA3_A4: 'H',
    AA3_A5: 'D',
    AA3_A6: 'D',
    AA3_A7: 'H',
    AA3_A8: 'H',
    AA3_A9: 'H',
    AA3_A10: 'H',
    AA3_AA: 'H',
    AA2_A2: 'H',
    AA2_A3: 'H',
    AA2_A4: 'H',
    AA2_A5: 'D',
    AA2_A6: 'D',
    AA2_A7: 'H',
    AA2_A8: 'H',
    AA2_A9: 'H',
    AA2_A10: 'H',
    AA2_AA: 'H',
    AAA88_A2: 'SP',
    AAA88_A3: 'SP',
    AAA88_A4: 'SP',
    AAA88_A5: 'SP',
    AAA88_A6: 'SP',
    AAA88_A7: 'SP',
    AAA88_A8: 'SP',
    AAA88_A9: 'SP',
    AAA88_A10: 'SP',
    AAA88_AA: 'SP',
    A1010_A2: 'S',
    A1010_A3: 'S',
    A1010_A4: 'S',
    A1010_A5: 'S',
    A1010_A6: 'S',
    A1010_A7: 'S',
    A1010_A8: 'S',
    A1010_A9: 'S',
    A1010_A10: 'S',
    A1010_AA: 'S',
    A99_A2: 'SP',
    A99_A3: 'SP',
    A99_A4: 'SP',
    A99_A5: 'SP',
    A99_A6: 'SP',
    A99_A7: 'S',
    A99_A8: 'SP',
    A99_A9: 'SP',
    A99_A10: 'S',
    A99_AA: 'S',
    A77_A2: 'SP',
    A77_A3: 'SP',
    A77_A4: 'SP',
    A77_A5: 'SP',
    A77_A6: 'SP',
    A77_A7: 'SP',
    A77_A8: 'H',
    A77_A9: 'H',
    A77_A10: 'H',
    A77_AA: 'H',
    A66_A2: 'SP',
    A66_A3: 'SP',
    A66_A4: 'SP',
    A66_A5: 'SP',
    A66_A6: 'SP',
    A66_A7: 'H',
    A66_A8: 'H',
    A66_A9: 'H',
    A66_A10: 'H',
    A66_AA: 'H',
    A55_A2: 'D',
    A55_A3: 'D',
    A55_A4: 'D',
    A55_A5: 'D',
    A55_A6: 'D',
    A55_A7: 'D',
    A55_A8: 'D',
    A55_A9: 'D',
    A55_A10: 'H',
    A55_AA: 'H',
    A44_A2: 'H',
    A44_A3: 'H',
    A44_A4: 'H',
    A44_A5: 'SP',
    A44_A6: 'SP',
    A44_A7: 'H',
    A44_A8: 'H',
    A44_A9: 'H',
    A44_A10: 'H',
    A44_AA: 'H',
    A33_A2: 'SP',
    A33_A3: 'SP',
    A33_A4: 'SP',
    A33_A5: 'SP',
    A33_A6: 'SP',
    A33_A7: 'SP',
    A33_A8: 'H',
    A33_A9: 'H',
    A33_A10: 'H',
    A33_AA: 'H',
    A22_A2: 'SP',
    A22_A3: 'SP',
    A22_A4: 'SP',
    A22_A5: 'SP',
    A22_A6: 'SP',
    A22_A7: 'SP',
    A22_A8: 'H',
    A22_A9: 'H',
    A22_A10: 'H',
    A22_AA: 'H',
  };

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  refreshClick() {
    var indexPlayer = Math.floor(Math.random() * this.player.length);
    var indexDealer = Math.floor(Math.random() * this.dealer.length);

    this.numberOne = this.player[indexPlayer]
      .substring(1)
      .replace('_', '-')
      .split('')
      .join(' ');
    this.numberTwo = this.dealer[indexDealer]
      .substring(1)
      .replace('_', '-')
      .split('')
      .join(' ');
    let val: any = `${this.player[indexPlayer]}_${this.dealer[indexDealer]}`;
    this.resultNumber = this.combinations[val];
    this.resultTrueFalse = 'FALSE';
  }

  calculate(type: string) {
    let booleanVal: any = 'FALSE';
    let convertTypes: any = { STAND: 'S', SPLIT: 'SP', DOUBLE: 'D', HIT: 'H' };
    if (convertTypes[type] == this.resultNumber) {
      booleanVal = 'TRUE';
    }
    this.resultTrueFalse = booleanVal;
  }
}
