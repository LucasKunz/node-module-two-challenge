import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (userAlreadyExists) {
      const userCreated = this.usersRepository.turnAdmin(userAlreadyExists);
      return userCreated;
    }

    throw new Error("User don't exists");
  }
}

export { TurnUserAdminUseCase };
