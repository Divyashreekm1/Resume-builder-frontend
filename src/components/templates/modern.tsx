
import type { TemplateProps } from './types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Lightbulb, Award, FolderKanban, Link as LinkIcon } from 'lucide-react';

const Section = ({ title, icon: Icon, children, primaryColor }: { title: string; icon: React.ElementType, children: React.ReactNode, primaryColor?: string }) => (
    <div className="mb-4">
        <h2 className="text-base font-bold uppercase tracking-wider mb-2 flex items-center" style={{ color: primaryColor }}>
             <Icon className="h-4 w-4 mr-2" />
            {title}
        </h2>
        {children}
    </div>
);

export default function ModernTemplate({ data, theme, isPreview = false }: TemplateProps) {
    const primaryColor = theme?.primary || 'hsl(var(--primary))';
    const backgroundColor = theme?.bg || '#ffffff';
    const textColor = theme?.text || '#333333';
    const sidebarBackgroundColor = theme?.sidebarBg || '#f4f4f4';

    return (
        <div className="flex w-full h-full bg-white text-xs overflow-hidden" style={{ backgroundColor }}>
            {/* Sidebar */}
            <div className="w-1/3 p-4 flex flex-col" style={{ backgroundColor: sidebarBackgroundColor, color: textColor }}>
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold" style={{ color: primaryColor }}>{data.name}</h1>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider border-b pb-1 mb-1" style={{ borderColor: `${textColor}40` }}>Contact</h3>
                    <div className="space-y-1 text-xs">
                         <p className="flex items-start"><MapPin className="h-3 w-3 mr-2 mt-0.5 shrink-0" /><span className="break-all">{data.location}</span></p>
                        <p className="flex items-start"><Mail className="h-3 w-3 mr-2 mt-0.5 shrink-0" /><span className="break-all">{data.email}</span></p>
                        <p className="flex items-start"><Phone className="h-3 w-3 mr-2 mt-0.5 shrink-0" /><span className="break-all">{data.phone}</span></p>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider border-b pb-1 mb-1" style={{ borderColor: `${textColor}40` }}>Skills</h3>
                    <div className="flex flex-wrap gap-1">
                        {data.skills.map(skill => (
                            <span key={skill} className="font-medium px-1.5 py-0.5 rounded-md text-[10px]" style={{ backgroundColor: `${primaryColor}33`, color: primaryColor }}>{skill}</span>
                        ))}
                    </div>
                </div>
                 <div className="mt-4 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider border-b pb-1 mb-1" style={{ borderColor: `${textColor}40` }}>Education</h3>
                     {data.education.map(edu => (
                        <div key={edu.id} className="mb-1">
                            <h4 className="font-bold text-xs">{edu.degree}</h4>
                            <p className="text-[11px]">{edu.school}</p>
                            <p className="text-[11px] opacity-70">{edu.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="w-2/3 p-4 overflow-y-auto" style={{ color: textColor }}>
                {data.description && (
                    <p className="text-xs mb-4">{data.description}</p>
                )}

                {data.experience.length > 0 && (
                    <Section title="Experience" icon={Briefcase} primaryColor={primaryColor}>
                        {data.experience.map(exp => (
                            <div key={exp.id} className="mb-3">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-sm">{exp.role}</h3>
                                    <p className="text-[11px] opacity-70">{exp.date}</p>
                                </div>
                                <p className="text-xs italic">{exp.company}</p>
                                <ul className="mt-1 list-disc list-inside space-y-0.5 text-[11px]">
                                     {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace('•','').trim()}</li>)}
                                </ul>
                            </div>
                        ))}
                    </Section>
                )}

                {data.projects.length > 0 && (
                    <Section title="Projects" icon={FolderKanban} primaryColor={primaryColor}>
                        {data.projects.map(proj => (
                            <div key={proj.id} className="mb-2">
                                <h3 className="font-bold text-sm flex items-center">{proj.name} {proj.link && !isPreview && <a href={`https://${proj.link}`} className="font-normal hover:underline ml-1" style={{color: primaryColor}}><LinkIcon className="inline h-3 w-3" /></a>}</h3>
                                <p className="text-[11px]">{proj.description}</p>
                            </div>
                        ))}
                    </Section>
                )}

                {data.certificates.length > 0 && (
                    <Section title="Certificates" icon={Award} primaryColor={primaryColor}>
                        {data.certificates.map(cert => (
                            <div key={cert.id} className="flex justify-between items-baseline mb-1">
                                <p className="text-xs"><span className="font-bold">{cert.name}</span> - {cert.issuingBody}</p>
                                <p className="text-[11px] opacity-70">{cert.date}</p>
                            </div>
                        ))}
                    </Section>
                )}
            </div>
        </div>
    );
}
