import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
  public get(name: string): string {
    return localStorage.getItem(name);
  }

  public add(name: string, value: any) {
    localStorage.setItem(name, value);
  }
}
