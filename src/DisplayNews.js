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
        return (
            <div  id="main">
          
  {
                        this.props.fun.map((sub)=>{
                            return (
                                
                                <div className="ui card" key={sub.url} id="he">
 <div class="header"><h3>{sub.content}</h3></div>
    <div class="meta">{sub.author} | {sub.publishedAt}</div>
    <span><img src={sub.urlToImage} style={{height:"50px",width:"80px"}}/>
    <div class="description" style={{float:"left"}}>
      <p>{sub.description}</p>
      <b>Referance</b><br/>
     <p> <a>{sub.url}</a></p>
    </div>
    </span>
  </div>
                            );
                        })
                    }
         </div>


        );
    }
}
export default DisplayNews