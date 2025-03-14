import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgClass, NgStyle } from '@angular/common';
import {ProgressBarComponent} from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule, NgFor, NgIf, NgClass, NgStyle, ProgressBarComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
    greeting ="Welcome To Your TO-DO-LIST";
    yourEventName = "Enter Event Name";
    yourEventTime = "Enter Event Time";
    yourProgress ="Enter Progress Percent";
  
    eventName:string = "";
    eventTime:string = "";
    progressTime:number = 0;
    eventList : {id : number, name : string, time : string, progress :number} [] = [];
  
    addEvent(){
      if(this.eventName.trim() && this.eventTime.trim()){
        this.eventList.push({id : this.eventList.length + 1, name : this.eventName, time : this.eventTime, progress : this.progressTime});
        this.eventName = "";
        this.eventTime = "";
        this.progressTime = 0;
      }
    }
  
    editingId:number | null = null;
    editName:string ="";
    editTime:string="";
    editProgress:number = 0;
  
    editEvent(event:any){
      this.editingId = event.id;
      this.addEvent = event.name;
      this.editTime = event.time;
      this.editProgress = event.progress;
    }
  
    saveEdit(id : number){
      const event = this.eventList.find(event=> event.id === id);
      if(event && this.editName.trim() && this.editTime.trim()){
        event.name = this.editName;
        event.time = this.editTime;
        event.progress = this.editProgress;
        this.editingId = null;
      }
    }
  
    deleteEvent(id:number){
      this.eventList = this.eventList.filter(event => event.id !== id)
  
  }
}
