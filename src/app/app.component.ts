import { Component } from '@angular/core';
import { Http } from '@angular/http';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    postFormEmprestimo() {
      debugger;
      var name = $("#nomeCliente").val();
      var limite = $("#limite").val();
      
      var sendInfo = {
          nomeCliente: name,
          limite: limite
      };

      $.ajax({
          type: "POST",
          url: "/emprestimo",
          dataType: "json",
          data: sendInfo,
          success: function (msg) {
              if (msg) {
                  console.log("Sucesso");
              } else {
                console.log("Erro");
              }
          }
        });  
      }
  }


