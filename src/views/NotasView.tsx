import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Award, ChevronDown, ChevronUp, Sparkles, TrendingUp } from 'lucide-react';

interface GradeItem {
  id: string;
  name: string;
  type: 'quiz' | 'assignment' | 'category' | 'total';
  weight: number;
  grade: number | null;
  maxGrade: number;
  percentage: number | null;
  contribution: number | null;
  category?: string;
}

const FRONTEND_GRADES: GradeItem[] = [
  {
    id: 'eval-weekly',
    name: 'Evaluaciones Semanales',
    type: 'category',
    weight: 2.50,
    grade: null,
    maxGrade: 5,
    percentage: null,
    contribution: null,
    category: 'Evaluaciones Semanales'
  },
  {
    id: 'act-eval',
    name: 'Actividades Evaluativas',
    type: 'category',
    weight: 3.75,
    grade: null,
    maxGrade: 5,
    percentage: null,
    contribution: null,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'quiz-1',
    name: 'Activa tus saberes',
    type: 'quiz',
    weight: 6.25,
    grade: null,
    maxGrade: 5,
    percentage: 0,
    contribution: 0,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'task-1',
    name: 'Actividad de aprendizaje 1 - Empatizando con los usuarios',
    type: 'assignment',
    weight: 6.25,
    grade: null,
    maxGrade: 5,
    percentage: 0,
    contribution: 0,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'task-2',
    name: 'Empatizando con los usuarios - Aplicado',
    type: 'assignment',
    weight: 6.25,
    grade: 0,
    maxGrade: 5,
    percentage: 0,
    contribution: 0,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'quiz-2',
    name: 'Evaluación semanal 1 - Conceptos generales',
    type: 'quiz',
    weight: 6.25,
    grade: 5,
    maxGrade: 5,
    percentage: 100,
    contribution: 6.25,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'task-3',
    name: 'Actividad evaluativa 1 - ¿Cómo podríamos?',
    type: 'assignment',
    weight: 6.25,
    grade: null,
    maxGrade: 5,
    percentage: 0,
    contribution: 0,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'quiz-3',
    name: 'Evaluación, Técnicas y herramientas',
    type: 'quiz',
    weight: 6.25,
    grade: 3.5,
    maxGrade: 5,
    percentage: 70,
    contribution: 4.38,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'task-4',
    name: 'Actividad evaluativa 2 - Múltiples rutas, una solución - AventureApp',
    type: 'assignment',
    weight: 6.25,
    grade: null,
    maxGrade: 5,
    percentage: 0,
    contribution: 0,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'task-5',
    name: 'Actividad evaluativa - Múltiples rutas, una solución - SAVIO',
    type: 'assignment',
    weight: 6.25,
    grade: 4,
    maxGrade: 5,
    percentage: 80,
    contribution: 5,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'task-6',
    name: 'Actividad de aprendizaje - Dándole vida a las soluciones - SAVIO',
    type: 'assignment',
    weight: 6.25,
    grade: 0,
    maxGrade: 5,
    percentage: 0,
    contribution: 0,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'quiz-4',
    name: 'Evaluación semanal 3 - Ideación',
    type: 'quiz',
    weight: 6.25,
    grade: null,
    maxGrade: 5,
    percentage: 0,
    contribution: 0,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'task-7',
    name: 'Actividad de aprendizaje 2 - Dándole vida a las soluciones - AdventureApp',
    type: 'assignment',
    weight: 6.25,
    grade: 5,
    maxGrade: 5,
    percentage: 100,
    contribution: 6.25,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'task-8',
    name: 'Actividad de aprendizaje - Dándole vida a las soluciones - SAVIO',
    type: 'assignment',
    weight: 6.25,
    grade: 4.1,
    maxGrade: 5,
    percentage: 82,
    contribution: 5.13,
    category: 'Actividades Evaluativas'
  },
  {
    id: 'total',
    name: 'Total del curso',
    type: 'total',
    weight: 100,
    grade: -2.29,
    maxGrade: 5,
    percentage: 45.75,
    contribution: null,
    category: 'Total del curso'
  }
];

const SISTEMAS_GRADES: GradeItem[] = [
  {
    id: 'corte-1',
    name: 'Total Corte 1',
    type: 'category',
    weight: 33.33,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 1'
  },
  {
    id: 'corte-2',
    name: 'Total Corte 2',
    type: 'category',
    weight: 33.33,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 2'
  },
  {
    id: 'task-sm-1',
    name: 'Envío solución en GRUPO de la conducta de entrada: en formato MS Word',
    type: 'assignment',
    weight: 5,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 1'
  },
  {
    id: 'task-sm-2',
    name: 'ENVÍO Solución Primer Examen Parcial Parte 2 (Completo) Word y copia en PDF',
    type: 'assignment',
    weight: 10,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 1'
  },
  {
    id: 'task-sm-3',
    name: 'Entrega de apuntes, tareas y talleres segundo corte: Word y copia en PDF',
    type: 'assignment',
    weight: 5,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 2'
  },
  {
    id: 'task-sm-4',
    name: 'Entrega cuaderno de apuntes tercer corte: tareas, talleres y comentarios',
    type: 'assignment',
    weight: 5,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 2'
  },
  {
    id: 'task-sm-5',
    name: 'ENTREGA Proyecto Final de Curso: Un archivo en formato MS Word y copia en PDF',
    type: 'assignment',
    weight: 20,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 2'
  },
  {
    id: 'task-sm-6',
    name: 'Envío Tarea No. 1 - Planteamiento y soluciones de sistemas de ecuaciones lineales',
    type: 'assignment',
    weight: 5,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 1'
  },
  {
    id: 'task-sm-7',
    name: 'ENVÍO Apuntes, Solución Problemas PL - Método gráfico y método simplex con tabla general',
    type: 'assignment',
    weight: 5,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 1'
  },
  {
    id: 'task-sm-8',
    name: 'Envío Solución del Segundo Parcial - Parte Grupal. Formato MS Excel',
    type: 'assignment',
    weight: 10,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 2'
  },
  {
    id: 'task-sm-9',
    name: 'Bibliografía',
    type: 'assignment',
    weight: 2,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 1'
  },
  {
    id: 'task-sm-10',
    name: 'ENVÍO Actividad 1: solución método gráfico y simplex del parcial en grupo del primer corte',
    type: 'assignment',
    weight: 5,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 1'
  },
  {
    id: 'task-sm-11',
    name: 'ENVÍO Actividad 2: solución método gráfico y simplex del parcial en grupo. Utilice 5 software',
    type: 'assignment',
    weight: 5,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 1'
  },
  {
    id: 'task-sm-12',
    name: 'ENVÍO Taller No 2 - Formulación de Problemas de PL-Transporte y Asignación',
    type: 'assignment',
    weight: 5,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 2'
  },
  {
    id: 'task-sm-13',
    name: 'ENVÍO Solución Taller de Formulación de Problemas de PLE (Programación Lineal Entera)',
    type: 'assignment',
    weight: 5,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 2'
  },
  {
    id: 'task-sm-14',
    name: 'Envío Taller de Simulación y Modelos de Colas: formato MS Word',
    type: 'assignment',
    weight: 5,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 2'
  },
  {
    id: 'task-sm-15',
    name: 'Envío CORRECCIÓN Taller de Simulación y Modelos de Colas: formato MS Word',
    type: 'assignment',
    weight: 3,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 2'
  },
  {
    id: 'task-sm-16',
    name: 'Envío Taller en Clase: formato MS Word',
    type: 'assignment',
    weight: 2,
    grade: null,
    maxGrade: 100,
    percentage: null,
    contribution: null,
    category: 'Corte 2'
  },
  {
    id: 'total-sm',
    name: 'Total del curso',
    type: 'total',
    weight: 100,
    grade: null,
    maxGrade: 2500,
    percentage: null,
    contribution: null,
    category: 'Total del curso'
  }
];

interface Course {
  id: string;
  name: string;
  code: string;
  initials: string;
  color: string;
  grades: GradeItem[];
}

const COURSES: Course[] = [
  {
    id: '1',
    name: 'Desarrollo Frontend',
    code: '2622-202610',
    initials: 'DF',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    grades: FRONTEND_GRADES
  },
  {
    id: '2',
    name: 'Sistemas y Modelos',
    code: '1780-202610',
    initials: 'SM',
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    grades: SISTEMAS_GRADES
  }
];

export default function NotasView() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourse = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const selectedCourse = COURSES.find(c => c.id === expandedCourse);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="flex-1 flex flex-col min-h-0"
    >
      <div className="block-card flex-1 flex flex-col min-h-0 overflow-hidden relative">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[var(--primary-light)]/5 via-transparent to-[var(--primary-light)]/3 pointer-events-none"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        
        <div className="relative flex items-center gap-3 mb-5 shrink-0">
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="p-2.5 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-xl shadow-lg shadow-[var(--primary)]/30"
          >
            <Award size={18} className="text-white" />
          </motion.div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-tight text-[var(--black)]">
              Notas del Curso
            </span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles size={16} className="text-[var(--primary)]" />
            </motion.div>
          </div>
        </div>

        <div className="relative flex-1 overflow-y-auto scrollbar-hide pr-1.5">
          {!expandedCourse ? (
            <div className="space-y-3">
              {COURSES.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleCourse(course.id)}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-[var(--border-light)] hover:border-[var(--primary)]/40 hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-all duration-300 cursor-pointer flex items-center justify-between group relative overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/0 via-[var(--primary)]/5 to-[var(--primary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-12 h-12 rounded-xl ${course.color} flex items-center justify-center font-bold text-base text-white shadow-lg relative`}
                    >
                      {course.initials}
                      <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    <div>
                      <div className="font-bold text-base text-[var(--black)] group-hover:text-[var(--primary)] transition-colors">{course.name}</div>
                      <div className="text-xs text-[var(--text-muted)] mt-1">{course.code}</div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="relative z-10"
                  >
                    <ChevronDown 
                      size={22} 
                      className="text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" 
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => toggleCourse(selectedCourse!.id)}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-[var(--primary)]/40 hover:shadow-xl transition-all cursor-pointer flex items-center justify-between group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 via-transparent to-[var(--primary)]/5" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div 
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 rounded-xl ${selectedCourse!.color} flex items-center justify-center font-bold text-base text-white shadow-lg`}
                  >
                    {selectedCourse!.initials}
                  </motion.div>
                  <div>
                    <div className="font-bold text-base text-[var(--black)]">{selectedCourse!.name}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{selectedCourse!.code}</div>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ChevronUp 
                    size={22} 
                    className="text-[var(--primary)] transition-colors" 
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl border border-[var(--border-light)] overflow-hidden shadow-lg"
              >
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gradient-to-r from-[var(--primary-light)]/30 to-[var(--primary-light)]/10 border-b-2 border-[var(--primary)]/20">
                      <th className="text-left p-4 font-bold text-[var(--black)]">Actividad</th>
                      <th className="text-center p-4 font-bold text-[var(--black)]">Nota</th>
                      <th className="text-center p-4 font-bold text-[var(--black)]">Ponderado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCourse!.grades.map((item, index) => {
                      const isCategory = item.type === 'category' || item.type === 'total';
                      
                      return (
                        <motion.tr
                          key={item.id}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                          whileHover={{ scale: 1.01, x: 3 }}
                          className={`border-b border-[var(--border-light)] last:border-0 transition-all duration-200 ${
                            isCategory 
                              ? 'bg-gradient-to-r from-[var(--primary-light)]/20 to-transparent font-semibold' 
                              : 'hover:bg-[var(--primary-light)]/10'
                          }`}
                        >
                          <td className="p-4 text-[var(--text-secondary)]">
                            {isCategory && (
                              <motion.span
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                                className="inline-block mr-2"
                              >
                                <TrendingUp size={12} className="text-[var(--primary)]" />
                              </motion.span>
                            )}
                            {item.name}
                          </td>
                          <td className="p-4 text-center">
                            {item.grade !== null ? (
                              <motion.span 
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.15 }}
                                className={`inline-block font-bold px-2 py-1 rounded-lg ${
                                  item.grade >= 0 
                                    ? 'bg-gradient-to-r from-[var(--success)]/20 to-[var(--success)]/10 text-[var(--success)]' 
                                    : 'bg-gradient-to-r from-[var(--danger)]/20 to-[var(--danger)]/10 text-[var(--danger)]'
                                }`}
                              >
                                {item.grade >= 0 ? item.grade.toFixed(1) : 'N/A'}
                              </motion.span>
                            ) : (
                              <span className="text-[var(--text-muted)]">-</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            <motion.span 
                              animate={{ 
                                scale: [1, 1.1, 1],
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                              className="inline-block font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] bg-clip-text text-transparent"
                            >
                              {item.weight}%
                            </motion.span>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}