import { usuarios } from './dados/usuarios';
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
                    <p>Minha Sala</p>
                </NavLink>

              <NavLink to="integrantes" className="div0" id="div4">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEk0lEQVR4nO2ZXYgWVRjHZ4u1rd11pVKjItIiLBALWkmQtKUua3WtrroMxL7uQisLdrvoIvpAiCBIhIUIojIlhDCSIszMjxvzK/JO2rfa3TZzjdZ+8Sz/qeN05sy8M+d1RfzDwPvO8zznf57z8Z9nziTJJVwEAK4Anga+AU7p2g08BcwqEX81MAQcAiaBUeAz4BGg7XwlcQNwkHzsB64PxN8NnAzEbwWuPB8zkSZho9kPdOtaBRyWbZ9vZoAbgYZ8PgeWAx3AXOBxxzbc6kSeEdH3QI/H3uMk86TH/q5s24DLPfbbgHH5LG9lIntE0h/wWS2f3Zn7s4AJ4G/g5kD8oOLfjt1/l+R3kXQHfGbLZyJz/1bd/6GA4175fRmz71mS8RKJ2PIyjGXuL2gykS9i9j1LYhJrWBXwGZDP15n77c7SWhCIH1L8W7H775I8IZLDOZt9DnBUPus89ndk256z2RcBv8lnWSsTaZe0Go5oY8/WNeAksdd8PfHzHYndBayQ/Nr9tcAvsm1pWRKZzqQS64PZ5gfil9j+CcTvsOdVq5OwGXkDmAp05C/gFV9ngGuB9whjwrcsq3Z4HvAycMCppaz0+FZkfwKbgF7gKqBTv18DTjsPvfZMElYNGEaADdoTHVK6PuB9iUFaquzL8JsQzC2bxMMalRA2BuLvAE7I703da9OeMHxlSQXiNxVwmxgMlEkiHZGPtRk7NWIPqEJNl09/QTKn5Xc78KjifjRlC8QNOMv2U+B+oEt9WKlZMpw1oQktp3Qmns3xaXNKiJ9D0wy8Lr9XgZ36/ViBiPwqv+cDfuvlM+6dWe2J6ZnIa8Tx3VGCcKl8jgFndHUG/F+U//YS/Lb/DIM+Y1qeryjRkC0zw3cBHyvtXRwvaNM2s6GvBP998t3vM6bLqqtEQ9f46qmMQr3k2aSDecvRqePmlODv9hWmqXGsiUTShkY9ttV6dc3DuE91YvEntkxkXFmiIdN8w15PEmc9qpdVnalsMjH4pwG8IOPWpAAq+gzPZVRnLKR6GdUZdUuZuvx58rc+yYEFy8cKvHkVVS9VnaFY/ElgaWyTOnTp6nNGYir7QGxS9VLVORCL/38AHlItlQezPeiJ+6PCZj0Vi/8cAAt1TFOEndm3vBiqQw1+t5FlTmesOt0I3Omozl16+jaczXpPLNWpyz8N4BbngfRBiVOSD+VrxAvrqk4M/mnY0YvTSOHZK3AZ8JFidtVVnRj8iVM3jYRGwtNYjyrgf+ujKqoTjR/YUvSyFGgsrac2Z1THKt08nHFVJxo/cFx/llRoyDag4aj+3+Q87EL4xHwVE4ef/96xuys0lMqoPUMWO4pSRnUaionCn6RD1GwjTmMpGhVUpxGLP4mYSFXVueASGamhOvESocLpnr5gEUF1avMnjlTaiG62Uz6VC3Z4dp0O0Dr0e5Fs6+RrMURQnbr8k+lZln1Kq4s6qlMHh4A1bqO9+kY4rE9sdrL+kz4fT+r3EdmG5bs04h6ztprl763Km9uRmYqPhosuEeqqzkyDOKo3OdN5JBFU71zVmWlUVL14qnMJyYWFfwBfBt06hJMUfAAAAABJRU5ErkJggg==" alt="groups"></img>
                    <p>Integrantes</p>
                </NavLink>

                <NavLink to="materiais" className="div0" id="div3">
                    <img className="imgMaterial" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvklEQVR4nO2Zu0oDQRRAB2I6RSsJpsgviCL4C2Jll78QRXv/QSuJH6EoiHY2FkGxiIi1gr1EbYxHRu7IEOLujLLZuzKnyWtvOIfADewY4Ao9XAIt8xvQxxOw9NeQe2DOlAAwBZyIxxvQjv0Cx5332CjMONulDuyLxwDYihl2zAK9sn8ZC7AuIZaODTR5uAp5rilmDXgRl3NgOjhEYcw88CAuvcyNNhyiMKYJXOdutFEhCmMmgePMjfZTiMKYGrArLh/ATnCItpjMjZYXojRmBXgWn7OvjRYSIsMN709TG93gEC9GJeb7SfjPGnV90ZBCBKMEnE+sWAopCFKIYJSA84kVSyEFQQoRjBJwPrFiKaQgSCGCUQLOJ1YshRQEKUQwSsD5/LsQ8m4SDw8qDLn07g/VqxzSBB7l9UHwoBLwfYBFoC/vbQcPKoBhH2AVeJcbxO3KhljsmZ28/wosm6qGWIA971ClVeWQGnAkn98CM0GDJUGWj5x538g1p8BE0GAJkOcja9kdRHaCB8cMIT7AgreWN4MHxwihPt5aHsjZdzVDLMCGXN+vdIjFO1GtfEgNOEQpJrLeruVu2dIjuPgEwx7Wgp12iN4AAAAASUVORK5CYII=" alt="orthogonal-view--v1"></img>
                    <p>Materiais</p>
                </NavLink>

                <NavLink to="tarefas" className="div0" id="div4">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACaElEQVR4nO2av27UQBCHDUdSEFJSoAiQKJM8AaQklKQJdV4gSnLhBWi4QA09RcITwBNcXoELER0iR0EZaKC4Dw36bWTC4T+7trMG/6SVLHt2dj97Zzx7viSpScBt4DXwRc2ObyVtErAAfOJPfQRuJG0R8FITfyMoa2917sVFTGgWeA58xk8LKV83PX2MgWc2lxAQc+Cr4RR/hwH+9kJA7G6Y7mbY/FLAGJn9gRWZjH3HKDTJukGqGOO/AxnnLb+MvvfU9yR0HlWA7BGupzGAzArGPZkyOjGIvNRKEyBNiA5E6kAqFh2I1IG0BYSwKjZPh/8KyLAxkKZFByJ1IG0BoctahTRsDKRp0YHEB3IHeNh6kGDVHOzTstMMsA4cAO+Bb8BXHR/o2kxsIL9lJ2AN+FCgn9msVQJSpYDL535SegfsAEvAnJod94GRbCbAwPrGBOIgvgObQC/DtgdsAT/UZxAFiJbTRBD3i44PrApmUiib1QmiwHYxsVl2fGA7FTPZCaCGYD/LVMpALiZ6HiBXgCOZrDcNcpaplE5NO2XHdwJ2ZbKfZCnPUYiAY7lf9B0fWJbJ8UWCnMr9/F+uLxYAmZfJaZQgwIbe6qZR7CBuaS2lzl0FXqViyo7nYl9aLtj7qXOPdM6exkYBH49jCHaXfkfp9As8yUoA59KvFZP+6beGF+KWR/9+mRei+5y2EjLpAiWKlRurJfo9KFuiVPGhc5rsBl3XGFbFoolt25LJWU59n6Ix5ENnnuxPNpdUxg90d13M7CojXVNbVmAfeZXxTcqWCMU3Vv779yY0Zatr21xr9iT2s7a6PwFarmcza3gv9gAAAABJRU5ErkJggg==" alt="task-planning"></img>
                    <p>Tarefas</p>
                </NavLink>

                <NavLink to="organizacao" className="div00" id="div5">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB3ElEQVR4nO2Xu0oDURCGF1NYSGzVmEIIKIi+QQr7eGnyDpZaJLGzUTvfwT4PoDYRtBQba8VOiJVX8NJ8MvgvDrrZnGguCP6wkP3P3PbMzDmTKPrHXwTQ5Dua/XKepzUm+xHAipztO+5A3HI/AtiVsx3H7Yjb7ZaTKeAM2ASmxc0DJ267y06+7PhjkxU/LRtma6qTAOpfcnsOPOv3BbAGjDj5EXG2hmRNx6Me6nxBCvfAHnCr9zegAgyl6A5JxmSR7p5sGRbaOc+4yGvihlV4xQ52sCidYb3X3E5m0hRX3dfmU+QWgQbwBDzqd6lN68a7spoWwAxw5XJdSJDZTjkHthLkC642zPZMywAMwBhwKoWbuAvclxtelOsJPVVx+J1QF5gNZHMsCgEfVX0txVnHH4mrJOjEeW44blbcte+a0CDupJx1nOXbMJ4gP661B8dlxd115DwlgAdxEzHn1ibj9nXc6I8CoHUKrNoN1QSdja6kgPQiLLkitJzn9Jjz14QiLHRUhIS14VbP2pDwg6ikdDx2+yDKDPQoDriMqgGXUe3Hl1HgdXwJrCdcx+ta+9113GYgsWEjZCCZ+9VAMvCRLA02eMrZgeMOxS1FvQafR24Scj0PYOB/TP4RdRnvzC3zDl1J4PUAAAAASUVORK5CYII=" alt="settings--v1"></img>
                    <p>Organização das salas</p>
                </NavLink>

                <hr className="divisor-menu" />

                <div className="div6" id="div6" onClick={sair}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMElEQVR4nO3aPU4DMRCGYUNBiwQtF0E5GG0a/m6SE9AgDkARoKCjzXKNN5rIFJGSlSfRhm9GfntL8yg/u7ZcgAvgGfhFpwF4tNlKa8ATuj14IKa3botIwKzONHgWbSpi4Z2rQyaODhGLDhELuEsBsYB5yQBx1SETBiyAF+AyOmRZx3pvxohCboCfOpqhrkJCDsKoQnZgPkYxyhAXRh2yB3NdIkKaMFEgOzCfW5hIkFFMNMhezDEQ4Az44v9bHgs5rz+82JA0Xy2pv2ECQRh7lkSBkOGBSMv7ljqE1td5ZQiePYkqhAwbK7JsdYHvLIcPb8Br+OOgg+qQE0SGQ2xg7ppLGLJpugUnCu9cHTJxdEgCyFDXzIrepZqVZ5Hdi1Lt3gOxi2eG+ftkFFoZwnPxbA0aJ/yMSXSpsgAAAABJRU5ErkJggg==" alt="exit--v1"></img>
                    <p>Sair</p>
                </div>

            </div>

            <div className="corpoBranco">

                <div className="cabecario">
                    <h1>Aqui vcs coloca o Bem-vindo usuario(Responsável)</h1>
                
                </div>
                <Outlet />

            </div>

        </div>
    );
}

export default Menu;