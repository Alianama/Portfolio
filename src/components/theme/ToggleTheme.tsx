'use client'

import { useTheme } from 'next-themes'
import {Moon, Sun} from "lucide-react";

export function ThemeSelect() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
   
        <button
            onClick={toggleTheme}
                className="rounded-full p-0 m-0 transition duration-300">
            {theme === 'light' ? (
                <Moon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            ) : (
                <Sun className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            )}
        </button>
    );  
}