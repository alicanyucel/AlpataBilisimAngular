import { ToastrService } from 'ngx-toastr';
import { MeetModel } from '../models/MeetCommandModel';
import { HttpClient } from '@angular/common/http';
import { ResultModel } from '../models/resultmodel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetsService {
  api: string = "https://localhost:7245/api" + "/Meets";
  constructor(
    private _http: HttpClient,
    private _toastr: ToastrService,
  ) { }
  post(model: MeetModel, callBack: () => void) {
    this._http.post<ResultModel>(this.api, model).subscribe({
      next: (res) => {
        this._toastr.success(res.message)
        callBack();
      }
    })
  }
  put(model: MeetModel, callBack: () => void) {
    this._http.put<ResultModel>(this.api, model).subscribe({
      next: (res) => {
        this._toastr.success(res.message)
        callBack();
      }
    })
  }
  delete(id:number, callBack: () => void) {
    this._http.delete<ResultModel>(this.api+ "/" + id).subscribe({
      next: (res) => {
        this._toastr.info(res.message)
        callBack();
      }
    })
  }
  getbyid(id:number,callBack: (res: MeetModel) => void) {
    this._http.get<MeetModel>(this.api + "/" + id).subscribe({
      next: (res) => {
        callBack(res)
      }
    })
  }
  getList(callBack: (res: MeetModel[]) => void) {
    this._http.get<MeetModel[]>(this.api).subscribe({
      next: (res) => {
        callBack(res)
      }
    })
  }
}