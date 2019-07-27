import React,{Component} from 'react';
import './DisplayNews.css';
class DisplayNews extends React.Component{
    constructor(props){
        super(props);
       this.state={
            rep:this.props.fun
       };
       console.log(this.props.fun);
    }
    render(){
        if(this.props.fun.length===0)
        return <div style={{fontSize:'30px',textAlign:'center',backgroundColor:"white"}}>No News For these country in these Api</div>
        
        return (
            <div  id="main">
          
  {
                        this.props.fun.map((sub)=>{
                            return (
                                
                                <div className="ui card" key={sub.url} id="he" >
                                    <span
  class="w3-button w3-large w3-display-topright">x</span>
 <div class="header"><span><h3>{sub.content}</h3></span>  </div>
    <div class="meta">{sub.author} | {sub.publishedAt}</div>
    <div>
      <div style={{width: '28%',float: 'left'}}> <img src={sub.urlToImage}  style={{width:'100%',height:'200px'}} /></div>
    <div class="description" style={{float: 'left',width: '70%',marginLeft:'5px'}}>
      <p>{sub.description}</p>
      <b>Referance</b><br/>
      <div > <a href={sub.url} style={{    overflowWrap: 'break-word',color:'blue'}}>{sub.url}</a></div>
    </div>
      </div>
        
  {/* <span><div class="d-inline p-2" style={{float:'left',padding:'10px'}}> <img src={sub.urlToImage} style={{height:"300px",width:"400px"}}/></div></span><span><div class="d-inline p-2">  <p>{sub.description}</p>
     <b>Referance</b><br/>
      <a href={sub.url} target="_blank" style={{color:'blue',textDecoration:'underline'}}>{sub.url}</a></div></span> */}
  {/* <span>  <img src={sub.urlToImage} style={{height:"150px",width:"200px"}}/> <div style={{float:'left'}}> <span class="description" style={{float:"left"}}>
       <p>{sub.description}</p>
     <b>Referance</b><br/>
     <p> <a>{sub.url}</a></p>
    </span>
    </div>
  </span> */
  }
  </div>
  
                            );
                        })
                    }
         </div>


        );
    }
}
export default DisplayNews
