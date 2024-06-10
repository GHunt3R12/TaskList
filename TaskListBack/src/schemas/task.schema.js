//El siguiente código tiene como propósito validar los datos de una tarea al ser creada.

import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Se requiere título.",
  }),
  description: z.string({
    required_error: "La descripción debe ser un string.",
  }),
  date: z.string().datetime().optional(),
});
