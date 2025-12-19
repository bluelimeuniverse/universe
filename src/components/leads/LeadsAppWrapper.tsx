'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the Leads App with SSR disabled to avoid window is not defined errors
const LeadsApp = dynamic(() => import('./LeadsApp'), { ssr: false });

export default function LeadsAppWrapper() {
    return <LeadsApp />;
}
