import React from 'react';
import T from 'prop-types';

import Link from 'next/link';

const LinkComponent = React.forwardRef(({ href, target, className, children }, ref) => (
  <Link
    ref={ref}
    href={href}
    passHref
  >
    <a
      target={target}
      className={className}
    >
      {children}
    </a>
  </Link>
));

LinkComponent.propTypes = {
  href: T.string,
  target: T.string,
  className: T.string,
};

export default LinkComponent
