import GetExperienceUseCase from '../../core/application/useCases/Experience/getExperience/getExperienceUseCase'

describe('Experience use case test', () => {
    it('Should return experiences' , () => {
        const experiences = new GetExperienceUseCase().execute();

        expect(experiences).toBeTruthy()
        expect(experiences.length).toBeGreaterThan(0)
    })
})