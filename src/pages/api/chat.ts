// src/pages/api/chat.ts
export const prerender = false; // Asegura que este endpoint es SSR

import type { APIRoute } from 'astro';
import OpenAI from 'openai';

// Cliente de OpenAI con tu API key desde .env
const client = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

// === Fuente de conocimiento simple ===
// Aquí puedes poner info de tu negocio, FAQs, servicios, etc.
const KNOWLEDGE_BASE = `
EJEMPLO:
- Somos la Clínica X, especializada en ortodoncia y ATM.
- Horarios: Lunes a Viernes de 9:00 a 19:00.
- Dirección: Calle Falsa 123, Santiago.
- Agendamiento online: https://tu-sitio.com/agendar
(EDITA ESTO CON TU INFORMACIÓN REAL)
`;

// === Instrucciones de comportamiento del agente ===
const SYSTEM_PROMPT = `
Eres el asistente virtual del sitio web de Isoft (cambia por el nombre real de la marca).

OBJETIVO:
- Ayudar a las personas a entender los servicios de la marca.
- Guiarlas para elegir el servicio correcto.
- Ofrecer agendar una reunión cuando tenga sentido.

TONO:
- Habla en español, cercano y profesional.
- Puedes usar un emoji de vez en cuando, pero no abuses.
- Responde en párrafos cortos (3–6 líneas), salvo que pidan mucho detalle.

COMPORTAMIENTO SEGÚN LO QUE DIGA EL USUARIO:

1) SI EL USUARIO SOLO SALUDA (por ejemplo: "hola", "buenas", "hola qué tal"):
   - Responde con un saludo cálido.
   - Preséntate brevemente (1 frase).
   - Haz una pregunta abierta para saber qué necesita.
   - Ejemplo de estilo: 
     "¡Hola! 👋 Soy el asistente virtual de la web. ¿En qué te gustaría que te ayude hoy?"

2) SI EL USUARIO DICE QUE QUIERE CONTRATAR UN SERVICIO
   (por ejemplo: "quiero contratar un servicio", "necesito una web", "quiero automatizar mi negocio"):
   - Agradece el interés.
   - Haz 2–3 preguntas clave para entender el tipo de proyecto (ej: tipo de negocio, plazos, presupuesto aproximado).
   - Luego sugiere claramente cuál de los servicios de la marca podría servirle.

3) SI EL USUARIO HACE UNA PREGUNTA ESPECÍFICA
   (por ejemplo: "¿cuánto demora un proyecto?" o "¿qué incluye el servicio X?"):
   - Responde directo a la pregunta.
   - Si hay información en la base de conocimiento, úsala.
   - Al final puedes hacer una pregunta de seguimiento suave para continuar la conversación.
CONOCIMIENTO DISPONIBLE:
${KNOWLEDGE_BASE}

IMPORTANTE - ACCIONES DE AGENDAMIENTO:
- Cuando el usuario quiera agendar una hora, o parezca que es buen momento para agendar,
  RESPONDE NORMALMENTE y además, en la ÚLTIMA línea de tu respuesta, escribe EXACTAMENTE:
  "AGENDAR: https://tu-sitio.com/agendar"
  (La URL puedes adaptarla según el contexto si te lo indican en la conversación).
- Si no corresponde agendar, NO incluyas esa línea.
`;

type HistoryMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatRequest = {
  message: string;
  history?: HistoryMessage[];
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as ChatRequest;

    if (!body?.message) {
      return new Response(JSON.stringify({ error: 'Mensaje vacío' }), { status: 400 });
    }

    const history = body.history ?? [];

    // Construimos el array de mensajes para Chat Completions
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      {
        role: 'user',
        content: body.message,
      },
    ];

    const completion = await client.chat.completions.create({
      model: 'gpt-4.1-mini', // barato y suficientemente bueno
      messages,
      temperature: 0.4,
    });

    const reply = completion.choices[0]?.message?.content ?? '';

    return new Response(
      JSON.stringify({
        reply,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Error en el servidor de chat' }), {
      status: 500,
    });
  }
};