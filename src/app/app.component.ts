import { Component, OnDestroy, OnInit } from '@angular/core';

import { BreakpointService } from './services/breakpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public hideBox: boolean;

  private breakpoint: BreakpointService = new BreakpointService('md');

  ngOnInit() {
    this.breakpoint.get().subscribe(md => this.hideBox = !md);
  }

  ngOnDestroy() {
    this.breakpoint.removeListener();
  }

  public onTypeChange (type) {
    console.log(type);
  }

  public onItemNameChange (name) {
    console.log(name);
  }

  public onItemValueChange (value) {
    console.log(value);
  }
}
