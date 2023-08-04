import { hasAnyRoles } from "util/auth";
import * as TokenModule from '../tokenData';

describe('Testes da função hasAnyRoles', () => {
    
    test('should return true when empty list', () => {
       const result = hasAnyRoles([])
       expect(result).toEqual(true);
    })

    // teste com getAuthData() Mockado
    test('should return true when user given role', () => {
        
        // simulando o retorno do getTokenData()
        jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
            exp: 0,
            user_name: '',
            authorities: ['ROLE_ADMIN', 'ROLE_OPERATOR']
        });
        
        const result = hasAnyRoles(["ROLE_ADMIN"])
        expect(result).toEqual(true);
     })
});