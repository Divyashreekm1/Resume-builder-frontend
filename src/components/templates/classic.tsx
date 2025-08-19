import type { TemplateProps } from './types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Lightbulb, Award, FolderKanban, Link as LinkIcon } from 'lucide-react';

const Section = ({ title, icon: Icon, children, primaryColor }: { title: string; icon: React.ElementType, children: React.ReactNode, primaryColor?: string }) => (
    <div className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-wider border-b-2 pb-1 mb-2 flex items-center" style={{ color: primaryColor, borderColor: `${primaryColor}66` }}>
             <Icon className="h-4 w-4 mr-2" />
            {title}
        </h2>
        <div className="space-y-2">
            {children}
        </div>
    </div>
);

export default function ClassicTemplate({ data, theme }: TemplateProps) {
    const primaryColor = theme?.primary || 'hsl(var(--primary))';
    const backgroundColor = theme?.bg || '#ffffff';
    const textColor = theme?.text || '#333333';

    return (
        <div className="w-full h-full text-xs p-6 overflow-y-auto flex flex-col" style={{ backgroundColor: backgroundColor, color: textColor }}>
            {/* Header */}
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold" style={{ color: primaryColor }}>{data.name}</h1>
                <div className="flex justify-center items-center space-x-4 text-[11px] mt-1" style={{color: textColor}}>
                    <p className="flex items-center"><MapPin className="h-3 w-3 mr-1.5" />{data.location}</p>
                    <p className="flex items-center"><Mail className="h-3 w-3 mr-1.5" />{data.email}</p>
                    <p className="flex items-center"><Phone className="h-3 w-3 mr-1.5" />{data.phone}</p>
                </div>
            </header>

            {/* Professional Summary */}
            {data.description && (
                <div className="mb-4">
                    <p className="text-center text-xs italic">{data.description}</p>
                </div>
            )}
            
            <div className="border-t my-4" style={{ borderColor: `${textColor}20` }}></div>

            {/* Experience */}
            {data.experience.length > 0 && (
                <Section title="Professional Experience" icon={Briefcase} primaryColor={primaryColor}>
                    {data.experience.map(exp => (
                        <div key={exp.id} className="mb-3">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-sm">{exp.role}</h3>
                                <p className="text-[11px] font-medium opacity-70">{exp.date}</p>
                            </div>
                            <p className="text-xs italic mb-1">{exp.company}</p>
                            <ul className="list-disc list-inside space-y-0.5 text-[11px] pl-2">
                                 {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace(/•/g,'').trim()}</li>)}
                            </ul>
                        </div>
                    ))}
                </Section>
            )}

            {/* Education */}
            {data.education.length > 0 && (
                 <Section title="Education" icon={GraduationCap} primaryColor={primaryColor}>
                     {data.education.map(edu => (
                        <div key={edu.id} className="flex justify-between items-baseline">
                           <div>
                                <h4 className="font-bold text-sm">{edu.school}</h4>
                                <p className="text-[11px]">{edu.degree}</p>
                           </div>
                            <p className="text-[11px] font-medium opacity-70">{edu.date}</p>
                        </div>
                    ))}
                </Section>
            )}
            
            {/* Skills */}
            {data.skills.length > 0 && (
                <Section title="Skills" icon={Lightbulb} primaryColor={primaryColor}>
                    <div className="flex flex-wrap gap-1.5">
                        {data.skills.map(skill => (
                            <span key={skill} className="font-medium px-2 py-0.5 rounded-md text-[10px]" style={{ backgroundColor: `${primaryColor}33`, color: primaryColor }}>{skill}</span>
                        ))}
                    </div>
                </Section>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
                <Section title="Projects" icon={FolderKanban} primaryColor={primaryColor}>
                    {data.projects.map(proj => (
                        <div key={proj.id} className="mb-2">
                            <h3 className="font-bold text-sm flex items-center">
                                {proj.name} 
                                {proj.link && 
                                    <a href={`https://${proj.link.replace(/^https?:\/\//, '')}`} target="_blank" rel="noopener noreferrer" className="font-normal hover:underline ml-2" style={{color: primaryColor}}>
                                        <LinkIcon className="inline h-3 w-3" />
                                    </a>
                                }
                            </h3>
                            <p className="text-[11px]">{proj.description}</p>
                        </div>
                    ))}
                </Section>
            )}

            {/* Certificates */}
            {data.certificates.length > 0 && (
                <Section title="Certificates" icon={Award} primaryColor={primaryColor}>
                    {data.certificates.map(cert => (
                        <div key={cert.id} className="flex justify-between items-baseline">
                            <p className="text-xs"><span className="font-bold">{cert.name}</span>, <span className="italic">{cert.issuingBody}</span></p>
                            <p className="text-[11px] font-medium opacity-70">{cert.date}</p>
                        </div>
                    ))}
                </Section>
            )}
        </div>
    );
}
