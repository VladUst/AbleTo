import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonRadius, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack';

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
          <VStack gap='16' className={cls.items}>
              {sidebarItemsList.map((item) => (
                  <SidebarItem
                      key={item.path}
                      item={item}
                      collapsed={collapsed}
                  />
              ))}
          </VStack>
          <div className={cls.switchers}>
              <ThemeSwitcher/>
              <LangSwitcher short={collapsed} className={cls.lang}/>
          </div>
      </div>
  );
});
