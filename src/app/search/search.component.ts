import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service'
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  str:string;
  data:String;
  subString:Array<String> = [];
  count = 0;
  word :any;
  path="assets/a.jpg";
  Date: Array<any> = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.getFile();
    this.getCount();
  }

  getFile(){
    this.searchService.getFile()
         .subscribe(response => {
           this.data = response;
           this.subString = this.data.split('|')
          
           console.log("this is the data", this.subString,this.data)
         }
         );
  }

  toggle(){
    var i = document.getElementById("datetimepicker1");
  }
  pushme(value){
    console.log("select",value);
  }
  getDate(xyz){
    this.Date = xyz;
    console.log("date",this.Date);
  }
  getCount(){

    
  
   // for (var i=0 ; i < this.word.length(); i++){
   //    // inner loop -- do the count
   //    if (this.word[i] != "")
   //       this.count += 1;
   // }
    // console.log("ASKJBkjabd",JSON.parse(this.subString))
  }

}
