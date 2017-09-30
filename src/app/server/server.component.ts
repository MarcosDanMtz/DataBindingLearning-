import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverid = 10;
  serverStatus = 'OffLine';
  allowNewServer = false;
  ServerCreationStatus = "No server was create";
  ServerName = "testServer";

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  ngServerStatus(){
    return this.serverStatus;
  }

  onCraeteServer(){
    this.ServerCreationStatus = "Server Was Created!! name is: " + this.ServerName;
  }

  onUpdateServerNmae(event: any){
    this.ServerName = event.target.value;
  }
}
