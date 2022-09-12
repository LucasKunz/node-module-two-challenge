import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const emailAlreadyTaken = this.usersRepository.findByEmail(email);

    if (emailAlreadyTaken) {
      throw new Error("Email already exists");
    }

    const userCreated = this.usersRepository.create({ name, email });
    return userCreated;
  }
}

export { CreateUserUseCase };
