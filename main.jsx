import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App.jsx';
import Responsavel from './responsavel.jsx';
import Coordenador from './coordenador.jsx';
import Aluno from './aluno.jsx';

import './index.css';

function Geral() {
    return <h1>Painel Geral</h1>;
}

function Salas() {
    return <h1>Salas</h1>;
}

function Materiais() {
    return <h1>Materiais</h1>;
}

function Solicitacoes() {
    return <h1>Solicitações</h1>;
}

function Relatorios() {
    return <h1>Relatórios</h1>;
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />

                <Route path="/responsavel" element={<Responsavel />} />

                <Route path="/coordenador" element={<Coordenador />}>
                    <Route index element={<Navigate to="geral" replace />} />
                    <Route path="geral" element={<Geral />} />
                    <Route path="salas" element={<Salas />} />
                    <Route path="materiais" element={<Materiais />} />
                    <Route path="solicitacoes" element={<Solicitacoes />} />
                    <Route path="relatorios" element={<Relatorios />} />
                </Route>
                <Route path="/aluno" element={<Aluno />}>
                  <Route index element={<Navigate to="geral" replace />} />

                  <Route path="geral" element={<h1>Painel do Aluno</h1>} />

                  <Route path="salas" element={<h1>Minha Sala</h1>} />

                  <Route path="tarefas" element={<h1>Minhas Tarefas</h1>} />

                  <Route path="materiais" element={<h1>Materiais</h1>} />
                </Route>
                <Route path="/responsavel" element={<Responsavel />}>

                  <Route index element={<Navigate to="geral" replace />} />

                  <Route path="geral" element={<h1>Painel Geral</h1>} />

                  <Route path="salas" element={<h1>Minha Sala</h1>} />

                  <Route path="integrantes" element={<h1>Integrantes</h1>} />

                  <Route path="tarefas" element={<h1>Tarefas</h1>} />

                  <Route path="organizacao" element={<h1>Organização da Sala</h1>} />

                  <Route path="materiais" element={<h1>Materiais</h1>} />

                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);