export const MenuAdmin = () => {
  return (
   
      <div className="row justify-content-between align-items-center">
        <div className="col-1 mb-2">
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menudespegable"
          >
            <img src="./src/assets/menu.svg" alt="imagen-menu" />
          </button>
        </div>
      </div>
  );
};

export default MenuAdmin;
