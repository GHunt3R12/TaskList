//El siguiente código tiene como propósito validar los datos del usuario.

import { string, z } from "zod";

//Validar registro del usuario.
export const registerSchema = z.object({
  username: z.string({
    required_error: "Se requiere nombre de usuario.",
  }),
  email: z
    .string({
      required_error: "Correo electrónico es requerido.",
    })
    .email({
      message: "El correo electrónico no es válido.",
    }),
  password: z
    .string({
      required_error: "Se requiere contraseña.",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres.",
    }),
});

//Validar inicio de sesión del usuario.
export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Correo electrónico es requerido.",
    })
    .email({
      message: "El correo electrónico no es válido.",
    }),
  password: z
    .string({
      required_error: "Se requiere contraseña.",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres.",
    }),
});
