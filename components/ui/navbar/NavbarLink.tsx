import {AnchorHTMLAttributes, forwardRef} from 'react';
import Link from 'next/link';

const NavbarLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>((
  props, ref
) => {
  let {href, children, ...rest} = props
  return (
    <Link href={{pathname: href}}>
      <a ref={ref} {...rest} className={rest.className}>
        {children}
      </a>
    </Link>
  )
})
NavbarLink.displayName = "NavbarLink"

export default NavbarLink;