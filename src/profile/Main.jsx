const Main = () => {
    return (
      <div>
        <center>
          <br></br>
          <label for="name">Profile: &emsp;</label>
          <br></br>
          <br></br>
          <img src="https://th.bing.com/th?q=View+Profile+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img>
          <br></br>
          <br></br>
          <label for="name">Email Id: &emsp;</label>
          <input id="name" type="Email" placeholder="Email ID"></input>
          <br></br>
          <br></br>
          <label for="na">Password: &emsp;</label>
          <input id="na" type="Password" placeholder="Password"></input>
          <br></br>
          <br></br>
          <button className="px-4 py-2 rounded-lg bg-blue-300 font-medium">
            SUBMIT
          </button>
          <br></br>
          <br></br>
        </center>
      </div>
    );
  };
  export default Main;