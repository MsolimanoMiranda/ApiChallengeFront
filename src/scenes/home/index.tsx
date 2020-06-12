import React, { useCallback, useEffect,useState } from "react";
import { useMappedState } from "redux-react-hook";
import Image from 'react-bootstrap/Image'

import HomeService from './service';
import TabContent1 from './components/TabContent1';

import './styles.css';


const Home = (props: any) => {
  const [evaluaciones, setEvaluaciones] = useState([]);
  const [evaluacionesD, setEvaluacionesD] = useState([]);
  const mapState = useCallback(
    state => ({
      home: state.home,
    }),
    []
  );

  const fomartearFecha = (setfecha:any,tipo:any=0)=>{
    const _tipo = tipo==1?-1:tipo==2?1:0;
    const mes_actual=new Date(setfecha).getMonth();
    const mes:any = new Date(setfecha).getMonth() < 10 ? '0'+(new Date(setfecha).getMonth()+1):''+(new Date(setfecha).getMonth()+1);
    const dia:any = new Date(setfecha).getDate() < 10 ? '0'+(new Date(setfecha).getDate()+_tipo):''+(new Date(setfecha).getDate()+_tipo);
    const fecha:any =`${dia}-${mes}-${new Date(setfecha).getFullYear()}`;
    return fecha;
  }

  const { home } = useMappedState(
    mapState
  );


    const listar_Evaluaciones = async ()=>{
      await HomeService.listarEvaluaciones().then((data:any)=>{
        setEvaluaciones(data.data)
      });
    }

    const guardarEvaluacion = async  (payload:any)=>{
      await HomeService.guardarEvaluacion(payload).then((data:any)=>{
       console.log(data)
      });
    }

    const listarDetalle = async  (id_detalle:any)=>{
      await HomeService.listarDetalle(id_detalle).then((data:any)=>{
        setEvaluacionesD(data.data)
      });
    }

    const guardarComentario = async  (payload:any)=>{
      await HomeService.guardarComentario(payload).then((data:any)=>{
       console.log(data)
      });
    }
   
   
    
    
    const listar_Evaluaciones_rango = async (fecha_ini:any,fecha_fin:any)=>{
      const fecha_inicio :any =fomartearFecha(fecha_ini,1);
      const fecha_final :any =fomartearFecha(fecha_fin,2);
       await HomeService.listarEvaluacionesRango(fecha_inicio,fecha_final).then((data:any)=>{
        setEvaluaciones(data.data)
       });
    }





  useEffect(() => {
    listar_Evaluaciones();
  }, [])


  return (

      <div>
        	<link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            />
      <div>
      <Image src="https://lh3.googleusercontent.com/tSp_rN7Qa2VPfYxyEaahdI4qPi5EX-SmxtBey-a2kjjabN3u0EYzEQmAc9VcMaf7yYK6" className="logo"/>
    </div>

        <div className="pdf__info__bottom">
        <TabContent1 
                      data={evaluaciones}
                      rangoFechas={listar_Evaluaciones_rango}
                      listar_Evaluaciones={listar_Evaluaciones}
                      fomartearFecha={fomartearFecha}
                      guardarEvaluacion={guardarEvaluacion}
                      guardarComentario={guardarComentario}
                      listarDetalle={listarDetalle}
                      evaluacionesD={evaluacionesD}
                      />
        </div>
       
      </div>

);
};

export default Home;
