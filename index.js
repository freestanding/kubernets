  jugador = 1;
  
  var http = require("http");
  var url = require("url");
  var mysql = require("mysql");
const { env } = require("process");
  
  
  var con = mysql.createConnection({
    host: "localhost",
    database: "canicasjs",
    user: "admin",
    password: "admin",
  });
  
  http
    .createServer(function (req, res) {
      var q = url.parse(req.url, true).query;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<style>
       
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }
    h4{
        color:white;
    }
    body {
      background-color: aliceblue;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .label1 {
      margin-bottom: 10px;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      flex-direction: column !important;
      text-decoration: none !important;
    }
    .title {
      color: white !important;
      position: relative;
      text-transform: uppercase;
      font-size: 40px;
      font-weight: 900;
      font-family: "Catamaran", sans-serif;
      font-style: italic;
    }
    
    .subtitle {
      color: white !important;
    }
    
    .players {
      font-size: 20px;
      text-decoration: underline;
      color: red;
    }
    span {
      text-decoration: underline;
      text-decoration-color: green;
      color: green;
    }
    
    .label1 {
      font-size: 20px !important;
      text-decoration: underline !important;
    }
    * {
      box-sizing: border-box;
    }
    
    body {
      background-color: #f1f1f1;
    }
    
    .canica {
      /* float: left !important; */
      /* font-size: 15px !important; */
      width: 7.5em !important;
      margin: 10px !important;
      position: relative !important;
      width: 112.5px;
      height: 80px;
      border: 0;
      background-size: 100%; /* To fill the dimensions of container (button), or */
      background-size: 40px auto; /* to specify dimensions explicitly */
      background-repeat: no-repeat;
      background-color: transparent;
      background-image: url(canica/canica.png);
      color: transparent;
    }
    
    h1 {
      text-align: center;
      color: white;
    }
    h3 {
        color:white;
    }
    input {
      padding: 10px;
      width: 100%;
      font-size: 17px;
      font-family: Raleway;
      border: 1px solid #aaaaaa;
    }
    
    /* Mark input boxes that gets an error on validation: */
    input.invalid {
      background-color: #ffdddd;
    }
    
    /* Hide all steps by default: */
    .tab {
      display: none;
    }
    
    button {
      background-color: #04aa6d;
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      font-size: 17px;
      font-family: Raleway;
      cursor: pointer;
    }
    
    button:hover {
      opacity: 0.8;
    }
    
    #prevBtn {
      background-color: #bbbbbb;
    }
    
    img {
      float: left !important;
      font-size: 15px !important;
      width: 7.5em !important;
      /* margin: 10px !important; */
      position: relative !important;
      width: 70px;
    }
    
    .canica {
      background-image: url(canica/canica.png);
    }
    [type="radio"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    /* IMAGE STYLES */
    [type="radio"] + img {
      cursor: pointer;
    }
    
    /* CHECKED STYLES */
    [type="radio"]:checked + img {
      outline: 2px solid #f00;
    }
    .cc-selector input:active + .drinkcard-cc {
      opacity: 0.9;
    }
    .cc-selector input:checked + .drinkcard-cc {
      -webkit-filter: none;
      -moz-filter: none;
      filter: none;
    }
    .drinkcard-cc {
      cursor: pointer;
      background-size: contain;
      background-repeat: no-repeat;
      display: inline-block;
      width: 100px;
      height: 70px;
      -webkit-transition: all 100ms ease-in;
      -moz-transition: all 100ms ease-in;
      transition: all 100ms ease-in;
      -webkit-filter: brightness(1.8) grayscale(1) opacity(0.7);
      -moz-filter: brightness(1.8) grayscale(1) opacity(0.7);
      filter: brightness(1.8) grayscale(1) opacity(0.7);
    }
    .drinkcard-cc:hover {
      -webkit-filter: brightness(1.2) grayscale(0.5) opacity(0.9);
      -moz-filter: brightness(1.2) grayscale(0.5) opacity(0.9);
      filter: brightness(1.2) grayscale(0.5) opacity(0.9);
    }
    
    /* Extras */
    a:visited {
      color: #888;
    }
    a {
      color: #444;
      text-decoration: none;
    }
    p {
      margin-bottom: 0.3em;
    }
    
    .boton {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      margin: 10px;
      width: 300px;
    }
    .fondo {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
    }
    .partida {
      padding-right: 15px;
      padding-left: 15px;
      border-right: black 3px solid;
      display: flex;
      float: left;
      flex-direction: column;
      background-color: white;
      height: 100%;
      position: absolute;
      left: 0;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    
    /* Fumadita */
    
    body {
      font-family: "Verdana";
      background: #222;
    }
    
    .showcase {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
    .rating-system1,
    .rating-system2,
    .rating-system3,
    .rating-system4 {
      width: auto;
      display: inline-block;
      margin: 20px;
      position: relative;
    }
    
    label {
      float: right;
      display: inline-block;
      width: 60px !important;
      height: 60px !important;
      background: #ccc;
      margin: 4px;
      position: relative;
      transition: all 0.3s;
    }
    .rating-system1 label:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      top: 0;
      left: 0;
      transition: all 0.3s;
    }
    .rating-system1 input:checked ~ label,
    .rating-system1 label:hover ~ label,
    .rating-system1 label:hover {
      background: seagreen;
    }
    .rating-system1 input:checked ~ label:before {
      transform: rotate(90deg);
    }
    .text {
      color: #ccc;
      padding: 10px 0;
      position: absolute;
      width: 100%;
      top: 100%;
    }
    /*second*/
    .rating-system2 label {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      margin: 0 10px;
    }
    
    .ratings-system2 label:before {
      display: none;
    }
    .rating-system2 label:hover ~ label,
    .rating-system2 label:hover {
      box-shadow: 0 0 0 2px gold, inset 0 0 0 5px #333;
    }
    
    .rating-system2 input:checked ~ label {
      background: gold;
      box-shadow: 0 0 0 2px gold;
    }
    
    /*rating system 3*/
    
    .rating-system3 label {
      width: 10px;
      height: 10px;
      margin: 0 10px;
    }
    .rating-system3 label:hover,
    .rating-system3 label:hover ~ label {
      background: crimson;
      border-radius: 100%;
    }
    
    .rating-system3 input:checked ~ label {
      border-radius: 100%;
      background: crimson;
      box-shadow: 6px 0 crimson, 3px 1px 0 7px #222, 3px 1px 0 9px crimson;
    }
    
    .rating-system3 input:checked ~ label:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background: crimson;
      transform: rotate(-45deg);
      border-bottom-left-radius: 15%;
      top: 30%;
      left: 3px;
    }
    
    /** rating system 4*/
    
    .rating-system4 label {
      width: 40px;
      height: 50px;
      background: url("https://i.imgur.com/q1tk5E7.gif");
      background-size: 70%;
      background-repeat: no-repeat;
    }
    
    .rating-system4 label:hover,
    .rating-system4 label:hover ~ label {
      background: url("https://i.imgur.com/YgAna9g.gif");
      background-size: 100%;
      background-repeat: no-repeat;
    }
    
    .rating-system4 input:checked ~ label {
      background: url("https://i.imgur.com/GO4qjoa.gif");
      background-size: 70%;
      background-repeat: no-repeat;
    }
    
        </style>`);
      var col = q.accio;
      if (col == null) {
    
        res.write(`<img class="fondo" src="https://cdn.discordapp.com/attachments/697140624452747344/937015764110675969/fondo.jpg">
        <div class="partida">
            <h3>Chinos on-line</h3>
            <h4>Crear partida</h4>
            <form action="index.js">
                <span class="label1" for="jugador1">Jugador 1 (master): </span>
                <input type="text" name="jugador1">
                <input type="hidden" name="accio" value="crear_partida">
                <div class="cont">
                <button class="boton" type="submit">Crear partida</button>
                </div>
            </form><br>
            <h4>Buscar partida</h4>
            <form action="index.js">
                <span class="label1" for="jugador2">Jugador 2 (convidat): </span>
                <input type="text" name="jugador2">
                <input type="hidden" name="accio" value="buscar_partida">
                <div class="cont">
                <button class="boton" type="submit">Buscar partida</button>
                </div>    </form>
        </div>`);
  
        res.end();
      } else if (col == "crear_partida") {
        con.connect(function (err) {
          if (err) throw err;
          created = new Date();  
          sql = `INSERT INTO partides VALUES (null, ${con.escape(created)} ,'${q.jugador1}',null,10,10,0,1)`;
          con.query(sql, function (err, result, fields) {
            if (err) throw err;
            res.write(
              `
              <h3>Partida creada num ${result.insertId}</h3>
              <h4>Esperant contrincant...</h4>
              <script>
                  setTimeout(() => {
                      window.location = "index.js?contador=1&accio=comprovar_partida&jugador=1&partida=${result.insertId}";
                  }, 1000);
              </script>`
            );
          });
        });
      } else if (col == "comprovar_partida") {
        contador = parseInt(q.contador) + 1;
        jugador = q.jugador;
        partida = q.partida;
        sql = "SELECT * FROM partides WHERE id_partida = " + partida;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
        
          if (result[0].nom_jugador2 != null) {
            res.write(
              `
           <h3>Partida creada num` +
                partida +
                `</h3>
           <h4>Tenim contrincant!!!</h4>
           <script>
               setTimeout(() => {
                   window.location = "conectate.js?accio=moviment_partida&jugador=1&partida=` +
                partida +
                `";
               }, 1000);
           </script>`
            );
          } else {
            res.write(
              ` <h4>Esperant contrincant (` +
                contador +
                `)...</h4>
          <script>
              setTimeout(() => {
                  window.location = "conectate.js?contador=` +
                contador +
                `&accio=comprovar_partida&jugador=1&partida=` +
                partida +
                `";
              }, 1000);
          </script>`
            );
          }
        });
      } else if (col == "buscar_partida") {
        sql = "SELECT * FROM partides WHERE ISNULL(nom_jugador2);";
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          result.forEach((e) => {
            res.write(`<h3>Partides disponibles</h3>
             <span>Partida Numero ${e.id_partida} per ${e.nom_jugador1}</span>
             <a href="conectate.js?partida=${e.id_partida}&accio=connectar_a_partida&jugador2=${q.jugador2}">Connectar a partida</a>`);
          });
        });
      } else if (col == "connectar_a_partida") {
        jugador2 = q.jugador2;
        partida = q.partida;
        sql =
          `UPDATE partides SET nom_jugador2 = '${jugador2}' WHERE id_partida=${partida}`;
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
          res.write(
            `<h3>CONNECTAT A LA PARTIDA ${partida}</h3>
        <h4>Esperant moviment del jugador 1...</h4>
        
    
        <script>
            setTimeout(() => {
                window.location = "conectate.js?accio=moviment_partida&jugador=2&partida=` +
              partida +
              `";
            }, 2000);
        </script>`
          );
        });
      } else if (col == "enviar_aposta") {
        jugador = q.jugador;
        partida = q.partida;
        aposta = q.aposta;
    
        
        sql = `INSERT INTO moviments VALUES (NULL,${con.escape(created)},NULL,${jugador},${aposta},0,${partida})`;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            });
      
        
        sql = `UPDATE partides SET torn = IF(torn = 1,2,1) WHERE id_partida = ${partida}`;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            });
        res.write('<style>h3{font-size:40px;}</style>');
    
        sql = `SELECT * FROM partides`;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            
          res.write(` 
          <div id='tit' class='title'>
          CANICAS CHINOS - Player: ${jugador}
          </div>"
          <br>"
          `);          
       
        if(result[0].punts_jugador1> result[0].punts_jugador2){
            res.write(` <div class='players'>
            <span>
            Canicas Player1 = ${result[0].punts_jugador1}
            </span>
            <br>
            Canicas Player2 =${result[0].punts_jugador2}
            <br>
            </div>`);
            
        }else if(result[0].punts_jugador1 < result[0].punts_jugador2){
            res.write(` <div class='players'>
            Canicas Player1 = ${result[0].punts_jugador1}
            <br>
            <span>
            Canicas Player2 =${result[0].punts_jugador2}
            </span>
            <br>
            </div>`);
            
        }else{
            res.write(`<div class='players'>
            Canicas Player1 = ${result[0].punts_jugador1}
            <br>
            Canicas Player2 =${result[0].punts_jugador2}
            <br>
            </div>`);

        }  });
        
        res.write(`<h4>Moviment gravat. Esperant moviment del jugador ${jugador == 1 ? "2" : "1"}</h4>
    
        <script>
            setTimeout(() => {
                window.location = "index.js?accio=moviment_partida&jugador=${jugador}&partida=${partida}";
            }, 2000);
        </script>`);
       
      } else if(col == "enviar_parimpar"){
       
        jugador = q.jugador;
        partida = q.partida;
        parimpar = q.parimpar;
    
        
        sql = `UPDATE moviments SET parimpar = ${parimpar} WHERE id_partida = ${partida}`;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            });
        
        sql = `UPDATE partides SET torn = IF(torn = 1,2,1) WHERE id_partida = ${partida}`;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            });
        res.write('<style>h3{font-size:40px;}</style>');
    
        sql = `SELECT * FROM partides`;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
          
          res.write(` 
          <div id='tit' class='title'>
           CANICAS CHINOS - Player: ${jugador}
          </div>
          <br>
          `);          
       
        if(result[0].punts_jugador1> result[0].punts_jugador2){
            res.write(` "<div class='players'>
            <span>
            Canicas Player1 = ${result[0].punts_jugador1}
            </span>
            <br>
            Canicas Player2 =${result[0].punts_jugador2}
            <br>
            </div>`);
            
        }else if(result[0].punts_jugador1 < result[0].punts_jugador2){
            res.write(` <div class='players'>
            Canicas Player1 = ${result[0].punts_jugador1}
            <br>
            <span>
            Canicas Player2 =${result[0].punts_jugador2}
            </span>
            <br>
            </div>`);
            
        }else{
            res.write(`"<div class='players'>
            Canicas Player1 = ${result[0].punts_jugador1}
            <br>
            Canicas Player2 =${result[0].punts_jugador2}
            <br>
            </div>`);

        }    });
        comprobar(partida);
        enviar(partida);
        res.write(`<h4>Moviment gravat. Esperant moviment del jugador ${jugador == 1 ? "2" : "1"}</h4>
    
        <script>
            setTimeout(() => {
                window.location = "index.js?accio=moviment_partida&jugador=${jugador}&partida=${partida}";
            }, 2000);
        </script>`);
      }else if (col == "moviment_partida") {
        comprobar(partida);
        jugador = q.jugador;
        partida = q.partida;
     
    
        sql = `SELECT * FROM partides WHERE id_partida = ${partida};`;
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
        if(result[0].torn == 1){      
        if (result[0].torn == jugador) {        
            res.write(` 
            <div id='tit' class='title'>
             CANICAS CHINOS - Player: ${jugador}
            </div>
            <br>
            `);          
         
          if(result[0].punts_jugador1> result[0].punts_jugador2){
              res.write(` <div class='players'>
              <span>
              Canicas Player1 = ${result[0].punts_jugador1}
              </span>
              <br>
              Canicas Player2 =${result[0].punts_jugador2}
              <br>
              </div>`);
              
          }else if(result[0].punts_jugador1 < result[0].punts_jugador2){
              res.write(` <div class='players'>
              Canicas Player1 = ${result[0].punts_jugador1}
              <br>
              <span>
              Canicas Player2 =${result[0].punts_jugador2}
              </span>
              <br>
              </div>`);
              
          }else{
              res.write(`<div class='players'>
              Canicas Player1 = ${result[0].punts_jugador1}
              <br>
              Canicas Player2 =${result[0].punts_jugador2}
              <br>
              </div>`);
  
          }  
    
      res.write(`<br><br>
      <form id="regForm" action="index.js" >
      <h1 class="subtitle">Formulario de apuestas</h1>
      <div class="subtitle">Numero de canicas que va a apostar el jugador 1:<br>
      <input type="hidden" name="jugador" value="${jugador}">
      <input type="hidden" name="partida" value="${partida}">
      <input type="hidden" name="accio" value="enviar_aposta">
      <div class="showcase">
      <div class="rating-system2">
      <input type="radio" name='aposta' id="canica" value="10"/>
      <label for="canica"></label>

      <input type="radio" name='aposta' id="canica2"  value="9"/>
      <label for="canica2"></label>

      <input type="radio" name='aposta' id="canica3"  value="8"/>
      <label for="canica3"></label>
      
      <input type="radio" name='aposta' id="canica4"  value="7"/>
      <label for="canica4"></label>

      <input type="radio" name='aposta' id="canica5" value="6"/> 
      <label for="canica5"></label>

      <input type="radio" name='aposta' id="canica6" value="5"/>
      <label for="canica6"></label>

      <input type="radio" name='aposta' id="canica7" value="4"/>
      <label for="canica7"></label>

      <input type="radio" name='aposta' id="canica8" value="3"/>
      <label for="canica8"></label>

      <input type="radio" name='aposta' id="canica9" value="2"/>
      <label for="canica9"></label>
      
      <input type="radio" name='aposta' id="canica10" value="1"/>
      <label for="canica10"></label>

      <div class="text"></div>
      </div><br>
      <input type="submit" value="Enviar">

      </div>
      </form>`);
    
       
        } else {
            res.write(`'<style>h3{font-size:40px;}</style>'
    
            <h3>Esperant moviment del jugador ${jugador == 1 ? "2" : "1"}...</h3>
            `);
            sql = `SELECT * FROM moviments WHERE id_partida=${partida} ORDER BY hora DESC`;
            con.query(sql, function (err, result, fields) {
                if (err) throw err;
            });
        res.write(`        
        <script>
            setTimeout(() => {
                
                window.location = "index.js?accio=moviment_partida&jugador=${jugador}&partida=${partida}";
            }, 1000);
        </script>
                `); 
        

   
        }
    }else{
        if (result[0].torn == jugador) { 
            
        res.write(` <form id="regForm" action="index.js" >
        <h1 class="subtitle">Formulario de apuestas</h1>
        <div class="subtitle">Numero de canicas que ha apostado el jugador 1:<br>
        <input type="hidden" name="jugador" value="${jugador}">
        <input type="hidden" name="partida" value="${partida}">
        <input type="hidden" name="accio" value="enviar_parimpar">
        <div class="cont">
            <button class="boton" type="submit" id="num" name="parimpar" value="1">Par</button>
            </div>
            <div class="cont">
                <button class="boton" type="submit" id="num" name="parimpar" value="2">Impar</button>
            </div>
        </form>`);
           
       
        
        } else {
            res.write(`'<style>h3{font-size:40px;}</style>'
     
    
            <h3>Esperant moviment del jugador ${jugador == 1 ? "2" : "1"}...</h3>`);
  
        
            sql = `SELECT * FROM moviments WHERE id_partida=${partida} ORDER BY hora DESC`;

          
            res.write(`<script>
            setTimeout(() => {
            
            window.location = "index.js?accio=moviment_partida&jugador=${jugador}&partida=${partida}";
                }, 1000);
            </script>`);
            
   
        }
    }
});
    }
  

      
  function comprobar(partida){

    sql = `SELECT * FROM partides WHERE id_partida=${partida}`;
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
       
    if(result[0].punts_jugador1 == 0){
        sql2 = `UPDATE partides SET guanyador = 2 WHERE id_partida = ${partida}`;
       
         res.end("Guanya el jugador 2");
    }else if(result[0].punts_jugador2 == 0){
        sql2 = `UPDATE partides SET guanyador = 1 WHERE id_partida = ${partida}`;
       
         res.end("Guanya el jugador 1");
    }
    });
    return true;
  }
  function enviar(partida){
    sql = `SELECT * FROM partides INNER JOIN moviments ON partides.id_partida = moviments.id_partida WHERE partides.id_partida=${partida}`;
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        parimpar = result[0].parimpar;
        apuesta = result[0].aposta;


    //1 = par
    if(parimpar == 1){
        if (apuesta%2==0){
            sql2 = `UPDATE partides SET punts_jugador1 = punts_jugador1-${apuesta} WHERE id_partida = ${partida}`;
            con.query(sql2, function (err, result, fields) {
                if (err) throw err;
            });
            sql3 = `UPDATE partides SET punts_jugador2 = punts_jugador2+${apuesta} WHERE id_partida = ${partida}`;
            con.query(sql3, function (err, result, fields) {
                if (err) throw err;
            });
       

            // $reg[`punts_jugador1`] -= ${apuesta};
            // $reg[`punts_jugador2`] += ${apuesta};
        
        }else{
            sql2 = `UPDATE partides SET punts_jugador1 = punts_jugador1+${apuesta} WHERE id_partida = ${partida}`;
            con.query(sql2, function (err, result, fields) {
                if (err) throw err;
            });
            sql3 = `UPDATE partides SET punts_jugador2 = punts_jugador2-${apuesta} WHERE id_partida = ${partida}`;
            con.query(sql3, function (err, result, fields) {
                if (err) throw err;
            });
                
          
            // $reg[`punts_jugador1`] += ${apuesta};
            // $reg[`punts_jugador2`] -= ${apuesta};
        }
    }
    if(parimpar == 2){
        if (apuesta%2!==0){
            sql2 = `UPDATE partides SET punts_jugador1 = punts_jugador1-${apuesta} WHERE id_partida = ${partida}`;
            con.query(sql2, function (err, result, fields) {
                if (err) throw err;
            });
            sql3 = `UPDATE partides SET punts_jugador2 = punts_jugador2+${apuesta} WHERE id_partida = ${partida}`;
            con.query(sql3, function (err, result, fields) {
                if (err) throw err;
            });

          

            // $reg[`punts_jugador1`] -= $canicas;
            // $reg[`punts_jugador2`] += $canicas;
           
        }else{

            sql2 = `UPDATE partides SET punts_jugador1 = punts_jugador1+${apuesta} WHERE id_partida = ${partida}`;
            con.query(sql2, function (err, result, fields) {
                if (err) throw err;
            });
            sql3 = `UPDATE partides SET punts_jugador2 = punts_jugador2-${apuesta} WHERE id_partida = ${partida}`;
            con.query(sql3, function (err, result, fields) {
                if (err) throw err;
            });

                // $reg[`punts_jugador1`] += $canicas;
                // $reg[`punts_jugador2`] -= $canicas;
        }
    }
});
  }
    })
    .listen(8000);

 