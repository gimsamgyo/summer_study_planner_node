import { FastifyRequest } from "fastify";

const Study = {};

type StudyRequest = FastifyRequest<{
  Querystring: { month: string };
}>;

const getStudyByMonth = async (req: StudyRequest) => {
  const { month } = req.query;
};
