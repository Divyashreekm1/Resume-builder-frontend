
'use client';

import React from 'react';
import Link from 'next/link';
import { placeholderData } from '@/lib/placeholder-data';
import ModernTemplate from '@/components/templates/modern';
import ClassicTemplate from '@/components/templates/classic';
import { LogoIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const themes = [
    // 1. Professional & Clean
    { name: "Sapphire & Snow", primary: '#0F4C81', bg: '#FFFFFF', text: '#333333', sidebarBg: '#F4F7F9' },
    // 2. Modern & Minimalist
    { name: "Charcoal & Ivory", primary: '#343A40', bg: '#FFFFFF', text: '#212529', sidebarBg: '#F8F9FA' },
    // 3. Elegant & Soft
    { name: "Dusty Rose & Cream", primary: '#C08E8E', bg: '#FDFBF7', text: '#5D5353', sidebarBg: '#F5F0EB' },
    // 4. Bold & Energetic
    { name: "Crimson & Alabaster", primary: '#DC143C', bg: '#FAFAFA', text: '#3B3B3B', sidebarBg: '#F0F0F0' },
    // 5. Corporate & Trustworthy
    { name: "Deep Indigo & Sterling", primary: '#4B0082', bg: '#FFFFFF', text: '#333333', sidebarBg: '#E8E6F0' },
    // 6. Natural & Earthy
    { name: "Forest & Beige", primary: '#228B22', bg: '#F5F5DC', text: '#3A3A3A', sidebarBg: '#E9F0E9' },
    // 7. Tech & Vibrant
    { name: "Cyber Grape & Ghost White", primary: '#5E2750', bg: '#F8F8FF', text: '#2E2E2E', sidebarBg: '#EDE7ED' },
    // 8. Calm & Cool
    { name: "Teal & Light Cyan", primary: '#008080', bg: '#E0FFFF', text: '#2C3E50', sidebarBg: '#D9F7F7' },
    // 9. Warm & Inviting
    { name: "Maroon & Antique White", primary: '#800000', bg: '#FAEBD7', text: '#4A2C2A', sidebarBg: '#F0E5D8' },
    // 10. Sophisticated & Muted
    { name: "Slate & Eggshell", primary: '#708090', bg: '#F0EAD6', text: '#2F4F4F', sidebarBg: '#E6E8E9' },
    // 11. Creative & Playful
    { name: "Orchid & Lavender", primary: '#DA70D6', bg: '#E6E6FA', text: '#4B0082', sidebarBg: '#F3E5F5' },
    // 12. Classic & Timeless
    { name: "Navy & Linen", primary: '#000080', bg: '#FAF0E6', text: '#343434', sidebarBg: '#E6E6F0' },
    // 13. Sharp & Contrasting
    { name: "Jet Black & White", primary: '#000000', bg: '#FFFFFF', text: '#000000', sidebarBg: '#EAEAEA' },
    // 14. Fresh & Optimistic
    { name: "Emerald & Mint", primary: '#009B77', bg: '#F5FFFA', text: '#2E463B', sidebarBg: '#E6F5F0' },
    // 15. Premium & Luxurious
    { name: "Gold & Charcoal", primary: '#D4AF37', bg: '#36454F', text: '#F0F0F0', sidebarBg: '#4A545C' },
    // 16. Academic & Stately
    { name: "Oxford Blue & Silver", primary: '#002147', bg: '#F0F0F0', text: '#222222', sidebarBg: '#D9DFE5' },
    // 17. Vibrant & Modern
    { name: "Electric Blue & Gainsboro", primary: '#7DF9FF', bg: '#DCDCDC', text: '#1E2F3C', sidebarBg: '#C8D0D0' },
    // 18. Gentle & Professional
    { name: "Powder Blue & White", primary: '#B0E0E6', bg: '#FFFFFF', text: '#4682B4', sidebarBg: '#E0F2F7' },
    // 19. Regal & Rich
    { name: "Plum & Thistle", primary: '#8E4585', bg: '#D8BFD8', text: '#4A2E46', sidebarBg: '#F2E8F2' },
    // 20. Sunny & Bright
    { name: "Goldenrod & Lemon Chiffon", primary: '#DAA520', bg: '#FFFACD', text: '#5C4033', sidebarBg: '#F5F2E0' },
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
                <p className="text-muted-foreground mt-2">Browse through our collection of resume templates with various color themes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {themes.map((theme, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                         <h2 className="text-lg font-semibold">{theme.name}</h2>
                        <div className="w-full h-auto aspect-[1/1.414] bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                           {index % 2 === 0 ? (
                             <ModernTemplate data={placeholderData} theme={theme} />
                           ) : (
                             <ClassicTemplate data={placeholderData} theme={theme} />
                           )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
        </>
    );
}

