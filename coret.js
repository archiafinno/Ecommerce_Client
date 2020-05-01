body {
  margin: 0;
  background: #f3f5f9;
  overflow-x: hidden;
  padding: 0;
}
.wrapper {
  margin: 0;
  padding: 0;
}
.sidebar {
  margin: 0;
  padding: 0;
  width: 300px;
  background-color: #4b4276;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
.sidebar a.active {
  background-color: #4CAF50;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

.main_content {
  width: 82%;
  margin-left: 300px;
  height: 100vh;
}
.sidebar h1 {
  color: #fff;
  font-family: 'Permanent Marker', cursive;
  text-transform: uppercase;
  text-align: center;
  margin-top: 30px;
}
.sidebar a .fas {
  width: 25px;
}


@media screen and (max-width: 700px) {
.sidebar {
  width: 100%;
  height: auto;
  position: relative;
}
  .sidebar a {float: left;}
  .main_content {margin-left: 0; width: 100%;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
      text-align: center;
      float: none;
  }
}