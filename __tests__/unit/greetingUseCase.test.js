import GetGreetingUseCase from '../../core/application/useCases/Greeting/getGreeting/getGreetingUseCase'
import Greeting from '../../core/domain/Greeting'

describe('Greeting use case test', () => {
    it('Should return greetings' , () => {
        const greeting = new GetGreetingUseCase().execute();
        
        expect(greeting).toBeTruthy()
        expect(greeting.description).toBeTruthy()
        expect(greeting.name).toBeTruthy()
        expect(greeting.resumeLink).toBeTruthy()
        expect(greeting.title).toBeTruthy()

    })
})