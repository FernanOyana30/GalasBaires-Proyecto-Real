const Preguntas = [
    {
        id: 1,
        
        titulo: "¿En qué momento encenderías una vela aromática?",
        opciones: [
            {id: 1, descripcion: "mañana", nombrePregunta: "momento"},
            {id: 2, descripcion: "tarde", nombrePregunta: "momento"},
            {id: 3, descripcion: "noche", nombrePregunta: "momento"},
            {id: 4, descripcion: "relax", nombrePregunta: "momento"},  
        ],
    },
    {
        id: 2,
        
        titulo: "¿En qué habitaciones usarías velas y/o difusores aromáticos?",
        opciones: [
            {id: 1, descripcion: "living", nombrePregunta: "habitacion"},
            {id: 2, descripcion: "cocina", nombrePregunta: "habitacion"},
            {id: 3, descripcion: "baño", nombrePregunta: "habitacion"},
            {id: 4, descripcion: "dormitorio", nombrePregunta: "habitacion"},
            {id: 5, descripcion: "otros", nombrePregunta: "habitacion"},            
        ],
    },
    {
        id: 3,
        
        titulo: "¿Qué nivel de aroma te gustaría?",
        opciones: [
            {id: 1, descripcion: "sutil", nombrePregunta: "nivel"},
            {id: 2, descripcion: "intermedio", nombrePregunta: "nivel"},
            {id: 3, descripcion: "normal", nombrePregunta: "nivel"},
            {id: 4, descripcion: "alto", nombrePregunta: "nivel"},
            {id: 5, descripcion: "intenso", nombrePregunta: "nivel"},            
        ],
    },
    {
        id: 4,
        
        titulo: "¿Qué aromas te gustan?",
        opciones: [
            {id: 1, descripcion: "floral", nombrePregunta: "aroma"},
            {id: 2, descripcion: "dulce", nombrePregunta: "aroma"},
            {id: 3, descripcion: "cítrico", nombrePregunta: "aroma"},
            {id: 4, descripcion: "relajante", nombrePregunta: "aroma"},
            {id: 5, descripcion: "amaderado", nombrePregunta: "aroma"},            
        ],
    }
]

export default Preguntas;