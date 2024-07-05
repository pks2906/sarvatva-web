// Content.js
import React from 'react';

interface ContentProps {
    scrollBlocked: boolean;
}

const Content = ({ scrollBlocked }: ContentProps) => {
  return (
    <div className={`bg-gray-100 p-8 ${scrollBlocked ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      <h2 className="text-2xl font-bold mb-4">Additional Content</h2>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, nulla sit amet hendrerit aliquet, leo risus eleifend velit, nec bibendum erat odio eget erat. Proin scelerisque, libero sit amet sodales cursus, ligula purus malesuada turpis, vitae viverra magna mauris id lacus. Sed imperdiet dictum odio, eget sollicitudin nisi tincidunt a. Sed a nisl euismod, convallis felis at, faucibus orci. Nullam ut risus magna. Morbi ut vehicula urna.
      </p>
      <p className="mb-4">
        Duis nec dui mollis, consequat risus eu, vestibulum neque. Ut nec aliquet eros, id fringilla elit. Nam sollicitudin tristique turpis, ut convallis augue vehicula quis. Sed sed posuere nunc. Nulla facilisi. Aliquam erat volutpat. Aenean hendrerit, lectus eu efficitur luctus, sapien justo tempus velit, at condimentum felis erat sit amet eros.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, nulla sit amet hendrerit aliquet, leo risus eleifend velit, nec bibendum erat odio eget erat. Proin scelerisque, libero sit amet sodales cursus, ligula purus malesuada turpis, vitae viverra magna mauris id lacus. Sed imperdiet dictum odio, eget sollicitudin nisi tincidunt a. Sed a nisl euismod, convallis felis at, faucibus orci. Nullam ut risus magna. Morbi ut vehicula urna.
      </p>
      <p className="mb-4">
        Duis nec dui mollis, consequat risus eu, vestibulum neque. Ut nec aliquet eros, id fringilla elit. Nam sollicitudin tristique turpis, ut convallis augue vehicula quis. Sed sed posuere nunc. Nulla facilisi. Aliquam erat volutpat. Aenean hendrerit, lectus eu efficitur luctus, sapien justo tempus velit, at condimentum felis erat sit amet eros.
      </p>
    </div>
  );
};

export default Content;
