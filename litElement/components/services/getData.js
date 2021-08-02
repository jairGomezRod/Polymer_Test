
 import {LitElement} from 'lit';

 export class GetData extends LitElement {
    
    static get properties(){
        return {
            url:{type:String},
            method:{type:String}
        }
    }
   firstUpdated() {
   
     this.getData();
   }
   _sendData(data){
       this.dispatchEvent(new CustomEvent('ApiData', {
           detail:{data}, bubbles:true, composed:true
       }));
   }
   getData(){
       fetch(this.url, {method: this.method})
       .then((res)=>{
        if(res.ok) return res.json();
        return Promise.reject(res);
       })
       .then((data)=>{
           if(data.status !==200) return Promise.reject(data.status);
          this._sendData(data);
       })
       .catch((error)=>{
            console.warn("There was an error during the request:", error)
       });
    }

 }
 
 window.customElements.define('get-data', GetData);
 