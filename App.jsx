import { useState } from 'react';
import './index.css';
import { usuarios } from './dados/usuarios';
import { useNavigate } from 'react-router-dom';

function App() {
    const navegar = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function fazerLogin(){
        console.log("Botão clicado!");
        console.log("E-mail:", email);
        
        console.log("Senha:", senha);
        const usuarioEncontrado = usuarios.find((usuario) => {
            return (
                (usuario.email === email || usuario.nome.toLowerCase() === email.toLowerCase()) && usuario.senha == senha
        );
        });
        if(usuarioEncontrado){
            console.log("Login realizado com sucesso!");
            console.log("Nome:", usuarioEncontrado.nome);
            console.log("Tipo de usuário:", usuarioEncontrado.tipoUsuario);
            if (usuarioEncontrado.tipoUsuario === "responsavel") {
                navegar("/responsavel");
            }

            if (usuarioEncontrado.tipoUsuario === "aluno") {
                navegar("/aluno");
            }

            if (usuarioEncontrado.tipoUsuario === "coordenador") {
                navegar("/coordenador");
            }
        }else{
            alert("E-mail ou senha incorretos!");
        }
    }
    return (
    <div className="corpoCompleto">

        <div className="div1">

            <div className="informacoes">

                <div className="logo">

                    <div className="icone">
                        E
                    </div>

                    <div className="informacoes2">
                        <h3>EXPOTEC</h3>
                        <p>IFRN • ORGANIZAÇÃO</p>
                    </div>

                </div>

                <h1 className="ideias">
                    <strong>
                        Ideias que se<br />
                        conectam.<br />
                        Projetos que<br />
                        acontecem.
                    </strong>
                </h1>

                <p>
                    Um espaço para organizar salas, equipes, tarefas e<br />
                    materiais da EXPOTEC em um só lugar.
                </p>

                <p className="plataforma">
                    Plataforma de apoio à organização da EXPOTEC • IFRN
                </p>

            </div>

        </div>

        <div className="div2">

            <div className="dados">

                <p className="area">
                    <strong>ÁREA DE ACESSO</strong>
                </p>

                <h1 className="bemVindo">Bem-vindo(a)!</h1>

                <p className="entre">
                    Entre com seus dados para acessar a plataforma de<br />
                    organização da EXPOTEC.
                </p>

                <div className="campo">

                    <label className="email" htmlFor="Email">
                        <strong>E-mail ou usuário</strong>
                    </label>

                    <input
                        id="Email"
                        type="text"
                        placeholder="Digite seu usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <div className="campo">

                    <label className="senha" htmlFor="Senha">
                        <strong>Senha</strong>
                    </label>

                    <input
                        id="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                </div>

                <button className="Entrar" type="button" onClick={fazerLogin}>
                    Entrar na plataforma
                </button>

                <div className="Prototipo">

                    <p className="aviso">
                        <strong>Protótipo demonstrativo:</strong> qualquer usuário e senha permitem<br />
                        visualizar as telas. O acesso real deverá ser conectado ao sistema de<br />
                        autenticação.
                    </p>

                </div>

                <p className="entre">
                    Acesso destinado a participantes autorizados. Em caso de dificuldade,<br />
                    procure a equipe responsável pela EXPOTEC.
                </p>

            </div>

        </div>

    </div>
);

}

export default App;
