import { v4 as uuidv4 } from 'uuid';
import { AuthenticationParams } from '../interfaces/interfaces';



class Authentication {
    id: string;
    login: string | null;
    passwordHash: string | null;
    isExternal: boolean;
    externalId: string | null;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    
    /**
     * Construtor da classe Authentication.
     * @param {{login: string | null, passwordHash: string | null, externalId: string | null, isExternal: boolean}} params
     * @throws {Error} Caso o login ou passwordHash sejam nulos e isExternal seja false
     * @throws {Error} Caso o externalId seja nulo e isExternal seja true
     */
    constructor({login = null, passwordHash = null, externalId = null, isExternal} : AuthenticationParams){
        
        if (isExternal){
            this.validateExternalId(externalId!);
            this.externalId = externalId;
        }
        else {
            this.validateLoginCredentials(login!, passwordHash!);
            this.login = login;
            this.passwordHash = passwordHash;
        }

        this.id = uuidv4()
        this.isExternal = isExternal;
        this.active = true ;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }


    /**
     * Valida se o externalId é nulo.
     * @param {string} externalId
     * @throws {Error} Caso o externalId seja nulo
     * @private
     */
    private validateExternalId(externalId: string): void {
        if (!externalId) {
            throw new Error('externalId é nulo');
        }
    }

    /**
     * Valida se o login ou passwordHash são nulos.
     * @param {string} login
     * @param {string} passwordHash
     * @throws {Error} Caso o login ou passwordHash sejam nulos
     * @private
     */
    private validateLoginCredentials(login: string, passwordHash: string): void {
        if (!login || !passwordHash) {
            throw new Error('login ou passwordHash são nulos');
        }
    }
}

export default Authentication;