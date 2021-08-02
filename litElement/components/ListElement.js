
 import {LitElement, html} from 'lit';
 import {bootstrapStyles} from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';
import './services/getData';
import './Card';


 export class ListElement extends LitElement {
    static get styles() {
        return [ 
            bootstrapStyles
        ];
      }
    
    static get properties(){
        return {
            properties:{
                type: Array
            },
            url:{
                type:String
            }
        };
    }
   constructor() {
     super();
     var pathname = window.location.pathname;
     console.log(pathname)
     if(pathname=="/views/home"){
         this.url="https://www.immosystem.com.mx/appImmov2/immoApp2.php?d=0&m=properties&folio=135&limit=6";
     }else if(pathname=="/views/properties"){
        this.url="https://www.immosystem.com.mx/appImmov2/immoApp2.php?d=0&m=properties&folio=135";
     }
     this.properties=[];
     this. addEventListener('ApiData', (e)=>{
         this._dataFormat(e.detail.data);
     })
   }

   _dataFormat(data){
       let props=[];

       data["data"].forEach(prop => {
           props.push(prop)
       });

       this.properties=props;
   }

   get _listingProps(){
    return html `
        ${this.properties.map(prop=> html `
            <div class="col">
              <card-element 
                folio="${prop.folio}" 
                img="${prop.smallphoto}" 
                name="${prop.namePropertyEs}" 
                desc="${prop.descriptionEs}" 
                price="${prop.bestOperation}: ${prop.bestPrice}"
              ></card-element>
            </div>
        `)}
    `
   }

   render() {
     return html`
     <get-data method="GET" url="${this.url}"></get-data>
      <div>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            ${this._listingProps}
          </div>
        </div>
      </div>       
     `;
   }
 }
 
 window.customElements.define('list-element', ListElement);
 