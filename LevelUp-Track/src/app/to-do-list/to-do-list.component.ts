import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule, NgFor, NgIf, NgClass, NgStyle],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
    greeting ="Welcome To Your TO-DO-LIST";
    yourEventName = "Enter Event Name";
    yourEventTime = "Enter Event Time";
  
    eventName:string = "";
    eventTime:string = "";
    eventList : {id : number, name : string, time : string} [] = [];
  
    addEvent(){
      if(this.eventName.trim() && this.eventTime.trim()){
        this.eventList.push({id : this.eventList.length + 1, name : this.eventName, time : this.eventTime});
        this.eventName = "";
        this.eventTime = "";
      }
    }
  
    editingId:number | null = null;
    editName:string ="";
    editTime:string="";
  
    editEvent(event:any){
      this.editingId = event.id;
      this.addEvent = event.name;
      this.editTime = event.time;
    }
  
    saveEdit(id : number){
      const event = this.eventList.find(event=> event.id === id);
      if(event && this.editName.trim() && this.editTime.trim()){
        event.name = this.editName;
        event.time = this.editTime;
        this.editingId = null;
      }
    }
  
    deleteEvent(id:number){
      this.eventList = this.eventList.filter(event => event.id !== id)
  
  }
}
