
import {Ranker} from '../ranker';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

//의존성 여부 설정
//단순히 함수 역활만 하는 클래스면 선언 안해도 되지만
//외부 모듈을 사용할시 필요하다
@Injectable({providedIn:'root'})
export class RankersComponent{

  constructor(private http : HttpClient) { 
  }
  //타입 스크립트 함수 선언방식 함수이름(매개인자) 리턴형{
  // get<타입 명시> 로 어떤 json 데이터가 올지 알 수 있다
  //}
  getRanking():Observable<Ranker[]>{
    return this.http.get<Ranker[]>('http://localhost:765/main')
  }
}
