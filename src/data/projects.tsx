export const projectsData = [
  {
    id: "panzerv",
    name: "PanzerV",
    problem: "Dependencia de IAs en la nube para procesar notas y conocimientos privados.",
    stack: ["Ollama", "ChromaDB", "Python", "Raspberry Pi", "Syncthing"],
    learned: "Optimización de LLMs locales en arquitecturas ARM y procesamiento de texto RAG (Retrieval-Augmented Generation).",
    differentToday: "Separaría aún más los flujos de inferencia usando un microservicio distinto para embeddings vs text-generation, aunque para hardware limitado el monolito actual funciona."
  },
  {
    id: "lara",
    name: "LARA",
    problem: "Ausencia de un asistente de voz y chat omnipotente e integrado al ecosistema de conocimiento personal (Obsidian), accesible globalmente sin exponer datos.",
    stack: ["React", "FastAPI", "Ollama", "ChromaDB", "SQLite", "Tailscale"],
    learned: "Diseño de flujos de memoria episódica y semántica, integración de herramientas autónomas (Tool Use) para LLMs y manejo de Web Speech API.",
    differentToday: "Agilizaría la latencia del streaming de audio para que la respuesta de voz sea casi instantánea (WebSockets puros en vez de polling o SSE)."
  },
  {
    id: "sotang",
    name: "Sotang Finanzas",
    problem: "La información financiera es el activo más crítico. No confiaba en apps de terceros que monetizan datos o bloquean características tras paywalls.",
    stack: ["React", "FastAPI", "PostgreSQL", "Docker", "Tailscale", "K3s"],
    learned: "Diseño de bases de datos financieras puras, arquitectura polyrepo con Kubernetes (K3s) on-premise y gestión de presupuestos complejos.",
    differentToday: "De haber sabido el overhead inicial de K3s, quizás habría empezado con un setup más simple con docker-compose puro, aunque hoy me da la ventaja de ser cloud-native localmente."
  },
  {
    id: "raas",
    name: "Regalo as a Service",
    problem: "Organizar un 'Amigo Secreto' corporativo entre dos ciudades requiere mucha manualidad y reglas que un sorteo en papel no puede cubrir.",
    stack: ["Next.js 14", "Supabase", "Resend", "Tailwind CSS"],
    learned: "Implementación de Server Components en el App Router de Next.js y definición robusta de RLS en Supabase.",
    differentToday: "Crearía un diseño más juguetón o gamificado, el actual soluciona muy bien el problema logístico pero el 'Amigo Secreto' requiere una UX más relajada."
  }
];
