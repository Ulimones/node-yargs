const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

// console.log(argv)


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':
        let tareas = porHacer.getListado();
        for (let tarea of tareas) {
            console.log('======= Por hacer =========='.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('==========================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion)
        console.log(borrar);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}