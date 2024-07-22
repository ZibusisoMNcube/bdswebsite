// components/Calendar.tsx
import React from 'react';
import styles from './styles/Calendar.module.css';

const Calendar: React.FC = () => {
  return (
    <section id="calendar" className="py-20 flex justify-center items-center mt-20 pt-20">
      {/* <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=Europe/Stockholm"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="1"
        scrolling="no"
        title="Baobab Development Solutions Calendar"
      ></iframe> */}
      <div className={styles.calenderdiv}>
        <iframe src="https://calendar.google.com/calendar/embed?src=n5dvm01fld5f7cg5aq5kndp7p0%40group.calendar.google.com&ctz=Africa%2FJohannesburg"
          style={{ border: 0 }}
          width="800"
          height="600"
          scrolling="no">

        </iframe>
      </div>
    </section>
  );
};

export default Calendar;
