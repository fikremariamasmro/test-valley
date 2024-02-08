"use client";

import { IShortcut } from '@/types/ShortcutTypes';
import React, { useState, useEffect } from 'react';
import { fetchShortcuts } from '@/services/ShortcutService';


// Define the functional component
const ShortcutList: React.FC = () => {
  const [shortcuts, setShortcuts] = useState<IShortcut[]>([]);

  useEffect(() => {
    const loadShortcuts = async () => {
      const data = await fetchShortcuts();
      setShortcuts(data);
    };

    loadShortcuts();
  }, []);

  return (
    <div className="flex flex-row py-14 text-center">
      {shortcuts?.map((shortcut) => (
        <div key={shortcut.mainShortcutId} className="flex flex-row w-16 md:mx-6">
          <a href={shortcut.linkUrl} className="block">
            <img src={shortcut.imageUrl} alt={shortcut.title} className="w-full h-auto" />
            <p className="mt-2 text-xs text-gray-600">{shortcut.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ShortcutList;