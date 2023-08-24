import {Message} from "./post-message.usecase";

export class InMemoryMessageRepository {
    message: Message;
    save(msg: Message): void {
        this.message = msg;
    }
}