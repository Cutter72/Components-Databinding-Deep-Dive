import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerContent', {static: true}) newServerContent: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({serverName: newServerName.value, serverContent: this.newServerContent.nativeElement.value});
  }

  onAddBlueprint(newServerName: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: newServerName.value, serverContent: this.newServerContent.nativeElement.value});
  }
}
