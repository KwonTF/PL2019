import { Component, OnInit} from '@angular/core';
import { RankersComponent } from './rankers/rankers.component';
import { Ranker } from './ranker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RankingList';
  ranking: Ranker[];
  constructor(private rankingcomponent: RankersComponent){}
  ngOnInit(){
    this.getRankers();
  }
  getRankers():void{
    this.rankingcomponent.getRanking().subscribe(jsondata =>{
      this.ranking = jsondata;
      console.log(this.ranking)
    })
  }
}
