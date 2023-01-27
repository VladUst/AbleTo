import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, { memo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonRadius, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
      <div data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button data-testid="sidebar-toggle"
              onClick={onToggle}
              className={cls.collapseBtn}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              size={ButtonSize.XL}
              square radius={ButtonRadius.RIGHT}
          >
              {collapsed ? '>' : '<'}
          </Button>
          <div className={cls.items}>
              {sidebarItemsList.map((item) => (
                  <SidebarItem
                      key={item.path}
                      item={item}
                      collapsed={collapsed}
                  />
              ))}
          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher/>
              <LangSwitcher short={collapsed} className={cls.lang}/>
          </div>
      </div>
  );
});
