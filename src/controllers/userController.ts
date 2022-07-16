import { FastifyRequest } from "fastify";

const User = {
  findById: (id: string) => {},
};

const getUser = async (req: FastifyRequest) => {
  try {
    const { id } = req;
    return await User.findById(id);
  } catch (error) {
    console.log(error);
  }
};

export { getUser };
