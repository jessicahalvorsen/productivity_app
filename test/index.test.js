const { getDescription } = require("../src/database/controllers/taskController");
const { getFirstName, getPassword, getLastName, getEmail } = require("../src/database/controllers/userController");

describe('Tests', () => {
    it('Should get first name', async () => {
        const result = await new Promise(resolve => getFirstName('1', resolve));
        
        expect(result).toBe("Nick");
    })
    it('Should get last name', async () => {
        const result = await new Promise(resolve => getLastName('1', resolve));
        
        expect(result).toBe("Miller");
    })
    it('Should get email', async () => {
        const result = await new Promise(resolve => getEmail('1', resolve));
        
        expect(result).toBe("nmiller@gmail.com");
    })
    it('Should get description', async () => {
        const result = await new Promise(resolve => getDescription('1', resolve));
        
        expect(result).toBe("open the bar");
    })
    it('Should get password', async () => {
        const result = await new Promise(resolve => getPassword('1', resolve)); 
        expect(result).toBe("password123");
    })
})