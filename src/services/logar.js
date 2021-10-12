export const Logar = async (Email, Senha) => {
    try {
      const response = await fetch("https://lab-api-bq.herokuapp.com/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: Email,
          password: Senha,
        }),
      });
      const json = await response.json();
      const token = json.token;
      const email = json.email;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      return token;
     
      
    } catch (json) {
      const codigo = json.code;
      if (codigo === 400 || codigo === 403) {
        throw new Error(json.message);
      }
    }
    
  };