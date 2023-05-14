import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})




export class PortfolioComponent {
  public selectedSet = 'set1';

  public showImages(set: string): void {
    this.selectedSet = set;
  }

  public get imageRows(): string[][] {
    if (this.selectedSet === 'set1') {
      return [
        ['https://i.pinimg.com/474x/b1/d9/d0/b1d9d0d0c2f9f1f1e2c1236181cd3ee8.jpg',
        'https://i.pinimg.com/474x/be/de/26/bede263f91b689a7c9aa9c70f50b3f8b.jpg'],
        ['https://i.pinimg.com/474x/af/fc/01/affc01d9f5a50f766cacef85129269ef.jpg',
        'https://i.pinimg.com/474x/21/43/24/2143243e3654e913bd7035cbb4a0b648.jpg'],

      ];
    } else if (this.selectedSet === 'set2') {
      return [
        ['https://i.pinimg.com/474x/ca/b1/8c/cab18cd8f01ebffd145d2c80b575b2e4.jpg',
        'https://i.pinimg.com/474x/66/62/af/6662af5359c558c563fee6f8fdaf3c5f.jpg'],
        ['https://i.pinimg.com/474x/c3/fc/43/c3fc43a82138dcdf8618eb04f99d7c31.jpg',
        'https://i.pinimg.com/474x/aa/a9/07/aaa907b3583528a41af0cda678431e5b.jpg'],

      ];
    } else if (this.selectedSet === 'set3') {
      return [
        ['https://i.pinimg.com/474x/e3/15/a5/e315a57c54a6011043a7aa48c135b9b3.jpg',
        'https://i.pinimg.com/474x/cb/fa/73/cbfa739ca6a11d91e544dff0c76b3ce4.jpg'],
        ['https://i.pinimg.com/474x/ce/ef/6e/ceef6e5520d83feb95c02de6a508354b.jpg',
        'https://i.pinimg.com/474x/92/79/c1/9279c12915b1b062274e248d0c52898c.jpg'],

      ];
    } else {
      return [];
    }
  }


}
