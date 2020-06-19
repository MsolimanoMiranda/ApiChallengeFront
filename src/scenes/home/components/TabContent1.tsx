
import React, { useState } from 'react';

import './style.css';
import NumberFormat from 'react-number-format';
import DatePicker from "react-datepicker";
import {Modal,Button,Form,Col,Row,InputGroup} from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";


const TabContent1 = (props: any) => {
  const {
    rangoFechas,
    listar_Evaluaciones,
    fomartearFecha,
    guardarEvaluacion,
    guardarComentario,
    evaluacionesD,
    listarDetalle
   
  } = props;
    const data = props.data || [];
    const [fechaini, setFechaini] = useState(new Date());
    const [fechafin, setFechafin] = useState(new Date());
    const [show, setShow] = useState(false);
    const [id_detalle,setId_detalle] = useState('');
    const [show_comentario, setShow_comentario] = useState(false);
    const [evaluacion,setEvaluacion]= useState({}as any);
    const [validated, setValidated] = useState(false);
    const [validatedD, setValidatedD] = useState(false);
    const puntuaciones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const changeFechaini = (values:any)=>{
    setFechaini(values);
  }
  const changeFechafin = (values:any)=>{
    setFechafin(values);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseC = () => setShow_comentario(false);
  const handleShowC = async (id_detalle:any) => {
    setId_detalle(id_detalle);
    await listarDetalle(id_detalle);
    setShow_comentario(true)};

  const guardarComentarios=async (event:any)=>{
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.stopPropagation();
    event.preventDefault();

    const payload={
      id_evaluacion:id_detalle,
      comentario:event.target.elements.validationComentario.value
    }
    await guardarComentario(payload).then((data:any)=>{
       listarDetalle(id_detalle);
    });

   
    setValidatedD(true);
  }

  const handleSubmit = async (event:any) => {
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      const payload = {
        nombres: event.target.elements.validationNombres.value,
        apellidos: event.target.elements.validatioApellidos.value,
        correo: event.target.elements.validationCorreo.value,
        puntuacion: event.target.elements.formHorizontalRadios.value,
        fecha_inscripcion:fomartearFecha(new Date())
      }
      await guardarEvaluacion(payload);
    
    }
   
   
    event.stopPropagation();
    setValidated(true);
  };


    return (
      <div>
              <Modal show={show}  key='modal1'  onHide={handleClose} size="lg">

                <Modal.Header closeButton>
                  <Modal.Title>Registrar Evaluación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h5>Datos:</h5>
                     <Form noValidate   id='modal1' validated={validated} onSubmit={handleSubmit}>
                              <Form.Row>
                                <Form.Group as={Col} md="6" controlId="validationNombres">
                                  <Form.Label>Nombres</Form.Label>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nombres"
                                    value={evaluacion.name}
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                  <Form.Control.Feedback type="invalid">
                                      Falta llenar Nombres
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validatioApellidos">
                                  <Form.Label>Apellidos</Form.Label>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Apellidos"
                                    value={evaluacion.lastname}

                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                  <Form.Control.Feedback type="invalid">
                                      Falta llenar Apellidos
                                    </Form.Control.Feedback>
                                </Form.Group>
                              
                              </Form.Row>
                              <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCorreo">
                                  <Form.Label>Correo</Form.Label>
                                  <Form.Control
                                    required
                                    type="email"
                                    placeholder="Correo"
                                    value={evaluacion.email}
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                  <Form.Control.Feedback type="invalid">
                                      Falta llenar Email
                                    </Form.Control.Feedback>
                                </Form.Group>
                        
                              </Form.Row>

                              <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationPuntuacion">
                                  <Form.Label>Puntuación</Form.Label>
                                  &nbsp;&nbsp;
                                  {puntuaciones.map((item:any, idx:number) => {
                                                    return(
                                                      <Form.Check
                                                      required
                                                      key={idx}
                                                      inline
                                                      type="radio"
                                                      label={item}
                                                      name="formHorizontalRadios"
                                                      value={item}
                                                      id={`formHorizontalRadios`}
                                                    />
                                                    )
                                                })
                                                }
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                  <Form.Control.Feedback type="invalid">
                                      Falta Seleccionar Puntuacion
                                    </Form.Control.Feedback>
                                </Form.Group>
                        
                              </Form.Row>
                            
                            
                              <Button type="submit">Guardar Evaluacion</Button>
                            </Form>
               
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  
                </Modal.Footer>
              </Modal>

              <Modal show={show_comentario} key='modal2' onHide={handleCloseC} size="lg">
                
                <Modal.Header closeButton>
                  <Modal.Title>Comentarios</Modal.Title>
                </Modal.Header>
                <Modal.Body>
               
                     <Form noValidate  id='modal2' validated={validated} onSubmit={guardarComentarios}>
                            <Form.Row>
                            <table className="table">
              <caption>Lista de Comentarios </caption>
              <thead>
                <tr>
                <th scope="col">Comentario</th>
                </tr>
              </thead>
              { data.length > 0 ? (
              <tbody>
                {evaluacionesD.map((item:any, idx:number) => {

                  return (
                    <tr key={idx}>
                    <th>{item.comentario} </th>
                    </tr>
                  )

                })}
                 </tbody>
              ): (
              <div className="nofound">Cargando lista de Comentarios ó no se encontraron Comentarios.</div>)}
           

            
             
            </table>

                              </Form.Row>                  
                              <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationComentario">
                                  <Form.Label>Comentario</Form.Label>
                                  <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nombres"
                                  />
                                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                  <Form.Control.Feedback type="invalid">
                                      Falta llenar Comentario
                                    </Form.Control.Feedback>
                                </Form.Group>
                                </Form.Row>
                  
                              <Button type="submit">Guardar Comentario</Button>
                    </Form>
               
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseC}>
                    Close
                  </Button>
                  
                </Modal.Footer>
              </Modal>
       
            <div className="container"> 
            <div className="pricing-header px-3 py-3 pt-md-1 pb-md-4 mx-auto text-center">
                  <button className="btn btn-outline-primary" onClick={() => handleShow()}  type="button" >Nueva Evaluacion</button>&nbsp;&nbsp;
                   <label>Fecha Inicio </label> <DatePicker
                    className="datepicker"
                    selected={fechaini}
                    onChange={changeFechaini}
                    
                  />&nbsp;

                    <label>Fecha Fin </label> <DatePicker
                    className="datepicker"
                    selected={fechafin}
                    onChange={changeFechafin}
                  />&nbsp;
                <button className="btn btn-outline-primary" onClick={() => rangoFechas(fechaini,fechafin)}  type="button" >Busqueda por Rango</button>&nbsp;&nbsp;
                <button className="btn btn-outline-primary" onClick={() => listar_Evaluaciones()}  type="button" >Listar Todo</button>&nbsp;&nbsp;
                </div>

                <table className="table">
              <caption>Lista de Evaluaciones </caption>
              <thead>
                <tr>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Correo</th>
                <th scope="col">Puntuacion</th>
                <th scope="col">Fecha Inscripcion</th>
                <th scope="col">Accion</th>
                </tr>
              </thead>
              { data.length > 0 ? (
              <tbody>
                {data.map((item:any, idx:number) => {

                  return (
                    <tr key={idx}>
                    <th>{item.nombres} </th>
                    <td>{item.apellidos} </td>
                    <td>{item.correo} </td> 
                    <td  scope="row">{item.puntuacion} </td>
                    <td>{item.fecha_inscripcion} </td>
                    <td> <button className="btn btn-outline-primary" onClick={() => handleShowC(item._id)}  type="button"  >Comentarios</button></td>
                  </tr>
                  )

                })}
                 </tbody>
              ): (
              <div className="nofound">Cargando lista de Evaluaciones ó no se encontraron datos.</div>)}
           

            
             
            </table>

            </div>
          </div>
          );

}

export default TabContent1;
