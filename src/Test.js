import React,{Component} from 'react';
import './Test.css';
import DisplayNews from './DisplayNews';
class Test extends Component{
 static s="hello";
  constructor(props){
    super(props);
    
    this.state = {NewsList: [],
      Country:'in' 
};
this.comp(this.state.Country);

// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
  }
 async comp(a){
    await fetch("https://newsapi.org/v2/top-headlines?country="+a+"&category=&apiKey=ef1c0814d9164103819c7b0e88719a12")
    .then((response)=>{console.log(response);
          return response.json();
    })
    .then((myjson)=>{
      console.log(myjson.articles);
     
     this.setState({NewsList:myjson.articles});
      return myjson;
    }
  
    );
   
}
ShowLatestNew(e){
  // this.comp("us");
  // this.comp(e);

 console.log(e);
 this.comp("us");
}
OnButtonClick=()=>{

console.log("hello");
console.log(Test.s);
// this.comp(Test.s);
}
OnButtonClick1=(g)=>{
  console.log("bye");
  console.log(g.target.value);
  Test.s=g.target.value;
  console.log(Test.s);
  // var f=document.getElementById('dropdown').value;
  // console.log(f);
  // console.log(e.target.value);
  // this.comp(e.target.value);
  // this.comp(e.target.value);
}
    render(){

        return(
      <div id="container">
       <div id="button"> <button class="ui secondary button" onClick={this.ShowLatestNew.bind(this,"in")} >Show Latest News
  </button></div>
          
         
           <div class="ui form" id="styleOfFilter">
           <form>
              <div class="field">
                
                    <label>Country</label>
                    <select class="ui search dropdown" id="dropdown" onChange={this.OnButtonClick1}>
                    <option value="">Select Country</option>
                    <option value="af">Afghanistan</option>
   
   <option value="as">Australia</option>
   <option value="at">Austria</option>
 
   <option value="bd">Bangladesh</option>
  
   <option value="bw">Botswana</option>
 
   <option value="br">Brazil</option>

   <option value="ca">Canada</option>

   <option value="cn">China</option>
 
   <option value="fi">Finland</option>
   <option value="fr">France</option>
  
   <option value="hk">Hong Kong</option>
  
   <option value="in">India</option>
   <option value="id">Indonesia</option>
 
   <option value="ie">Ireland</option>
 
   <option value="il">Israel</option>
   <option value="it">Italy</option>
 
   <option value="jp">Japan</option>
 
   
   <option value="my">Malaysia</option>
   
   <option value="mx">Mexico</option>
  
   <option value="mm">Myanmar</option>
  
   <option value="nl">Netherlands</option>
 
   <option value="nz">New Zealand</option>
 
   <option value="ng">Nigeria</option>
 
   <option value="no">Norway</option>
  
   <option value="pk">Pakistan</option>

   <option value="pa">Panama</option>
  
   <option value="ph">Philippines</option>
  
   <option value="pt">Portugal</option>
  
   <option value="ru">Russian Federation</option>
 
 
   <option value="sa">Saudi Arabia</option>
 
   <option value="sg">Singapore</option>
 
   <option value="sk">Slovakia</option>
   
  
   <option value="ch">Switzerland</option>
  
   <option value="tw">Taiwan, Province of China</option>
  
   <option value="th">Thailand</option>
  
   <option value="tr">Turkey</option>
 
   <option value="us">United States</option>

   <option value="zw">Zimbabwe</option>                  
    </select>
    
  </div>
 
  <button class="ui secondary button" style={{float:"right"}} onClick={this.OnButtonClick} >Result
  </button>
</form>
</div>
         
         <div id="newsContainer">
         <DisplayNews fun={this.state.NewsList}/>
          </div>

      </div>
        );
    }
}
export default Test
