import EducationInfo from "../../../../domain/EducationInfo";
import { education } from "./educationMock";



export default class GetEducationUseCase {

    execute(): EducationInfo[]{
        return education;
    }
}