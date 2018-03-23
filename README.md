# JoinUs  -  Hackathon an UX Designer & Front-End Developer Exercise
*Es una web app que ofrece la posibilidad de encontrar eventos gratuitos sobre el mundo del anime y del comic. Además, de tener la posibilidad de crear tus propios eventos sobre los temas que te parece es necesario discutir o prestar atención, ya sea un nuevo animé, el contraste de dos líneas argumentales de un comic o lo que quieras discutir.*

![Logo](https://image.ibb.co/eVfNLH/logo_anchura.png)


## Reto

Crear una web app, en 25 horas, para organizar eventos considerando:

1. Existen al menos 2 sesiones simultáneas. Por ejemplo, dos speakers en dos lugares diferentes a la misma hora.
2. Hay cupos limitados para los asistentes para cada sesión.
3. Hay un “Admin” que crea los eventos y define la cantidad de cupos para cada sesión.
4. Los usuarios se pueden registrar en los eventos que quieran.
      * No puede registrarse a la misma hora en más de un evento
      * Los cupos se van agotando (o aumentando si alguien cancela su registro).
5.	Bonus:
      * Chat general para cada sesión.
      * Ping a asistentes para pedir contacto para networking. El que recibe el ping, acepta o no el pedido.

## Solución

Si bien, el reto describía el producto *"web app"* y sus principales funciones, todas estas dirigidas, sobre todo, al desarrollo Front-End de la misma. Entonces, venía lo más difícil: saber a qué tipo de público le sería útil. Decir a "todo el mundo" es lo mismo que decir a nadie en UX. La misma dificultad que tiene el "cómo debería verse" una página que sea entendible por personas ajenas al desarrollo de ésta.

### Primer paso: Benchmark

Nos lanzamos realizar un rápido y breve *benchmark* sobre aplicaciones que encontramos en el PlayStore. ¿Por qué aplicaciones y no páginas?, porque nuestro gran desafío era genera una app web con una función definida y no una página en que el usuario pudiese navegar durante horas como punto de entretención, información o diversión. Nuestro producto debía ser claro, conciso y preciso a la finalidad requerida.  
De este modo, revisamos tres aplicaciones ofrecidas por la tienda de Google. El requisito de elección estuvo marcado por: que fuese desconocida para las integrantes del grupo y que representarán distintos niveles de descarga y evaluaciones. Es decir, no fuimos ni por las más populares, ni por las mejores calificadas, sino por una mezcla de ellas. De ese modo llegamos a: "Eventbrite - Descubre eventos y diversión cerca" (recomendado por el editor) - "VAMOS - El guía de eventos" - "All Events in City".
Los puntos de comparaciones nos dieron la siguiente información:

![Benchmark](https://image.ibb.co/eUbtuc/Benchmark.png)
A partir de esta información es posible señalar (en congruencia a lo solicitado por el reto) que:  
  -En todos los sitios es requerido que los usuarios se inicien sesión en el sitio para realizar acciones como confirmar asistencia o publicar eventos, así como un acceso a perfil individual. De igual modo, un elemento imprescindible es el uso de un "home" como punto central de información de eventos.  
  -Ahora bien, no todos los sitios permiten la compra de entradas para participar a eventos, tampoco generan notificaciones. Y, sólo una aplicación tenía la opción que las personas crearan eventos propios y que los difundieran desde la misma app. Así como sólo una, la misma, permitía tener un registro histórico de los eventos en los que se participan. Por otro lado, si era posible revisar los eventos por participar en un futuro cercano.


### Segundo paso: Sketching  
Entendiendo que sólo teníamos unas horas para confeccionar todo el producto y teniendo claro estos detalles nos lanzamos al primer diseño veloz. Lo que buscamos como equipo en esta etapa era pensar con claridad, encontrar mejores soluciones y ahorrar tiempo, además de construir un producto que representase a todo el equipo, UX y Front por igual.   

El resultado general, tras votaciones y opiniones varias fue trabajar en base a una imagen que se viera más o menos de este modo, en su versión responsive: 

![Sketch](https://image.ibb.co/nxDwVH/sketck.png)    

Discutido el modelo visual general que seguiría el producto. Nos lanzamos en la construcción de arquetipos de personas que podrían utilizar nuestro producto y qué podrían querer encontrar o cómo navegarían. Lo que nos ayudaría a delimitar las pantallas, el flujo y sobre todo qué elementos incorporar como base para la construcción de nuestro PMV.

![user](https://image.ibb.co/cjbsN7/user.png)  
  
    
      


### Tercer Paso: Elección de Componentes Front-End
Mientras se realizaba la elección de "pantallas" que tendría el producto, nuestro equipo de Front-End decidía que elementos utilizarían para el desarrollo: se escogió utilizar la librería de Javascript llamada React, que se focaliza en el desarrollo de interfaces asociando las vistas a datos, lo que significa menos código escrito para manipular la página cuando estos sean modificados por el cliente. Lo que deriva en una página más livianas y rápidas, que no ve afectada su performance en los distintos formatos en que podría utilizarse la web app.   

![front](https://image.ibb.co/m9op27/Front.png)  
React es en sí, una librería centrada en la creación de interfaces de usuarios, pero no contiene una solución que permita enrutar los distintos componentes de una página. Aquí es donde entra en juego React Router Dom que, en términos simples, permite reescribir secciones de una página actualizando el contenido, en vez de cargar páginas nuevas completa. Lo que haría que el proceso de navegación fuese más lento e incluso frustrante para el cliente.   
A estos elementos se suma Firebasse que es un conjunto de herramientas enfocadas en la creación de aplicaciones web y mobile. En particular, para este proyecto se utilizó el componente denominado Authentication, que permite que los usuarios puedan iniciar sesión en una aplicación, almacenando los datos sin necesidad de utilizar el back-end. Esto permite, además, conectar accesos con cuentas de distintas redes sociales y mails. Para este producto utilizamos como opción al registro de datos hacer inicio de sesión con cuentas previamente creadas en los servidores de Google, específicamente, cuentas de Gmail.  
Para redondear el proyecto, se utilizó  MDB un framework de estilos basado en Material Design para Bootstrap4, en su versión para React, como fuente de UI que permitiese organizar la página de manera rápida y, al mismo tiempo, no afectará la curva de aprendizaje de los futuros clientes, en cuanto al manejo de la misma. Además, permite que el diseño sea adaptable al tamaño de la pantalla en que se visualice la web app (responsive).  
  
  
Cabe señalar que el desarrollo del código se ha realizado en paralelo a los distintos pasos del proceso de UX.


### Cuarto Paso: Prototipo
En paralelo a al desarrollo Front, se desarrolló un prototipo que permitiera testear el flujo de navegación. Resultaba imprescindible que las personas, posibles usuarios, realizaran una navegación fluida y adecuada para las distintas tareas que podrían realizar en la web app.
Por otra parte, este prototipo podría ayudar al desarrollo visualizando y confirmando el paso de pantallas, elemento y funciones. Este flujo se representa del siguiente modo:

![Flujo](https://image.ibb.co/cFQwfH/flujo_screen.png)

Puedes revisar el prototipo y su flujo en [Marvell](https://marvelapp.com/6475e4i)  


### Quinto Paso: Testing
Al final el prototipo se procedió a realizar el testing con posibles usuarios, para ello se realizaron cinco testing cuyos resultados serían corregidos directamente en los procesos de Front-End. Se tomó la decisión de no realizar un nuevo prototipo que incorporará las observaciones de los usuarios sólo en base al tiempo, queriendo privilegiar el producto final y cuidar los detalles de flujo y componentes directamente al código.

![Testing](https://image.ibb.co/cTu3uc/testing.png)

A cada usuario se le pidieron tareas específicas: 
1.	Inscribirse en un evento.
2.	Eliminar su asistencia al mismo.
3.	Crear un evento.
En general, las respuestas de los usuarios fueron que la app era fácil de usar, pero…  
            *Se sintieron confundidos por el uso de algunas palabras en los botones. En ese sentido recomendaron utilizar conceptos más familiares.  
            * El ícono de “calendario” presente en el home, les resultaba confuso. De los cinco, cuatro pensaron que generaría alguna interacción en la web app, sin embargo, mostraron frustración al notar que sólo era una imagen y no un acceso a otra sección.  
  
Los comentarios se entregaron al equipo de Front, para que realizaran los cambios directamente en el código del producto por entregar.


### Sexto Paso: Versión Final
Como último paso, queda pendiente el producto final. Hechas las correcciones desde el sketch, el prototipo y las observaciones de los usuarios en el testing. Además, de incorporar los requerimientos básicos del reto. El resultado, en su vista desktop es:


![PantallasWeb](https://i.imgur.com/D5v6xyC.png)



##### El Equipo
El recurso humano que dio vida a este producto está compuesto por:  
@malditoprotozoo, @mickequeen y @ValeOlivares como el equipo de desarrolladoras Front-End Developer;  
@dime3ichig0 y @RoArriaza como equipo UX Design.  

Si bien el desarrollo se realizó de manera paralela en ambos equipos, todas las decisiones nucleares fueron tomadas en conjunto y a lo largo del proyecto conversamos/compartimos nuestros avances y futuros pasos. Ello con el propósito de generar un producto único y que representará las ideas de todas las integrantes.
