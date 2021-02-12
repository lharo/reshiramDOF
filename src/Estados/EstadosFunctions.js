import estados from "../Data/estados";

export const getEstadoById = ( id ) => estados.find( e => e.id === id);

export const getNombreEstadoById = ( id ) => {
    const estado = getEstadoById( id );
    if ( estado === undefined ) throw new Error('Invalid id');
    return estado.name;
}