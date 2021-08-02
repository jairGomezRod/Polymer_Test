
 import {LitElement, html, css} from 'lit';
 import {bootstrapStyles} from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';


 export class CardElement extends LitElement {
   static get styles() {
     return [ 
         bootstrapStyles,
         css `
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
            }

            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                font-size: 3.5rem;
                }
            }
        ` 
     ];
   }

   static get properties(){
      return {
          folio:{
            type:String
          },
          img:{
            type:String
          },
          name:{
            type:String
          },
          desc:{
            type:String
          },
          price:{
            type:String
          }
      };
    }
 
   constructor() {
     super();
   }
 
   render() {
     return html`
        
        <div class="card shadow-sm mb-4">
            <img  class="bd-placeholder-img card-img-top" width="100%" height="225" src="${this.img}"/>
            <div class="card-body p-2">
                <p class="card-text">${this.desc.substring(0,100)}...</p>
                <div class="d-flex justify-content-between align-items-center">
                
                <small class="text-muted"><b>${this.price}</b> </small>
                </div>
            </div>
        </div>
       
     `;
   }
 }
 
 window.customElements.define('card-element', CardElement);
 