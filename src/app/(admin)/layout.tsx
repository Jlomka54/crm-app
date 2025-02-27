import React from 'react';
import Sidebar from '@/app/components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
  stats: React.ReactNode;
  sales: React.ReactNode;
  categories: React.ReactNode;
  countries: React.ReactNode;
  promotions: React.ReactNode;
}

export default function Layout({
  children,
  stats,
  sales,
  categories,
  countries,
  promotions,
}: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
