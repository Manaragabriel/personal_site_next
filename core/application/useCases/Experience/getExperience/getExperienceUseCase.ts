import Experience from "../../../../domain/Experience";
import { experience } from "./experienceMock";



export default class GetExperienceUseCase {

    execute(): Experience[]{
        return experience;
    }
}