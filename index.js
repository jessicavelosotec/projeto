const USUARIOS = [

    {
        usuario: "professor@email.com",
        senha: "1234"
    },

    {
        usuario: "admin@email.com",
        senha: "1234"
    },

    {
        usuario: "jessica@email.com",
        senha: "1234"
    }

];


document
    .getElementById("loginForm")
    .addEventListener("submit", async function(event) {

        event.preventDefault();


        const usuario = document
            .getElementById("email")
            .value
            .trim()
            .toLowerCase();


        const senha = document
            .getElementById("senha")
            .value;


        // ========================================
        // 1. TENTA LOGIN PELO MYSQL
        // ========================================

        try {

            const resposta = await fetch("/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    usuario: usuario,
                    senha: senha

                })

            });


            const dados = await resposta.json();


            if (dados.sucesso) {

                sessionStorage.setItem(
                    "logado",
                    "true"
                );

                window.location.href = "index.html";

                return;

            }

        }

        catch (erro) {

            console.log(
                "Servidor/MySQL indisponível."
            );

        }


        // ========================================
        // 2. TENTA LOGIN PELO JAVASCRIPT
        // ========================================

        const usuarioEncontrado =
            USUARIOS.find(function(conta) {

                return (

                    conta.usuario === usuario &&

                    conta.senha === senha

                );

            });


        if (usuarioEncontrado) {

            sessionStorage.setItem(
                "logado",
                "true"
            );

            window.location.href =
                "portfolio.html";

        }

        else {

            alert(
                "Usuário ou senha incorretos!"
            );

        }

    });