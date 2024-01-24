"use client";

import {useSession } from "next-auth/react";

export function ProtectedRoute({fallback,children}) {
    const {status} = useSession()
    
    if(status !== 'authenticated') {
      return fallback // or redirect to login page with router.push()
    } 
    return <>{children}</>
  }
