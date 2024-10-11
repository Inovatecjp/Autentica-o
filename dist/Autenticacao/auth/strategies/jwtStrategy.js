import jwt from 'jsonwebtoken';
class JwtStrategy {
    /**
     * Gera um token JWT para uma autenticao.
     * @param {Partial<IAuthentication>} auth - A autenticao.
     * @returns {Promise<string>} Retorna o token JWT.
     */
    async authenticate(auth) {
        return jwt.sign({ id: auth.id }, process.env.JWT_SECRET || '123', { expiresIn: '1h' });
    }
    async verify(token) {
        try {
            /**
             * Verifica se o token JWT  vlido.
             * @param {string} token - O token JWT.
             * @returns {Promise<any>} Retorna o payload do token JWT, caso o token seja vlido.
             * @throws {Error} Caso o token seja inv lido.
             */
            return jwt.verify(token, process.env.JWT_SECRET || "123");
        }
        catch (err) {
            throw new Error('Invalid token');
        }
    }
}
export default JwtStrategy;