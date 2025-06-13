import { API_CONFIG } from "../appConfig";

/**
 * Classe para lidar com autenticação
 */
class AuthRequests {

    private serverUrl: string;
    private routeLogin: string;

    /**
     * Construtor das rotas e do endereço do servidor
     */
    constructor() {
        // endereço do servidor
        this.serverUrl = API_CONFIG.API_URL;
        // rota do servidor
        this.routeLogin = API_CONFIG.API_ROUTE_LOGIN;
    }

    /**
     * Realiza a autenticação no servidor
     * @param {*} email - email do usuáiro
     * @param {*} senha - email do usuário
     * @returns **true** caso sucesso, **false** caso erro
     */
    async login(email: string, senha: string): Promise<boolean> {
        const login = { email, senha };
        try {
            const response = await fetch(`${this.serverUrl}${this.routeLogin}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            });

            if (!response.ok) {
                console.warn('Falha no login: status', response.status);
                return false;
            }

            const data = await response.json();
            console.log('Resposta do login:', data);

            if (data.auth) {
                this.persistToken(data.token, data.usuario.nome, data.usuario.uuid_usuario, data.email, data.auth);
                return true;
            }

            return false; // auth é false
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return false;
        }
    }


    /**
     * Persiste o token no localStorage
     * @param {*} token - token recebido do servidor
     * @param {*} username - nome usuário recebido do servidor
     * @param {*} uuidUsuario - uuidUsuario recebido do servidor
     * @param {*} email - email do usuário recebido do servidor
     * @param {*} isAuth - autenticação recebida do servidor
     */
    persistToken(token: string, username: string, uuidUsuario: string, email: string, isAuth: string) {
        // adiciona o token no localstorade com o apelido de token
        localStorage.setItem('token', token);  // -> armazena o token no localStorage e coloca o 'apelido' de token
        // adiciona o nome de usuário no localstorade com o apelido de username
        localStorage.setItem('username', username);  // -> armazena o username no localStorage e coloca o 'apelido' de username 
        // adiciona o uuid da pessoa no localstorade com o apelido de idPessoa
        localStorage.setItem('uuidUsuario', uuidUsuario);  // -> armazena o idPessoa no localStorage e coloca o 'apelido' de idPessoa
        // adiciona o uuid da pessoa no localstorade com o apelido de idPessoa
        localStorage.setItem('email', email);  // -> armazena o idPessoa no localStorage e coloca o 'apelido' de idPessoa
        // adiciona o valor de autenticação no localstorade com o apelido de isAuth
        localStorage.setItem('isAuth', isAuth);  // -> armazena o estado da autenticação (true, false) no localStorage e coloca o 'apelido' de isAuth
    }

    /**
     * Remove as informações do localStorage
     */
    removeToken() {
        // remove o token do localstorade
        localStorage.removeItem('token');  // -> remove o 'apelido' de token do localStorage
        // remove o username do localstorage
        localStorage.removeItem('username');  // -> remove o 'apelido' de username do localStorage
        // remove o idPessoa do localstorage
        localStorage.removeItem('idUsuario');  // -> remove o 'apelido' de idPessoa do localStorage
        // remove o isAuth do localstorage
        localStorage.removeItem('isAuth');  // -> remove o 'apelido' de isAuth do localStorage
        // redireciona o usuário para a página de login
        window.location.href = '/login';
        sessionStorage.removeItem('dados_solo');
    }

    /**
     * Verifica a validade do token
     * @returns **true** caso token válido, **false** caso token inválido
     */
    checkTokenExpiry() {
        // recupera o valor do token no localstorage
        const token = localStorage.getItem('token');

        // verifica se o valor é diferente de vazio
        if (token) {
            // recupera a data de expiração do token
            const payload = JSON.parse(atob(token.split('.')[1]));
            // recuepra a hora de expiração do token
            const expiry = payload.exp;
            // pega a data e hora atual
            const now = Math.floor(Date.now() / 1000);

            // verifica se o token está expirado
            if (expiry < now) {
                // invoca a função para remover o token do localstorage
                this.removeToken();
                // retorna false
                return false;
            }
            // caso o token não esteja expirado, retorna true
            return true;
        }
        // caso o token esteja vazio, retorna false
        return false;
    }
}

export default new AuthRequests();