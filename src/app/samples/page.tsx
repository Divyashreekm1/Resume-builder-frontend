
'use client';

import React from 'react';
import Link from 'next/link';
import { placeholderData } from '@/lib/placeholder-data';
import ModernTemplate from '@/components/templates/modern';
import ClassicTemplate from '@/components/templates/classic';
import { LogoIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Pencil } from 'lucide-react';
import { themes } from '@/lib/themes';

export default function SamplesPage() {
    return (
        <>
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
            <div className="mr-4 flex items-center">
                <LogoIcon className="h-8 w-8 mr-2 text-primary" />
                <span className="font-bold text-lg">ResumeFlow</span>
            </div>
            <Link href="/" passHref>
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Builder
              </Button>
            </Link>
            </div>
        </header>
        <main className="container py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold tracking-tight">Resume Samples</h1>
                <p className="text-muted-foreground mt-2">Browse through our collection of resume templates with various color themes. Click one to start editing!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {themes.map((theme, index) => {
                    const templateType = index % 2 === 0 ? 'modern' : 'classic';
                    return (
                        <div key={index} className="flex flex-col items-center gap-4 group">
                             <h2 className="text-lg font-semibold">{theme.name}</h2>
                            <Link href={`/?template=${templateType}&theme=${encodeURIComponent(theme.name)}`} className="w-full">
                                <div className="relative w-full h-auto aspect-[1/1.414] bg-white shadow-2xl rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        <Button>
                                            <Pencil className="mr-2 h-4 w-4" /> Edit this template
                                        </Button>
                                   </div>
                                   {templateType === 'modern' ? (
                                     <ModernTemplate data={placeholderData} theme={theme} />
                                   ) : (
                                     <ClassicTemplate data={placeholderData} theme={theme} />
                                   )}
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </main>
        </>
    );
}
