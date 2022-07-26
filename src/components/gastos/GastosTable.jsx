import { data } from "../bd";
const GastosTable = () => {
  return (
    <>
    <h1 className="mt-4">Gastos</h1>
    <hr />
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Categoría</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,i) => {
            let clase = "";
            item.cantidad < 20 ? clase="test" : clase ="";
            return (
              <tr key={i}>
                <th scope="row">{i + 1  }</th> 
                <td>{item.gasto}</td>
                <td>{item.categoria}</td>
                <td className={clase}>{item.cantidad}</td>
                <td><b>${` ${ (item.precio * item.cantidad).toFixed(2)}`}</b></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total">
        <h2>Total</h2>
        <div className="">
        </div>
      </div>
    </>
  );
};

export default GastosTable;
