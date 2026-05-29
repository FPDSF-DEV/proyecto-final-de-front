import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Bell, MessageCircle, ChevronLeft, Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-1 border-[var(--border-strong)] rounded-[var(--radius-xl)] px-4 md:px-6 h-[var(--navbar-height)] flex items-center justify-between gap-3 md:gap-4 shrink-0 shadow-lg relative">
      <div className="flex items-center gap-3 md:gap-4">
        {!isHome && (
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="w-8 h-8 rounded-full border-2 border-[var(--border-strong)] flex items-center justify-center hover:border-[var(--primary)] transition-all shrink-0"
          >
            <ChevronLeft size={16} />
          </motion.button>
        )}
        <NavLink to="/" className="flex items-center gap-2 md:gap-2.5 no-underline text-[var(--black)] font-bold text-[1rem] md:text-[1.05rem] tracking-tight shrink-0 group">
          <motion.div 
            whileHover={{ rotate: 5 }}
            className="w-8 h-8 md:w-9 md:h-9 rounded-[var(--radius-sm)] overflow-hidden shadow-md relative shrink-0"
          >
            <img src="/icono.png" alt="SAVIO logo" className="w-full h-full object-cover" />
          </motion.div>
          <span className="hidden sm:inline">SAVIO UTB</span>
        </NavLink>
      </div>

      <ul className="hidden lg:flex relative gap-2 list-none">
        <li className="shrink-0">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-full text-[0.8rem] font-semibold transition-all ${
                isActive 
                  ? 'bg-[var(--primary)] text-white' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]'
              }`
            }
          >
            Inicio
          </NavLink>
        </li>
        <li className="shrink-0">
          <a
            href="https://www.utb.edu.co/biblioteca-utb/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-[0.8rem] font-semibold transition-all text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
          >
            Biblioteca
          </a>
        </li>
        <li className="shrink-0">
          <a
            href="https://ssbprod.utb.edu.co:8443/ssomanager/c/SSB"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full text-[0.8rem] font-semibold transition-all text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
          >
            Banner
          </a>
        </li>
        <li className="shrink-0">
          <NavLink 
            to="/calendar" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-full text-[0.8rem] font-semibold transition-all ${
                isActive 
                  ? 'bg-[var(--primary)] text-white' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]'
              }`
            }
          >
            Calendario
          </NavLink>
        </li>
        <li className="shrink-0">
          <NavLink 
            to="/notifications" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-full text-[0.8rem] font-semibold transition-all ${
                isActive 
                  ? 'bg-[var(--primary)] text-white' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]'
              }`
            }
          >
            Notificaciones
          </NavLink>
        </li>
      </ul>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden w-8 h-8 rounded-full border-2 border-[var(--border-strong)] flex items-center justify-center hover:border-[var(--primary)] transition-all shrink-0"
      >
        {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      <div className="relative flex items-center gap-2 md:gap-2.5 shrink-0">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/notifications')}
          className="w-8 h-8 md:w-9 md:h-9 rounded-full border-1 border-[var(--border-strong)] bg-white cursor-pointer flex items-center justify-center transition-all text-[var(--text-secondary)] hover:border-[var(--primary)] relative shrink-0"
          aria-label="Notificaciones"
        >
          <Bell size={15} className="md:size-[17px]" />
          <span className="absolute -top-1 -right-1 bg-[var(--danger)] text-white text-[0.5rem] md:text-[0.55rem] font-bold min-w-[16px] md:min-w-[18px] h-[16px] md:h-[18px] rounded-full flex items-center justify-center border-2 border-white">
            4
          </span>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/not-programmed')}
          className="w-8 h-8 md:w-9 md:h-9 rounded-full border-1 border-[var(--border-strong)] bg-white cursor-pointer flex items-center justify-center transition-all text-[var(--text-secondary)] hover:border-[var(--primary)] shrink-0"
          aria-label="Mensajes"
        >
          <MessageCircle size={15} className="md:size-[17px]" />
        </motion.button>
        
        <div className="hidden lg:flex items-center gap-2 bg-[var(--bg)] rounded-full border-1 border-[var(--border-strong)] p-1.5 pr-4 cursor-pointer hover:border-[var(--primary)] transition-all shrink-0">
          <div className="w-7 h-7 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold text-[0.65rem] shrink-0">
            PL
          </div>
          <span className="text-[0.8rem] font-semibold text-[var(--text-secondary)]">Pablo Leal</span>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border-2 border-[var(--border-strong)] shadow-xl p-4 lg:hidden z-50"
          >
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-xl text-[0.85rem] font-semibold transition-all ${
                      isActive 
                        ? 'bg-[var(--primary)] text-white' 
                        : 'text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]'
                    }`
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <a
                  href="https://www.utb.edu.co/biblioteca-utb/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl text-[0.85rem] font-semibold transition-all text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                >
                  Biblioteca
                </a>
              </li>
              <li>
                <a
                  href="https://ssbprod.utb.edu.co:8443/ssomanager/c/SSB"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 rounded-xl text-[0.85rem] font-semibold transition-all text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                >
                  Banner
                </a>
              </li>
              <li>
                <NavLink 
                  to="/calendar" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-xl text-[0.85rem] font-semibold transition-all ${
                      isActive 
                        ? 'bg-[var(--primary)] text-white' 
                        : 'text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]'
                    }`
                  }
                >
                  Calendario
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/notifications" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `px-4 py-3 rounded-xl text-[0.85rem] font-semibold transition-all ${
                      isActive 
                        ? 'bg-[var(--primary)] text-white' 
                        : 'text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]'
                    }`
                  }
                >
                  Notificaciones
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}