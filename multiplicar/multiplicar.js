const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 2) =>{
   
    console.log('=================='.grey);
    console.log(`== Tabla del ${base} ==`);
    console.log('=================='.gray);
    
        let data = '';
        for(let i = 1; i <= limite; i++){
         data = `${base} X ${i} = ${base*i}`;
            console.log(data.green);
        }
   
}


let crearArchivo = (base, limite = 10) =>{
    return new Promise((resolve,reject) =>{
       if( !Number(base)){
           reject(`El valor introducido ${base} no es un número`);
           return;
       }

        let data = '';

        for( let i = 1; i <= limite; i++){
            data += `${base} X ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err) 
            reject(err)
          else
            resolve(`tabla-${base}.txt`.yellow);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
