import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserRoleModel } from '../models/user-role.model';
import { DepartmentModel } from '../models/department.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UserModel[]> {
    return this._httpClient.get<UserModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/user');
  }

  getRoles(): Observable<UserRoleModel[]> {
    return this._httpClient.get<UserRoleModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }

  getDepartment(): Observable<DepartmentModel[]>{
    return this._httpClient.get<DepartmentModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/departments')
  }
}
