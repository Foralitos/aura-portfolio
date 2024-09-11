"use client";
import { useState, useRef, useEffect, useCallback } from "react";

function Faq() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const questions = [
    {
      id: 1,
      question: "¿Qué es Aura?",
      answer:
        "Aura es una empresa especializada en el desarrollo de soluciones digitales innovadoras, enfocadas en web y aplicaciones móviles.",
    },
    {
      id: 2,
      question:
        "¿Puedo adaptar los servicios de Aura a las necesidades específicas de mi negocio?",
      answer:
        "Sí, en Aura ofrecemos una amplia personalización para asegurarnos de que nuestros servicios se ajusten perfectamente a los requerimientos de tu negocio.",
    },
    {
      id: 3,
      question: "¿Qué nos distingue?",
      answer:
        "Nos destacamos por nuestro enfoque creativo, el uso de tecnología avanzada y un compromiso firme con el éxito de nuestros clientes.",
    },
    {
      id: 4,
      question: "¿Cómo trabajamos en Aura?",
      answer:
        "Trabajamos bajo un enfoque ágil, colaborando constantemente con nuestros clientes para entregar soluciones efectivas y a tiempo.",
    },
  ];

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const setAnswerRef = useCallback(
    (index: number) => {
      return (e: HTMLDivElement | null) => {
        answerRefs.current[index] = e;
      };
    },
    [answerRefs]
  );

  useEffect(() => {
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openQuestion === index + 1) {
          ref.style.maxHeight = `${ref.scrollHeight}px`;
          ref.style.opacity = "1";
        } else {
          ref.style.maxHeight = "0";
          ref.style.opacity = "0";
        }
      }
    });
  }, [openQuestion]);

  return (
    <section className="bg-[#2B2C32] text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-white text-sm uppercase mb-4 text-center">
          ¿Preguntas?
        </h2>
        <div className="text-3xl  font-bold text-center mb-2">
          <span className="text-white">Preguntas</span>
          <span className="text-gray-500">Frecuentes</span>
        </div>
        <p className="text-gray-400 text-center mb-12">
          Las dudas que surgen, las resolvemos.
          <br />
          Aquí encontrarás respuestas que pueden ser clave para ti.
        </p>

        <div className="space-y-4">
          {questions.map((q, index) => (
            <div key={q.id} className="border-b border-gray-700">
              <button
                className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(q.id)}
                aria-expanded={openQuestion === q.id}
                aria-controls={`answer-${q.id}`}
              >
                <span className="text-lg">{q.question}</span>
                <span
                  className="text-2xl transition-transform duration-300"
                  style={{
                    transform:
                      openQuestion === q.id ? "rotate(45deg)" : "rotate(0)",
                  }}
                >
                  +
                </span>
              </button>
              <div
                id={`answer-${q.id}`}
                ref={setAnswerRef(index)}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: 0, opacity: 0 }}
              >
                <p className="pb-4 text-gray-400">{q.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
