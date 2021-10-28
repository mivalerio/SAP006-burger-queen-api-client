export const CriarPedido = async (novoPedido, token) => {
      
      const response = await fetch("https://lab-api-bq.herokuapp.com/orders", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': token,
        },

        body: JSON.stringify(novoPedido)
    })
    const json = await response.json();
    return json;
    
}

export const listaPedido = async (token) => {
  
  
    const response = await fetch("https://lab-api-bq.herokuapp.com/orders", {
      method: "GET",
      headers: { 
        accept: "application/json", 
        Authorization: token, 
      },
  
    });
    const jsonPedido = await response.json();
    //console.log(jsonPedido)
    return jsonPedido;

    
    
  }; 
  
   

     
      
