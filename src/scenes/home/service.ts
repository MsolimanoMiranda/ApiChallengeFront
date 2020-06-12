
import {apiCall,API_GATEWAY} from '../../service';
const config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};
const HomeService = {

    async listarEvaluaciones() {
        return await apiCall('/api/listar',{},'GET');
      }, 
      async listarEvaluacionesRango(fecha_inicio:any,fecha_fin:any) {
        return await apiCall(`/api/listaFind?fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`,{},'GET');
      }, 
      
      async guardarEvaluacion(payload:any) {
        return await apiCall(`/api/create`,payload,'POST');
      },

      async guardarComentario(payload:any) {
        return await apiCall(`/detalle/create`,payload,'POST');
      },

      async listarDetalle(id_detalle:any) {
        return await apiCall(`/detalle/listar?id=${id_detalle}`,{},'GET');
      }, 


      
   
}

export default HomeService;
