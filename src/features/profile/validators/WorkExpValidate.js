import Joi from "joi";

const WorkExpSchema = Joi.object({
  jobPosition: Joi.string().required().messages({
    "string.empty": "Job position is required.",
  }),
  companyName: Joi.string().required().messages({
    "string.empty": "Company name is required.",
  }),
  achievementsTasks: Joi.string().empty("").messages({
    "string.empty": "achievementsTasks is required.",
  }),
  startDate: Joi.date().required().messages({
    "string.empty": "Start Date is required.",
  }),
  endDate: Joi.date().required().messages({
    "string.empty": "End Date is required.",
  }),
  neverWorkBefore: Joi.boolean().messages({
    "string.empty": "nvwk is required.",
  }),
  addToResume: Joi.boolean().messages({
    "string.empty": "adrs is required.",
  }),
});

export default (input) => {
  const { error } = WorkExpSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};
