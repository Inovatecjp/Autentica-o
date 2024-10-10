export interface AuthenticationParams {
    login?: string | null;
    passwordHash?: string | null;
    externalId?: string | null;
    isExternal: boolean;
}

