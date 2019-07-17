import React,{Component} from 'react';
import './Test.css';
class Test extends Component{
    render(){

        return(
      <div id="container">
       <div id="button"> <button class="ui secondary button" >Show Latest News
  </button></div>
          
         
           <div class="ui form" id="styleOfFilter">
              <div class="field">
                    <label>Country</label>
                    <select class="ui search dropdown">
                    <option value="">Select Country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                       
    </select>
  </div>
  <button class="ui secondary button" style={{float:"right"}}>Show Result
  </button>
</div>
         
         <div id="newsContainer">
            <div className="ui card" id="styleUiCard" >
               <div class="content">
                  <div class="header">ICASA concerned about MultiChoice JSE listing</div>
                  <div class="meta">Sudip GHosh | 2019-07-15</div>
                  <div class="description">
                    <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.Many people also have their own barometers for what makes a cute dog.</p>
                    <b>Referance</b>
                    <br/>
                    <p> <a>https://learn.upgrad.com/v/course/344/session/34194/segment/181549</a></p>
                  </div>
                </div>
 
            </div>

            <div className="ui card" id="styleUiCard" >
               <div class="content">
                  <div class="header">ICASA concerned about MultiChoice JSE listing</div>
                  <div class="meta">Sudip GHosh | 2019-07-15</div>
                  <div class="description">
                    <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.Many people also have their own barometers for what makes a cute dog.</p>
                    <b>Referance</b>
                    <br/>
                    <p> <a>https://learn.upgrad.com/v/course/344/session/34194/segment/181549</a></p>
                  </div>
                </div>
 
            </div>

            <div className="ui card" id="styleUiCard" >
               <div class="content">
                  <div class="header">ICASA concerned about MultiChoice JSE listing</div>
                  <div class="meta">Sudip GHosh | 2019-07-15</div>
                  <div class="description">
                    <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.Many people also have their own barometers for what makes a cute dog.</p>
                    <b>Referance</b>
                    <br/>
                    <p> <a>https://learn.upgrad.com/v/course/344/session/34194/segment/181549</a></p>
                  </div>
                </div>
 
            </div>

            <div className="ui card" id="styleUiCard" >
               <div class="content">
                  <div class="header">ICASA concerned about MultiChoice JSE listing</div>
                  <div class="meta">Sudip GHosh | 2019-07-15</div>
                  <div class="description">
                    <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.Many people also have their own barometers for what makes a cute dog.</p>
                    <b>Referance</b>
                    <br/>
                    <p> <a>https://learn.upgrad.com/v/course/344/session/34194/segment/181549</a></p>
                  </div>
                </div>
 
            </div>
          </div>

      </div>
        );
    }
}
export default Test
