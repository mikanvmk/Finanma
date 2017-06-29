import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  get isOpenMenu():boolean {
    return this._isOpenMenu;
  }

  set isOpenMenu(value:boolean) {
    this._isOpenMenu = value;
  }

  get userInfor():{} {
    return this._userInfor;
  }

  set userInfor(value:{}) {
    this._userInfor = value;
  }

  private _isOpenMenu:boolean;
  private _userInfor:{};

}
