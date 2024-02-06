
export const AddButton = () => {
  return (
    
     <div className="d-md-flex justify-content-md-end mb-2 mt-4">
            <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Agregar +
            </button>
     </div>
  )
}

export default AddButton