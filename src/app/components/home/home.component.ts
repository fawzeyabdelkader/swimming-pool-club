import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCards().subscribe(data => {
      this.cards = data;
    });
}
}
