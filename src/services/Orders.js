export const CriarPedido = async (novoPedido, token) => {
      console.log(novoPedido)
      const response = await fetch("https://lab-api-bq.herokuapp.com/orders", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': token,
        },

        body: JSON.stringify(novoPedido)
    })
    const json = await response.json();
    console.log(json);
}
      
     
      
