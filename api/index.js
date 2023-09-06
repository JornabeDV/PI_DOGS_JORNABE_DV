//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//1.IMPORTACIÓN DE MÓDULOS Y ARCHIVOS.-
const server = require('./src/app.js');//Se importa el módulo server desde el archivo app.js ubicado en la carpeta /src. Esto carga el servidor Express configurado para la aplicación.-
const { conn } = require('./src/db.js');//Se importa la instancia de conexión a la base de datos (conn) desde el archivo db.js ubicado en la carpeta /src. Esto permite interactuar con la base de datos utilizando Sequelize.-

//2.SINCRONIZACIÓN DE MODELOS CON LA BASE DE DATOS.-
conn.sync({ force: false }).then(() => {//Se llama al método sync() en la instancia de conexión a la base de datos (conn). Este método se utiliza para sincronizar los modelos definidos en la aplicación con las tablas correspondientes en la base de datos.-
//El objeto de configuración { force: false } se pasa como argumento a sync(). Esto significa que no se forzará la recreación de las tablas en la base de datos si ya existen. Si force se estableciera en true, las tablas se recrearían (lo que eliminaría todos los datos existentes).//

  //3.ARRANQUE DEL SERVIDOR.-
  //Una vez que la sincronización de modelos se haya completado con éxito, se llama al método listen() en la instancia del servidor Express (server) para iniciar el servidor.
  server.listen(3001, () => {//El servidor se configura para escuchar en el puerto 3001.-
    console.log('listening at 3001!!');//Se muestra un mensaje en la consola que indica que el servidor está escuchando en el puerto 3001.-
  });
});

//4.ANÁLISIS DE CÓDIGO.-
//Este código carga el servidor Express y luego sincroniza los modelos de la base de datos con las tablas correspondientes. Una vez que la sincronización se completa con éxito, el servidor se inicia y comienza a escuchar en el puerto 3001. Esto permite que la aplicación esté lista para recibir y gestionar solicitudes HTTP entrantes.-
