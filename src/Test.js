import React,{Component} from 'react';
import './Test.css';
import DisplayNews from './DisplayNews';
class Test extends Component{
 static s="hello";
 static button="grey";
  constructor(props){
    super(props);
    
    this.state = {NewsList: [],
      Country:'in' ,
      button:'grey',
      load:true,
      error:false     
};
this.comp(this.state.Country);

// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
  }
 async comp(a){
    await fetch("https://newsapi.org/v2/top-headlines?country="+a+"&category=&apiKey=ef1c0814d9164103819c7b0e88719a12")
    .then((response)=>{console.log(response);
      if(response.ok)
    return response.json();
   else
   throw new Error(response.status);
    })
    .then((myjson)=>{
      console.log(myjson.articles);
     
     this.setState({NewsList:myjson.articles,
      load:false
    });
      return myjson;
    })
    .catch((error)=>{
      console.log(error);
      this.setState ( {
      
        error:true,
        load:false
        });
    });
   
}
ShowLatestNew(e){
  // this.comp("us");
  // this.comp(e);
 
 console.log(e);
 this.comp("in");
 this.setState ( {
      
  error:false,
  load:true
  });
}
OnButtonClick=(e)=>{
  e.preventDefault();
console.log("hello");
console.log(Test.s);
this.comp(Test.s);
this.setState ( {
      
  error:false,
  load:true
  });
}
OnButtonClick1=(g)=>{
  g.preventDefault();
  console.log("bye");
  console.log(g.target.value);
  Test.s=g.target.value;
  console.log(Test.s);
  Test.button='black';
  this.setState()
  // var f=document.getElementById('dropdown').value;
  // console.log(f);
  // console.log(e.target.value);
  // this.comp(e.target.value);
  // this.comp(e.target.value);
}
    render(){
      if(this.state.load){
        return  <div class="ui active inverted dimmer">
        <div class="ui text loader" style={{textAlign:'center',marginTop:'50px',fontSize:"50px"}}>Loading...</div>
      </div>
    }
    if(this.state.error){
      return <div  style={{textAlign:'center',marginTop:'300px',fontSize:"50px"}}><i class="exclamation triangle icon big"></i>Error Loading Data</div>
    }
        return(
      <div id="container" style={{backgroundColor:'white'}}>
       <div id="button"> <button class="ui secondary button" onClick={this.ShowLatestNew.bind(this,"in")} >Show Latest News
  </button>
  </div>
          
         
           <div class="ui form" id="styleOfFilter" style={{backgroundColor:'white'}}>
             <div  className="upper" style={{marginBottom:'10px'}}>
              <span style={{float:'left',fontSize:"20px"}}>Filter News</span><span style={{float:'right',fontSize:"20px",color:"blue"}}>Reset</span>
           
            
             </div>
          <hr style={{marginTop:'40px',border:"1px solid grey"}}/>
           <form >
              <div class="field" style={{padding:"10px"}}>
                
                    <label style={{color:'grey',fontSize:"20px",marginTop:"10px",marginBottom:'10px',borderRadius:"10px"}}>COUNTRY</label>
                    <select class="ui search dropdown" id="dropdown" onChange={this.OnButtonClick1} >
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
 
  <button class="ui secondary button" style={{float:"right",height:"auto",width:"95%",marginLeft:'10px',backgroundColor:Test.button}}
   onClick={this.OnButtonClick} >Show Result
  </button>
</form>
</div>
         
         <div id="newsContainer">
         <DisplayNews fun={this.state.NewsList} loaded={this.state.load}/>
          </div>

      </div>
        );
    }
}
export default Test
