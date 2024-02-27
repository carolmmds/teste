const Api = {
    async login(email, password) {
      const BASE_URL = 'https://api-teste.hom.grupoimagetech.com.br/api/v1';
  
      try {
        const response = await fetch(`${BASE_URL}/login`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
  
        const data = await response.json();
  
        return { status: response.status, data: data };
      } catch (error) {
        console.error('Erro na solicitação:', error);
        throw error;
      }
    },
  
    async getClient() {

      const BASE_URL = 'https://api-teste.hom.grupoimagetech.com.br/api/v1';
  
      try {
        const response = await fetch(`${BASE_URL}/client`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          
        });
  
        const data = await response.json();
  
        return { status: response.status, data: data };
      } catch (error) {
        console.error('Erro na solicitação do cliente:', error);
        throw error;
      }
    },

    async createClient(authToken, clientData) {
        const BASE_URL = 'https://api-teste.hom.grupoimagetech.com.br/api/v1';
    
        try {
          const response = await fetch(`${BASE_URL}/client`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(clientData),
          });
    
          const data = await response.json();
    
          return { status: response.status, data: data };
        } catch (error) {
          console.error('Erro na criação do cliente:', error);
          throw error;
        }
      },
    };
  
  export default Api;
  