function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold underline text-lime-400 text-center bg-pink-500 p-2">
      <i className="fa-regular fa-handshake"></i> Hello world!
      </h1>
      <div className="collapse bg-base-200">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          Click me to show/hide content
        </div>
        <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default App;
