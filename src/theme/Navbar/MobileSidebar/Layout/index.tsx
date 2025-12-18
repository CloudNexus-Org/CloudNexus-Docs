import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type {Props} from '@theme/Navbar/MobileSidebar/Layout';

function NavbarMobileSidebarPanel({children}: {children: ReactNode}) {
  return (
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.mobileSidebar.panel,
        'navbar-sidebar__item menu',
      )}>
      {children}
    </div>
  );
}

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}: Props): ReactNode {
  return (
    <div
      className={clsx(
        ThemeClassNames.layout.navbar.mobileSidebar.container,
        'navbar-sidebar',
      )}>
      {header}
      <div className="navbar-sidebar_items navbar-sidebar_items--stacked">
        <NavbarMobileSidebarPanel>{primaryMenu}</NavbarMobileSidebarPanel>
        {secondaryMenu && (
          <NavbarMobileSidebarPanel>{secondaryMenu}</NavbarMobileSidebarPanel>
        )}
      </div>
    </div>
  );
}