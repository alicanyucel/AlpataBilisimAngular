import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MeetsService } from 'src/app/Services/meet.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
  constructor(
    private _meets:MeetsService
  ){}
  ngOnInit(): void {
    
  }
add(addform:NgForm){
this._meets.post(addform.value,()=>addform.reset())
}
}
