import './menu.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Geral() {
    return (
        <div>
            <h1>Painel Geral</h1>
            <p>Bem-vindo à organização da Expotec!</p>
        </div>
    );
}

function Salas() {
    return (
        <div>
            <h1>Salas</h1>
            <p>Aqui ficarão as informações das salas.</p>
        </div>
    );
}
function Menu() {
    const navegar = useNavigate();

    function sair() {
        navegar('/');
    }
    return (
        <div className="coordenador corpoCompleto">

            <div className="menu">

                <div className="logo">

                    <div className="icone">
                        E
                    </div>

                    <div className="informacoes2">
                        <h3>EXPOTEC</h3>
                        <p>IFRN • ORGANIZAÇÃO</p>
                    </div>

                </div>

                <NavLink to="geral" className="div11" id="div1">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBUlEQVR4nO3Yz4tNYRzH8WP8SGkUohRSJEWa2VjajTJloSwsFAv5C8gsLW0trSyt2MmQsrCQ2flRkliInd+RezFeOjp3PD1z73TvufccZ+p5161bz/N8Pp/v6flxnpNliUSiEnAIT/Ey/58tJ3AWP/zjJy5kTQdrcVVvrmFd1kSwG4+iwA+KX0jeZ1fWJDCND1HQK1iDVbgUtX3GsSYEX5HPbcwH4Vo406XvSXwL+v0uChv7X+HX40b0ZF/j4BJjJvAqGnMTG+oOvxfPoiD3sKWPsZtwOxr7AgfqCn8CX6OpcDmf6wNorMTFaOp9x+kqg3dbjF9wfAjNo/jYZfGvHnX4zbgbGT3HvhFo7ylO7JD72Dqq8JN4Exlcx/hIDLK/HuOFZkjuOTms8ES0v//CTL59jip8tCXPFB4d3pde3Pk8xJNA7B2mSokN5jtVeHV4XGpN5DtCIPJpFPN9AO/9xWnd4VQZkXCvPldJ0iXA+cD/VhmBt4HAjqxmsDNc0GUEwkOm9vcVjAX+82UEFqgkYdUZpAKGRyqgoJJ0VWdQYnBxtZxD22LaRduRRhaAw8XdoB+mm1jAnP552MQC2sGQRXdcbAzaW00sYIE6NbM6zVIBg5AK6EIqYBBSAV1IBQxCjxeyfmjVqdkT3ClpNlunZk+wvfi00u9Ty/vNYludmolEIlve/AEb03kuSZCqPwAAAABJRU5ErkJggg==" alt="home--v1"></img>
                    <p>Geral</p>
                </NavLink>

                <NavLink to="salas" className="div0" id="div2">
                    <img className="imgSala" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEk0lEQVR4nO2ZXYgWVRjHZ4u1rd11pVKjItIiLBALWkmQtKUua3WtrroMxL7uQisLdrvoIvpAiCBIhIUIojIlhDCSIszMjxvzK/JO2rfa3TZzjdZ+8Sz/qeN05sy8M+d1RfzDwPvO8zznf57z8Z9nziTJJVwEAK4Anga+AU7p2g08BcwqEX81MAQcAiaBUeAz4BGg7XwlcQNwkHzsB64PxN8NnAzEbwWuPB8zkSZho9kPdOtaBRyWbZ9vZoAbgYZ8PgeWAx3AXOBxxzbc6kSeEdH3QI/H3uMk86TH/q5s24DLPfbbgHH5LG9lIntE0h/wWS2f3Zn7s4AJ4G/g5kD8oOLfjt1/l+R3kXQHfGbLZyJz/1bd/6GA4175fRmz71mS8RKJ2PIyjGXuL2gykS9i9j1LYhJrWBXwGZDP15n77c7SWhCIH1L8W7H775I8IZLDOZt9DnBUPus89ndk256z2RcBv8lnWSsTaZe0Go5oY8/WNeAksdd8PfHzHYndBayQ/Nr9tcAvsm1pWRKZzqQS64PZ5gfil9j+CcTvsOdVq5OwGXkDmAp05C/gFV9ngGuB9whjwrcsq3Z4HvAycMCppaz0+FZkfwKbgF7gKqBTv18DTjsPvfZMElYNGEaADdoTHVK6PuB9iUFaquzL8JsQzC2bxMMalRA2BuLvAE7I703da9OeMHxlSQXiNxVwmxgMlEkiHZGPtRk7NWIPqEJNl09/QTKn5Xc78KjifjRlC8QNOMv2U+B+oEt9WKlZMpw1oQktp3Qmns3xaXNKiJ9D0wy8Lr9XgZ36/ViBiPwqv+cDfuvlM+6dWe2J6ZnIa8Tx3VGCcKl8jgFndHUG/F+U//YS/Lb/DIM+Y1qeryjRkC0zw3cBHyvtXRwvaNM2s6GvBP998t3vM6bLqqtEQ9f46qmMQr3k2aSDecvRqePmlODv9hWmqXGsiUTShkY9ttV6dc3DuE91YvEntkxkXFmiIdN8w15PEmc9qpdVnalsMjH4pwG8IOPWpAAq+gzPZVRnLKR6GdUZdUuZuvx58rc+yYEFy8cKvHkVVS9VnaFY/ElgaWyTOnTp6nNGYir7QGxS9VLVORCL/38AHlItlQezPeiJ+6PCZj0Vi/8cAAt1TFOEndm3vBiqQw1+t5FlTmesOt0I3Omozl16+jaczXpPLNWpyz8N4BbngfRBiVOSD+VrxAvrqk4M/mnY0YvTSOHZK3AZ8JFidtVVnRj8iVM3jYRGwtNYjyrgf+ujKqoTjR/YUvSyFGgsrac2Z1THKt08nHFVJxo/cFx/llRoyDag4aj+3+Q87EL4xHwVE4ef/96xuys0lMqoPUMWO4pSRnUaionCn6RD1GwjTmMpGhVUpxGLP4mYSFXVueASGamhOvESocLpnr5gEUF1avMnjlTaiG62Uz6VC3Z4dp0O0Dr0e5Fs6+RrMURQnbr8k+lZln1Kq4s6qlMHh4A1bqO9+kY4rE9sdrL+kz4fT+r3EdmG5bs04h6ztprl763Km9uRmYqPhosuEeqqzkyDOKo3OdN5JBFU71zVmWlUVL14qnMJyYWFfwBfBt06hJMUfAAAAABJRU5ErkJggg==" alt="groups"></img>
                    <p>Salas</p>
                </NavLink>

                <NavLink to="materiais" className="div0" id="div3">
                    <img className="imgMaterial" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvklEQVR4nO2Zu0oDQRRAB2I6RSsJpsgviCL4C2Jll78QRXv/QSuJH6EoiHY2FkGxiIi1gr1EbYxHRu7IEOLujLLZuzKnyWtvOIfADewY4Ao9XAIt8xvQxxOw9NeQe2DOlAAwBZyIxxvQjv0Cx5332CjMONulDuyLxwDYihl2zAK9sn8ZC7AuIZaODTR5uAp5rilmDXgRl3NgOjhEYcw88CAuvcyNNhyiMKYJXOdutFEhCmMmgePMjfZTiMKYGrArLh/ATnCItpjMjZYXojRmBXgWn7OvjRYSIsMN709TG93gEC9GJeb7SfjPGnV90ZBCBKMEnE+sWAopCFKIYJSA84kVSyEFQQoRjBJwPrFiKaQgSCGCUQLOJ1YshRQEKUQwSsD5/LsQ8m4SDw8qDLn07g/VqxzSBB7l9UHwoBLwfYBFoC/vbQcPKoBhH2AVeJcbxO3KhljsmZ28/wosm6qGWIA971ClVeWQGnAkn98CM0GDJUGWj5x538g1p8BE0GAJkOcja9kdRHaCB8cMIT7AgreWN4MHxwihPt5aHsjZdzVDLMCGXN+vdIjFO1GtfEgNOEQpJrLeruVu2dIjuPgEwx7Wgp12iN4AAAAASUVORK5CYII=" alt="orthogonal-view--v1"></img>
                    <p>Materiais</p>
                </NavLink>

                <NavLink to="solicitacoes" className="div0" id="div4">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBUlEQVR4nO2YW4iVVRTHPx3vU1ZYZNPEYJR4iyIIKcEHe9KCxFGzlwo1kUyDIPStNCinJ4leki4gUQYK3ewhRyWCbphZqS9ieRt9ydtkVpDzi6X/b1qz57vMOeeb6Rz4/nA4Z//3/1t7r/PtvfZeK4pKlChRokQURcAooAM4BXQBrxgXNRqAjfTHy1GjgatvwfAAMEu/u4Zq8AeBsQXZuoK0do22xwJz0jpvAf4ADgPNNQwyCXjOLacLwFnXXgbcUIP9Zs3xIjAxSfC6BtpWgwPbgMvk40/gVeD6KsfaLjuvhR03A38D/wBTHb8EeBZoyjG8QP8QequbgflAGzBOnzZxb0hjOALcnWO7SXNY4rhpmutfwE1evEaGP3TcGOCY+EcyBnrYvYX3El93/2cmAu/rmXPAXRna+dIdBUY7/mPxz3jxtyIXOW6VuO+B4SmD3AGcl25DngPBs8OAl/Ss/WHXpuiGAz9It9Lxj4r7OiZuc5uyN2IBe8W3Z0xmqzT2PawSR5wztq8MmzJ0i6T5LohcNuceoNWLPg3WoOG3tNMYmKwldckiXqVOODutWutmZ0KKZrSLfFMcv0PcwkjRw/CCE6wW91bGBJ6X5s1qnXC2tvRb7wGAd0IN8KK4DmvsUmOeE7wrbnlo0Gk+z1t6AwXwWF7oB1ZIsyUINIZOaxxQY5oT/CTungzDFjoNkwpw5E7ZOpKhuVea/Y6bIe6ANU6r0Rs2k7gEw/G5UfUtwNkaL1vdGZoWaU4mcF2RNhlBxIq5MRmGr6BWJwZqj6tRynApkdN1oc+kk5yrA0eaJbnouHHeEUt88CEUOCGutY4caZPkmONu7V1ubrNPd4J94mbWkSP3S7I3YbP/bI3OhPD7trjVdeTImvDccuF3Z6S8OjwQnxK3tY4c+UCSZY5bL26jNRaqscMJbtcd5ve08DqUjgDXaC49/twCPtNj7fGlsSfh0vilRI/XgSNPqvuLIGJ1914aRX4j4WInXBpvpPAaD9yovjMFOmJ/pOG6hMTqoPqeSLjGf5W0kT4K6lK/iF8QGJ8tfl+BjsTR876AbxdvV6KRjv9E/Kq0VNffuRbLyREpNatNBTpiKXCfoCN+hObgV8t0pRB9U92g+LA9Z8CRrmY1p0BH5srmCZ/SVlR8qKQcZOtURg5VkxVm2LWU1sY2PF11OWggBToVJH4NN15RAJbL9vGcC2t6gW6AA8WH5495JaIq7Te5XKijaPvxIDMVDGyTzRqUQaIhGMcyM4Ye+wfDkT3/gyO7C3ekAoft2mBoSeiL84fzUb2D/6oyaxP61qmvM6p3AA9psnZTWKsCQYt+G2eYGzUCgA0Z63591EgA5in77Nans2HeRIkSJUpEg41/AcRMomkLNtkiAAAAAElFTkSuQmCC" alt="alarm--v1"></img>
                    <p>Solicitações</p>
                </NavLink>

                <NavLink to="relatorios" className="div0" id="div5">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVR4nO3TPS8EURTG8VFICInQKEiUCrUQGr1E4TtIdKLXi4JeySdQCI1KIjRK0Sh0okCl8faT2T0bk4mdHYm1wvybM/ece8957n0ySVJRkUOQdAqVgL8oAAM4xlxbBGAdSwX1nWh7iq5vFYB5vMWxbXTn6otRe8R4mYY1Sg4fw139hNeIRxiK+kimvlz2RjVK7OvGSX23fczgJtZXmMBBrA9bPn0DH8wmBWAz9l1jMHKjOI/8U8RbDBf1aibgLTztK/A9HTKTq/VgN9NnIfkKPniOeImpnO/3UVtt0qMLa+kFvjQ8J2ASF/H9Er9aP84it9fK19K+Z2lMzzznRghIecj7/u3ICMjkpsMKn/nedgEp6MUWVpJ2oomAH0MlIKgEJJ0W0C5+v4CKf8c7Ft/jkV8lNrgAAAAASUVORK5CYII=" alt="graph"></img>
                    <p>Relatórios</p>
                </NavLink>

                <hr className="divisor-menu" />

                <div className="div6" id="div6" onClick={sair}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMElEQVR4nO3aPU4DMRCGYUNBiwQtF0E5GG0a/m6SE9AgDkARoKCjzXKNN5rIFJGSlSfRhm9GfntL8yg/u7ZcgAvgGfhFpwF4tNlKa8ATuj14IKa3botIwKzONHgWbSpi4Z2rQyaODhGLDhELuEsBsYB5yQBx1SETBiyAF+AyOmRZx3pvxohCboCfOpqhrkJCDsKoQnZgPkYxyhAXRh2yB3NdIkKaMFEgOzCfW5hIkFFMNMhezDEQ4Az44v9bHgs5rz+82JA0Xy2pv2ECQRh7lkSBkOGBSMv7ljqE1td5ZQiePYkqhAwbK7JsdYHvLIcPb8Br+OOgg+qQE0SGQ2xg7ppLGLJpugUnCu9cHTJxdEgCyFDXzIrepZqVZ5Hdi1Lt3gOxi2eG+ftkFFoZwnPxbA0aJ/yMSXSpsgAAAABJRU5ErkJggg==" alt="exit--v1"></img>
                    <p>Sair</p>
                </div>

            </div>

            <div className="corpoBranco">

                <div className="cabecario">
                    <h1>Aqui vcs coloca o Bem-vindo usuario(Coordenador)</h1>
                
                </div>
                <Outlet />

            </div>

        </div>
    );
}

export default Menu;