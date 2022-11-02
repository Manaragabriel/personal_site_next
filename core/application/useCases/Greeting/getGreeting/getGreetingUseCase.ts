import Greeting from "../../../../domain/Greeting";
import { greetings } from "./greetingMock";


export default class GetGreetingUseCase {

    execute():Greeting {
        return greetings;
    }
}