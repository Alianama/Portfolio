'use client';
import {useTheme} from 'next-themes';
import {Moon, Sun} from 'lucide-react';
import React from 'react';

interface ThemeSelectProps {
    classname?: string,
    className?: string
}

export function ThemeSelect({ className}: ThemeSelectProps): React.JSX.Element {
    const {theme, setTheme} = useTheme();
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };
    return (
        <button
            onClick={toggleTheme}
            className={className + " self-center w-full" }
        >
            {theme === 'light' ? (
                <Moon className="text-neutral-900"/>
            ) : (
                <Sun className="  "/>
            )}
        </button>
    );
}
