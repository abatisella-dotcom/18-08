import React from 'react';

function Section({ children, className = "", id = "" }) {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      {children}
    </section>
  );
}

export default Section;
