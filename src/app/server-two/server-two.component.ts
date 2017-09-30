import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-two',
  templateUrl: './server-two.component.html',
  styleUrls: ['./server-two.component.css']
})
export class ServerTwoComponent implements OnInit {
  serverid = 10;
  serverStatus = 'OffLine';
  allowNewServer = false;
  ServerCreationStatus = "No server was create";
  ServerName = "testServer";
  serverCreated = false;
  servers = ["server 1", "server 2"]

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'OnLine' : 'OffLine';
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
    this.servers.push(this.ServerName);
    this.serverCreated = true;
    this.ServerCreationStatus = "Server Was Created!! name is: " + this.ServerName;
  }

  onUpdateServerNmae(event: any){
    this.ServerName = event.target.value;
  }

  getColor(){
    return this.serverStatus === "OnLine" ? "green" : "red";
  }
}
