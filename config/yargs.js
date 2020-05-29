const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const completado = {
    default: false,
    alias: 'c',
    descripcion: 'marca como completada la tarea'
};


const argv = require('yargs')
    .command('crear', 'crear elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra la tarea', {
        descripcion
    })

.help()
    .argv

module.exports = {
    argv
}