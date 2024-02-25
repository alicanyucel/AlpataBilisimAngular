import { Component, OnInit } from '@angular/core';
import { MeetsService } from 'src/app/Services/meet.service';
import { SwalService } from 'src/app/Services/swal.service';
import { MeetModel } from 'src/app/models/MeetCommandModel';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})
export class MeetComponent implements OnInit {
  meets: MeetModel[] = [];
  filtertext: string = "";
  constructor(
    private _meets:MeetsService,
    private _swall: SwalService
  ) { }
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this._meets.getList((res) => this.meets = res)
  }

  delete(id: number) {
    this._swall.callSwal("Sil", "silmek istediğinizden emin misiniz?").then
      ((next) => {
        if (next.isConfirmed) {
          this._meets.delete(id, () => this.getList())}
        }
      )
  }
}