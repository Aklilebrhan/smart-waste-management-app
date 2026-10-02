import React,{createContext,useContext,useState}from 'react'; import {Language,translations} from '../i18n/translations'; import {Role} from '../types';
type Context={role:Role;setRole:(r:Role)=>void;language:Language;toggleLanguage:()=>void;t:(key:keyof typeof translations.en)=>string};
const C=createContext<Context>(null as unknown as Context);
export function AppProvider({children}:{children:React.ReactNode}){const[role,setRole]=useState<Role>('receiver');const[language,setLanguage]=useState<Language>('en');return <C.Provider value={{role,setRole,language,toggleLanguage:()=>setLanguage(x=>x==='en'?'am':'en'),t:(k)=>translations[language][k]}}>{children}</C.Provider>}; export const useApp=()=>useContext(C);
