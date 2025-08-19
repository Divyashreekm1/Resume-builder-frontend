import type { TemplateProps } from './types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Lightbulb, Award, FolderKanban, Link as LinkIcon } from 'lucide-react';

const Section = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType, children: React.ReactNode }) => (
    <div className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary border-b-2 border-primary/40 pb-1 mb-2 flex items-center">
             <Icon className="h-4 w-4 mr-2" />
            {title}
        </h2>
        <div className="space-y-2">
            {children}
        </div>
    </div>
);

export default function ClassicTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full h-full bg-white text-gray-800 text-xs p-6 overflow-y-auto">
            {/* Header */}
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
                <div className="flex justify-center items-center space-x-4 text-gray-600 text-[11px] mt-1">
                    <p className="flex items-center"><MapPin className="h-3 w-3 mr-1.5" />{data.location}</p>
                    <p className="flex items-center"><Mail className="h-3 w-3 mr-1.5" />{data.email}</p>
                    <p className="flex items-center"><Phone className="h-3 w-3 mr-1.5" />{data.phone}</p>
                </div>
            </header>

            {/* Professional Summary */}
            {data.description && (
                <div className="mb-4">
                    <p className="text-center text-xs text-gray-600 italic">{data.description}</p>
                </div>
            )}
            
            <div className="border-t border-gray-200 my-4"></div>

            {/* Experience */}
            {data.experience.length > 0 && (
                <Section title="Professional Experience" icon={Briefcase}>
                    {data.experience.map(exp => (
                        <div key={exp.id} className="mb-3">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-bold text-sm">{exp.role}</h3>
                                <p className="text-[11px] text-gray-500 font-medium">{exp.date}</p>
                            </div>
                            <p className="text-xs italic text-gray-700 mb-1">{exp.company}</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-0.5 text-[11px] pl-2">
                                 {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace(/•/g,'').trim()}</li>)}
                            </ul>
                        </div>
                    ))}
                </Section>
            )}

            {/* Education */}
            {data.education.length > 0 && (
                 <Section title="Education" icon={GraduationCap}>
                     {data.education.map(edu => (
                        <div key={edu.id} className="flex justify-between items-baseline">
                           <div>
                                <h4 className="font-bold text-sm">{edu.school}</h4>
                                <p className="text-[11px] text-gray-600">{edu.degree}</p>
                           </div>
                            <p className="text-[11px] text-gray-500 font-medium">{edu.date}</p>
                        </div>
                    ))}
                </Section>
            )}
            
            {/* Skills */}
            {data.skills.length > 0 && (
                <Section title="Skills" icon={Lightbulb}>
                    <div className="flex flex-wrap gap-1.5">
                        {data.skills.map(skill => (
                            <span key={skill} className="bg-gray-200 text-gray-700 font-medium px-2 py-0.5 rounded-md text-[10px]">{skill}</span>
                        ))}
                    </div>
                </Section>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
                <Section title="Projects" icon={FolderKanban}>
                    {data.projects.map(proj => (
                        <div key={proj.id} className="mb-2">
                            <h3 className="font-bold text-sm flex items-center">
                                {proj.name} 
                                {proj.link && 
                                    <a href={`https://${proj.link.replace(/^https?:\/\//, '')}`} target="_blank" rel="noopener noreferrer" className="font-normal text-primary hover:underline ml-2">
                                        <LinkIcon className="inline h-3 w-3" />
                                    </a>
                                }
                            </h3>
                            <p className="text-[11px] text-gray-600">{proj.description}</p>
                        </div>
                    ))}
                </Section>
            )}

            {/* Certificates */}
            {data.certificates.length > 0 && (
                <Section title="Certificates" icon={Award}>
                    {data.certificates.map(cert => (
                        <div key={cert.id} className="flex justify-between items-baseline">
                            <p className="text-xs"><span className="font-bold">{cert.name}</span>, <span className="italic">{cert.issuingBody}</span></p>
                            <p className="text-[11px] text-gray-500 font-medium">{cert.date}</p>
                        </div>
                    ))}
                </Section>
            )}
        </div>
    );
}
