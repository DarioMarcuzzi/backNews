# backNews

## backNews
El servidor backNews es una parte integral de la aplicación MicroFrontQNEWSAPP. Es el encargado de buscar y formatear las lineas de tiempo de los usuarios de twitter, guardar su informacion en una base de datos para luego pasar 1 por 1 los datos a una inteligencia Artificial para crear las noticias.
Esas noticias son guardadas en una base de datos para su posterior uso en un micro Front.

## Tecnologias
 <ul>
   <li>NodeJS</li>
   <li>Express</li>
   <li>PostgreSQL</li>
 </ul>

## Funcionalidades
<ul>
<li>  
Buscar, formatear y guardar la informacion de la linea de tiempo de una lista de usuarios en Twitter consultando una api externa
</li>
  <li>
Pasar la informacion 1 por 1 a la api de chat GPT 3 generando la configuracion del prompt para generar noticias, haciendo una espera de 20s entre cada llamada, para luego formatear la respuesta de la api y guardarla en una base de datos local.
  </li>
  <li>
Proporcionar la informacion de las noticias guardadas a las micro aplicaciones correspondientes.
  </li>
</ul>

## Configuración
Antes de ejecutar el servidor backNews, asegúrese de cumplir con los siguientes requisitos:
<ol>
  <li>
Node.js y npm instalados en su entorno de desarrollo.
  </li>
  <li>
Conexión a Internet para consultar la API externa de twitter y de OpenIA.
  </li>
  <li>
Configuración de la base de datos PostgreSQL, incluyendo la creación de una base de datos llamada <strong>usersAndTuits<strong/> y la configuración de las credenciales de conexión.
  </li>
</ol>

## Instalación
Siga estos pasos para instalar y ejecutar el servidor backNews:
<ol>
  <li>
Clone este repositorio en su computadora local.
  </li>
  <li>
Navegue hasta la carpeta del repositorio: cd backNews 
</li>
  <li>
Ejecute el siguiente comando para instalar las dependencias: <strong>npm install.
  </strong></li>
  <li>
Configure la conexión a la base de datos en el archivo .env. Asegúrese de proporcionar los valores correctos para <strong> RAPID_HOST(api twitter) DB_USER DB_PASSWORD DB_HOST OPENAI_API_KEY, URL(apiTwitter) , URL_OPENIA
RAPID_KEY</strong>=(https://rapidapi.com/contact-cmWXEDTql/api/twttrapi) 
  </li>
  <li>
Ejecute el siguiente comando para iniciar el servidor:<strong> npm start.
  </strong></li>
</ol>


## Requerimiento
Precargar la base de datos, una vez levantado el servidor en el puerto correcto y configurado las variables de entorno utilizar las siguientes rutas en orden :

![image](https://github.com/DarioMarcuzzi/backNews/assets/97201734/26454739-69e5-40c7-8a08-b9a8c563a489)

<ol>
  <li>"localhost:3002/" ejecuta la funcion getUserTimeLineTwitter (encargada de obtener la linea de tiempo de cada usuario)</li>
  <li>"localhost:3002/generatenews" ejecuta la funcion, generateShortNewsFromText (encargada de pasar la informacion 1 por 1 a la api de open IA)</li>
  <li>Esperar a que se generen todas las noticias para luego consultar la base de datos, esto puede tardar un poco ya que hace una llamada cada 20 seg, en la consola verifica si la noticia fue creada con exito. </li>
</ol>

El servidor backNews ahora está en funcionamiento y listo para recibir solicitudes de la microaplicación.

