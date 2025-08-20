
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sampleData } from '@/lib/sample-data';
import ModernTemplate from '@/components/templates/modern';
import ClassicTemplate from '@/components/templates/classic';
import CreativeTemplate from '@/components/templates/creative';
import { LogoIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Pencil } from 'lucide-react';
import { themes } from '@/lib/themes';
import type { ResumeData } from '@/lib/types';

const sampleTitles: (keyof typeof sampleData)[] = [
    "Software Engineer",
    "Data Analyst",
    "Accountant",
    "Manager",
    "Executive",
    "Finance Professional",
    "Civil Engineer",
    "Teacher",
    "UX/UI Designer",
    "Graphic Designer",
    "Electrical Engineer",
    "Mechanical Engineer",
    "Web Developer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Technology Consultant",
    "Sales & Marketing",
    "Healthcare Professional",
    "IT Support Specialist",
    "Product Manager",
    "Nurse Practitioner",
    "Marketing Specialist",
    "Financial Planner",
    "Human Resources Manager",
    "Social Media Manager",
];

const templates = [
    { name: 'classic', component: ClassicTemplate, label: 'Classic' },
    { name: 'modern', component: ModernTemplate, label: 'Modern' },
    { name: 'creative', component: CreativeTemplate, label: 'Creative' },
];

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

            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-6">Creative Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {themes.slice(50, 70).map((theme, index) => {
                        const template = templates.find(t => t.name === 'creative')!;
                        const title = sampleTitles[index % sampleTitles.length];
                        const data = sampleData[title] || sampleData["Software Engineer"];

                        return (
                            <div key={`creative-${index}`} className="flex flex-col items-center gap-4 group">
                                 <div className="text-center">
                                    <h3 className="text-lg font-semibold">{theme.name}</h3>
                                    <p className="text-sm text-muted-foreground">{title}</p>
                                </div>
                                <Link href={`/?template=${template.name}&theme=${encodeURIComponent(theme.name)}`} className="w-full">
                                    <div className="relative w-full h-auto aspect-[1/1.414] bg-white shadow-2xl rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                            <Button>
                                                <Pencil className="mr-2 h-4 w-4" /> Edit this template
                                            </Button>
                                       </div>
                                       <template.component data={data} theme={theme} isPreview={true} />
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-6">Classic Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {themes.slice(0, 25).map((theme, index) => {
                        const template = templates.find(t => t.name === 'classic')!;
                        const title = sampleTitles[index % sampleTitles.length];
                        const data = sampleData[title] || sampleData["Software Engineer"];

                        return (
                            <div key={`classic-${index}`} className="flex flex-col items-center gap-4 group">
                                 <div className="text-center">
                                    <h3 className="text-lg font-semibold">{theme.name}</h3>
                                    <p className="text-sm text-muted-foreground">{title}</p>
                                </div>
                                <Link href={`/?template=${template.name}&theme=${encodeURIComponent(theme.name)}`} className="w-full">
                                    <div className="relative w-full h-auto aspect-[1/1.414] bg-white shadow-2xl rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                            <Button>
                                                <Pencil className="mr-2 h-4 w-4" /> Edit this template
                                            </Button>
                                       </div>
                                       <template.component data={data} theme={theme} isPreview={true} />
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-center mb-6">Modern Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {themes.slice(25, 50).map((theme, index) => {
                        const template = templates.find(t => t.name === 'modern')!;
                        const title = sampleTitles[index % sampleTitles.length];
                        const data = sampleData[title] || sampleData["Software Engineer"];

                        return (
                            <div key={`modern-${index}`} className="flex flex-col items-center gap-4 group">
                                 <div className="text-center">
                                    <h3 className="text-lg font-semibold">{theme.name}</h3>
                                    <p className="text-sm text-muted-foreground">{title}</p>
                                </div>
                                <Link href={`/?template=${template.name}&theme=${encodeURIComponent(theme.name)}`} className="w-full">
                                    <div className="relative w-full h-auto aspect-[1/1.414] bg-white shadow-2xl rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                            <Button>
                                                <Pencil className="mr-2 h-4 w-4" /> Edit this template
                                            </Button>
                                       </div>
                                       <template.component data={data} theme={theme} isPreview={true} />
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
        </>
    );
}
