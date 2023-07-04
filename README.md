
## backNews
El servidor BackNews es una parte integral de la aplicación MicroFrontQNEWSAPP. Es el encargado de buscar y formatear las líneas de tiempo de los usuarios de Twitter, guardar su información en una base de datos y luego pasar uno por uno los datos a una inteligencia artificial para crear las noticias. Estas noticias se guardan en una base de datos para su posterior uso en un micro Front.

## Tecnologías
 <ul>
   <li>NodeJS</li>
   <li>Express</li>
   <li>PostgreSQL</li>
 </ul>

## Funcionalidades
<ul>
<li>  
Buscar, formatear y guardar la información de la línea de tiempo de una lista de usuarios en Twitter consultando una API externa.
</li>
  <li>
Pasar la información uno por uno a la API de ChatGPT 3 para generar la configuración del prompt y crear noticias, haciendo una espera de 20 segundos entre cada llamada. Luego se formatea la respuesta de la API y se guarda en una base de datos local.
  </li>
  <li>
Proporcionar la información de las noticias guardadas a las microaplicaciones correspondientes.
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
Para precargar la base de datos, una vez que el servidor esté en funcionamiento en el puerto correcto y se hayan configurado las variables de entorno, utilice las siguientes rutas en orden:

![image](https://github.com/DarioMarcuzzi/backNews/assets/97201734/26454739-69e5-40c7-8a08-b9a8c563a489)

<ol>
  <li>"localhost:3002/" ejecuta la funcion getUserTimeLineTwitter (encargada de obtener la linea de tiempo de cada usuario)</li>
  <li>"localhost:3002/generatenews" ejecuta la funcion, generateShortNewsFromText encargada de pasar la información uno por uno a la API de OpenAI)</li>
  <li>Espere a que se generen todas las noticias y luego consulte la base de datos. Esto puede tardar un poco, ya que se realiza una llamada cada 20 segundos. Verifique en la consola si la noticia se creó correctamente. </li>
</ol>

El servidor backNews ahora está en funcionamiento y listo para recibir solicitudes de la microaplicación.

