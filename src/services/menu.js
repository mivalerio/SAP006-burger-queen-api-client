export const Menu = async (token) => {
  
    try {
      const response = await fetch("https://lab-api-bq.herokuapp.com/products", {
        method: "GET",
        headers: { 
          accept: "application/json", 
          Authorization: token, 
        },
    
      });
      const produtos = await response.json();
      console.log(produtos)
      return produtos;
     
      
    } catch (json) {
      const codigo = json.code;
      if (codigo === 401 || codigo === 404) {
        throw new Error(json.message);
      }
    }
    
  };