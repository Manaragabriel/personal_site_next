import GetEducationUseCase from '../../core/application/useCases/Education/getEducation/getEducationUseCase'

describe('Education use case test', () => {
    it('Should return educations' , () => {
        const education = new GetEducationUseCase().execute();
        
        expect(education).toBeTruthy()
        expect(education.length).toBeGreaterThan(0)

    })
})