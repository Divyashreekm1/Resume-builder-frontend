import type { TemplateProps } from './types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Lightbulb, Award, FolderKanban } from 'lucide-react';

const Section = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType, children: React.ReactNode }) => (
    <div className="mb-4">
        <h2 className="text-base font-bold uppercase tracking-wider text-primary mb-2 flex items-center">
             <Icon className="h-4 w-4 mr-2" />
            {title}
        </h2>
        {children}
    </div>
);

export default function DesignerTemplate({ data }: TemplateProps) {
    return (
        <div className="flex w-full h-full bg-white text-gray-800 text-xs overflow-hidden">
            {/* Sidebar */}
            <div className="w-1/3 bg-gray-100 text-gray-800 p-4 flex flex-col">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-primary">{data.name}</h1>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider border-b pb-1 mb-1">Contact</h3>
                    <div className="space-y-1 text-xs">
                         <p className="flex items-start"><MapPin className="h-3 w-3 mr-2 mt-0.5 shrink-0" /><span>{data.location}</span></p>
                        <p className="flex items-start"><Mail className="h-3 w-3 mr-2 mt-0.5 shrink-0" /><span>{data.email}</span></p>
                        <p className="flex items-start"><Phone className="h-3 w-3 mr-2 mt-0.5 shrink-0" /><span>{data.phone}</span></p>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider border-b pb-1 mb-1">Skills</h3>
                    <div className="flex flex-wrap gap-1">
                        {data.skills.map(skill => (
                            <span key={skill} className="bg-primary/20 text-primary-dark font-medium px-1.5 py-0.5 rounded-md text-[10px]">{skill}</span>
                        ))}
                    </div>
                </div>
                 <div className="mt-4 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider border-b pb-1 mb-1">Education</h3>
                     {data.education.map(edu => (
                        <div key={edu.id} className="mb-1">
                            <h4 className="font-bold text-xs">{edu.degree}</h4>
                            <p className="text-[11px]">{edu.school}</p>
                            <p className="text-[11px] text-gray-500">{edu.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="w-2/3 p-4 overflow-y-auto">
                {data.description && (
                    <p className="text-xs text-gray-600 mb-4">{data.description}</p>
                )}

                {data.experience.length > 0 && (
                    <Section title="Experience" icon={Briefcase}>
                        {data.experience.map(exp => (
                            <div key={exp.id} className="mb-3">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-sm">{exp.role}</h3>
                                    <p className="text-[11px] text-gray-500">{exp.date}</p>
                                </div>
                                <p className="text-xs italic text-gray-600">{exp.company}</p>
                                <ul className="mt-1 list-disc list-inside text-gray-600 space-y-0.5 text-[11px]">
                                     {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace('•','').trim()}</li>)}
                                </ul>
                            </div>
                        ))}
                    </Section>
                )}

                {data.projects.length > 0 && (
                    <Section title="Projects" icon={FolderKanban}>
                        {data.projects.map(proj => (
                            <div key={proj.id} className="mb-2">
                                <h3 className="font-bold text-sm">{proj.name} {proj.link && <a href={`https://${proj.link}`} className="font-normal text-primary hover:underline">{proj.link}</a>}</h3>
                                <p className="text-[11px] text-gray-600">{proj.description}</p>
                            </div>
                        ))}
                    </Section>
                )}

                {data.certificates.length > 0 && (
                    <Section title="Certificates" icon={Award}>
                        {data.certificates.map(cert => (
                            <div key={cert.id} className="flex justify-between items-baseline mb-1">
                                <p className="text-xs"><span className="font-bold">{cert.name}</span> - {cert.issuingBody}</p>
                                <p className="text-[11px] text-gray-500">{cert.date}</p>
                            </div>
                        ))}
                    </Section>
                )}
            </div>
        </div>
    );
}
