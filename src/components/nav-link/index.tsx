import { INavLink } from '@/components/nav-link/interfaces.ts';
import { Link, useLocation } from 'react-router-dom';

function NavLink(props: INavLink) {
  const { pathname } = useLocation();
  return (
    <Link
      data-current={pathname == props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  );
}

export default NavLink;
