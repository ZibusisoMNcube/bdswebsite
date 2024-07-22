// components/Calendar.tsx
import React from 'react';
import styles from './styles/Calendar.module.css';

const Calendar: React.FC = () => {
  return (
    <section id="calendar" className="py-20 flex justify-center items-center mt-20 pt-20 h-70vh">
      <div className={styles.calendarContainer}>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=n5dvm01fld5f7cg5aq5kndp7p0%40group.calendar.google.com&ctz=Africa%2FJohannesburg"
          style={{ border: 0 }}
          frameBorder="0"
          scrolling="no"
          title="Baobab Development Solutions Calendar"
        ></iframe>
      </div>
    </section>
  );
};

export default Calendar;
