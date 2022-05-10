import React from 'react';
export const renderHtml = (html, className, color) => {
  return React.createElement('div', {
    className,
    style: { color },
    dangerouslySetInnerHTML: { __html: html },
  });
};
