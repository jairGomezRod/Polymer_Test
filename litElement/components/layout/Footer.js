
 import {LitElement, html, css} from 'lit';
 import {bootstrapStyles} from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';


 export class FooterElement extends LitElement {
   static get styles() {
     return [ 
         bootstrapStyles,
         css `
            /* Sticky footer */
            html {
                position: relative;
                min-height: 100%;
            }
            body {
                margin-bottom: 60px;
            }
            .footer {
                
                position: relative;
                bottom: 0;
                width: 100%;
                height: 60px;
                line-height: 60px;
                background-color: #f5f5f5;
            }` 
     ];
   }

 
   constructor() {
     super();
   }
 
   render() {
     return html`
        <footer class="footer">
            <div class="container">
                <span class="text-muted"><b>Properties WebApp<sup>&copy;</sup></b> Powered by Jair Gomez</span>
            </div>
        </footer>
     `;
   }
 }
 
 window.customElements.define('footer-element', FooterElement);
 