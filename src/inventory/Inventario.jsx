const Inventario = () => {
  return (
    <>
      <div className="container-sm">
        <div className="row">
          <div className="col-sm">
            <div className="container-sm">
                <h3 className="mt-4">Artículos</h3>
                <form>
                    <h3>Nuevo Artículo</h3>
                    <hr />
                    <input type="text" className="form-control mt-4" placeholder="SKU" autoFocus />
                    <input type="text" className="form-control mt-4" placeholder="Nombre Producto" />
                    <input type="text" className="form-control mt-4" placeholder="Categoría" />
                    <input type="text" className="form-control mt-4" placeholder="Cantidad" />
                    <input type="text" className="form-control mt-4" placeholder="precio" />
                    <input type="text" className="form-control mt-4" placeholder="existencia" />
                </form>
            </div>
          </div>
          <div className="col-sm">
            <div>
                <input type="date" className="date mt-4" />
            </div>
          </div>
          <div className="col-sm">One of three columns</div>
        </div>
      </div>
    </>
  );
};

export default Inventario;
