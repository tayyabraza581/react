function App() {
  return (
    <>
     
        <div
          className=" bg-dark mx-auto shadow rounded px-4 py-3 text-white"
          style={{ maxWidth: "42rem" }}
        >
          <h1 className="text-center mb-4 mt-2 fw-bold fs-3">
            Manage Your Todos
          </h1>

          <div className="mb-4">{/* Todo form goes here */}</div>

          <div className="d-flex flex-wrap gap-2">
            {/* Loop and Add TodoItem here */}
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default App;
