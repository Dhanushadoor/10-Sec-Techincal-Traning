import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //14/jan/2020
  title = 'tutorial';
  city="Boliar";
  showVar="dont";
  select=1;
  nameColor="red";

  signin="signin";

  breakfast=["Idli","dosa"]

  userForm={
    name:"",
    mbl:"",
    myl:""
  }

  addEditUser(){
    if(this.mode=="add"){
    this.students.push(this.userForm)
    this.userForm={
      name:"",
      mbl:"",
      myl:""
    }
  }
    else{
      this.students[this.selectIdx]=this.userForm
      this.userForm={
        name:"",
        mbl:"",
        myl:""
      }
      this.mode='add'
    }
    
  }

  students =[
    {
      name:"Dhanush R",
      mbl:"9845753408",
      myl:"yfydghbj@tfybuj.com"
    },
    {
      name:"Varun",
      mbl:"9845753408",
      myl:"yfydghbj@tfybuj.com"
    },
    {
      name:"Rakesh",
      mbl:"9845753408",
      myl:"yfydghbj@tfybuj.com"
    },
    {
      name:"Sinchana",
      mbl:"9845753408",
      myl:"yfydghbj@tfybuj.com"
    }
  ]//inside class function keyword and var is not needed

  // nameClick(){
  //   if(this.showVar=="done")
  //     this.showVar="dont"
  //   else
  //     this.showVar='done'
  // }

  colors=["red","green","blue","yellow"];
  indxclr=0;
  nameClick(){
    this.nameColor=this.colors[this.indxclr]
    this.indxclr++;
    if(this.indxclr==this.colors.length)
      this.indxclr=0
  }
  mode="add"
  selectIdx
  editUser(indexusr){
    this.userForm=this.students[indexusr]
    this.mode="edit"
    this.selectIdx=indexusr
  }
  delUser(indexusr){
    var cnfrm=confirm("Are you sure,You want to delete?")
    if(cnfrm)
      this.students.splice(indexusr,1)//

  }

  //16/jan/2020
  datevar = new Date()
  ngOnInit(){
    var planDate=this.datevar.getDate() //rename  symbol using F2
    planDate +=2
    this.datevar.setDate(planDate)

  }

}
