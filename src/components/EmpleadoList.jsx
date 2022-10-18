import { ListGroup } from "react-bootstrap";
import { empleados } from "./dataEmpleados";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
  return (
    <ListGroup className="my-5">
      {empleados.map((empleado) => (
        <EmpleadoRow key={empleado.id} empleado={empleado}></EmpleadoRow>
      ))}
    </ListGroup>
  );
};

export default EmpleadoList;
