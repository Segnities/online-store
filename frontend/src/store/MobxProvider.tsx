'use client';

import { createContext } from 'react';

import type MobxProviderType from '@/types/mobx-store';

import UserStore from './UserStore';
import ProductStore from './ProductStore';

export const MobxContext = createContext<MobxProviderType | null>(null);

interface MobxProviderProps {
    children: React.ReactNode,
}

export default function MobxProvider({ children }: MobxProviderProps) {
    return (
        <MobxContext.Provider value={{
            user: new UserStore(),
            product: new ProductStore()
        }}>
            {children}
        </MobxContext.Provider>
    )
}