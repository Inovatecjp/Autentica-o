import { IAuthenticationParams, IAuthentication, IAuthenticationRepository } from "../../interfaces/authInterfaces";

class authenticationRepositoryAlternativo implements IAuthenticationRepository {

    createAuthentication(authData: IAuthenticationParams): Promise<IAuthentication> {
        throw new Error("Method not implemented.");
    }
    updateAuthentication(id: string, updateData: Partial<IAuthenticationParams>): Promise<IAuthentication> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<IAuthentication | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<IAuthentication[] | null> {
        throw new Error("Method not implemented.");
    }
    deleteAuthentication(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findByLogin(login: string): Promise<IAuthentication | null> {
        throw new Error('Method not implemented.');
    }       


    async findByExternalId(externalId: string): Promise<IAuthentication | null> {
        throw new Error('Method not implemented.');
    }


    async deactivateAuthentication(id: string): Promise<void> {
        throw new Error('Method not implemented.'); 
    }
    
}

export default authenticationRepositoryAlternativo;