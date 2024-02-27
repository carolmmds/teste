import { styled } from "styled-components";
import { AuthProvider } from './AuthProvider';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Card from "./componentes/Card";
import Login from "./componentes/Login";
import Cliente from "./componentes/Cliente";
import Logout from "./componentes/Logout";


const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route
              path="/login"
              element={
                <AppContainer>
                  <Card>
                    <Login />
                  </Card>
                </AppContainer>
              }
            />
            <Route path="/cliente"
              element={
                <Cliente />
              }
            />
            <Route path="/logout"
              element={
                <Logout />
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
