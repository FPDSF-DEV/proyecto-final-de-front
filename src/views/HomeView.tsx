import React from 'react';
import { Bell, BookOpen, Clock, Zap, Calendar, Award, Shield, User } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { NOTIFICATIONS_DATA, COURSES_DATA, ACTIVITIES_DATA } from '../types';

export default function HomeView() {
  const navigate = useNavigate();
  const urgentNotifs = NOTIFICATIONS_DATA.filter(n => n.urgent).slice(0, 3);
  const recentActivities = Object.values(ACTIVITIES_DATA).flat().slice(0, 6);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex-1 flex flex-col lg:flex-row gap-4 min-h-0 overflow-hidden"
    >
      {/* Left Section - 60% */}
      <div className="flex-1 lg:flex-[0_0_60%] flex flex-col gap-4 min-h-0">
        {/* Notifications Card - 35% height */}
        <motion.div 
          onClick={() => navigate('/notifications')}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="block-card flex-[0_0_35%] flex flex-col cursor-pointer overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3 gap-2 shrink-0">
            <span className="text-sm font-bold flex items-center gap-2 text-[var(--black)]">
              <div className="p-1.5 bg-[var(--primary)] rounded-lg">
                <Bell size={14} className="text-white" />
              </div>
              Últimas notificaciones
            </span>
            <span className="text-[0.55rem] font-bold px-2 py-0.5 rounded-full bg-[var(--danger)] text-white">
              {urgentNotifs.length}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-y-auto scrollbar-hide pr-1 flex-1">
            {NOTIFICATIONS_DATA.slice(0, 4).map((n, index) => (
              <motion.div 
                key={n.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-2.5 border border-[var(--border)] hover:border-[var(--primary)] transition-all text-xs flex gap-2.5 items-start"
              >
                <div className={`w-1 h-1 rounded-full mt-2 shrink-0 ${n.type === 'danger' ? 'bg-[var(--danger)]' : n.type === 'warning' ? 'bg-[var(--warning)]' : 'bg-[var(--primary)]'}`} />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[0.7rem] text-[var(--black)] mb-0.5 truncate">{n.title}</div>
                  <div className="text-[0.55rem] text-[var(--text-muted)] uppercase tracking-wider">{n.course}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Courses Card - 65% height */}
        <motion.div className="block-card flex-1 min-h-0 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-3 gap-1 shrink-0">
            <span className="text-sm font-bold flex items-center gap-2 text-[var(--black)]">
              <div className="p-1.5 bg-[var(--primary)] rounded-lg">
                <BookOpen size={14} className="text-white" />
              </div>
              Mis Cursos
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 overflow-y-auto scrollbar-hide pr-1 flex-1">
            {COURSES_DATA.map((c, index) => (
              <motion.div 
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-lg p-3 border border-[var(--border)] hover:border-[var(--primary)] transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 text-white ${c.color}`}>
                  {c.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[0.75rem] text-[var(--black)] leading-tight truncate">{c.name}</div>
                  <div className="text-[0.55rem] text-[var(--text-muted)] mt-0.5">{c.code}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Section - 40% */}
      <div className="flex-1 lg:flex-[0_0_40%] flex flex-col gap-4 min-h-0">
        {/* Upcoming Deliveries Card - 40% height */}
        <motion.div 
          onClick={() => navigate('/calendar')}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="block-card flex-[0_0_40%] flex flex-col cursor-pointer overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3 gap-1 shrink-0">
            <span className="text-sm font-bold flex items-center gap-2 text-[var(--black)]">
              <div className="p-1.5 bg-[var(--primary)] rounded-lg">
                <Clock size={14} className="text-white" />
              </div>
              Próximas entregas
            </span>
          </div>
          
          <div className="flex flex-col gap-1.5 overflow-y-auto scrollbar-hide pr-1 flex-1">
            {recentActivities.map((a, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.01, x: 2 }}
                className="bg-white rounded-lg p-2 border-l-2 border-[var(--primary)] border-[var(--border)] transition-all text-xs flex items-center gap-2.5 shrink-0"
              >
                <div className={`w-1 h-1 rounded-full shrink-0 ${a.reported ? 'bg-[var(--success)]' : 'bg-[var(--warning)]'}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-[0.55rem] text-[var(--text-muted)] uppercase tracking-wider">{a.course}</div>
                  <div className="font-medium text-[var(--black)] truncate text-[0.7rem]">{a.title}</div>
                </div>
                <div className="text-[0.65rem] font-bold text-[var(--primary)]">{a.time}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions Card - 60% height */}
        <motion.div className="block-card flex-1 min-h-0 flex flex-col overflow-hidden">
          <div className="mb-3 shrink-0">
            <span className="text-sm font-bold flex items-center gap-2 text-[var(--black)]">
              <div className="p-1.5 bg-[var(--primary)] rounded-lg">
                <Zap size={14} className="text-white" />
              </div>
              Acciones rápidas
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-2.5 flex-1 min-h-0 overflow-y-auto scrollbar-hide pr-1">
            <QuickAction 
              onClick={() => navigate('/calendar')}
              icon={<Calendar size={16} className="text-[var(--primary)]" />}
              label="Calendario"
              color="blue"
            />
            <QuickAction 
              onClick={() => navigate('/notas')}
              icon={<Award size={16} className="text-[var(--primary)]" />}
              label="Notas"
              color="emerald"
            />
            <QuickAction 
              onClick={() => navigate('/insignias')}
              icon={<Shield size={16} className="text-[var(--primary)]" />}
              label="Insignias"
              color="purple"
            />
            <QuickAction 
              onClick={() => navigate('/not-programmed')}
              icon={<User size={16} className="text-[var(--primary)]" />}
              label="Perfil"
              color="rose"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function QuickAction({ onClick, icon, label, color }: { onClick: () => void, icon: React.ReactNode, label: string, color: string }) {
  const colorClasses = {
    blue: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
    emerald: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200',
    purple: 'bg-purple-50 hover:bg-purple-100 border-purple-200',
    rose: 'bg-rose-50 hover:bg-rose-100 border-rose-200',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`rounded-lg p-3 border transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}`}
    >
      {icon}
      <span className="text-[0.65rem] font-medium text-[var(--text-secondary)]">{label}</span>
    </motion.div>
  );
}