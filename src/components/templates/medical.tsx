import type { TemplateProps } from './types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Lightbulb, Award, FolderKanban } from 'lucide-react';

const Section = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType, children: React.ReactNode }) => (
    <div className="mb-4">
        <h2 className="text-lg font-bold border-b-2 border-gray-300 pb-1 mb-2 flex items-center">
            <Icon className="h-4 w-4 mr-2 text-gray-600" />
            {title}
        </h2>
        {children}
    </div>
);

export default function MedicalTemplate({ data }: TemplateProps) {
    return (
        <div className="bg-white text-gray-800 p-6 font-serif w-full h-full text-xs flex flex-col overflow-hidden">
            <header className="text-center mb-4">
                <h1 className="text-2xl font-bold tracking-wider">{data.name}</h1>
                <div className="flex justify-center items-center gap-x-3 gap-y-1 mt-1 text-[11px] flex-wrap">
                    <span className="flex items-center"><MapPin className="h-2.5 w-2.5 mr-1" />{data.location}</span>
                    <span className="flex items-center"><Mail className="h-2.5 w-2.5 mr-1" />{data.email}</span>
                    <span className="flex items-center"><Phone className="h-2.5 w-2.5 mr-1" />{data.phone}</span>
                </div>
            </header>

            {data.description && (
                 <p className="text-center mb-4 text-[11px] italic">{data.description}</p>
            )}

            <div className="flex-grow overflow-y-auto pr-2">
                {data.experience.length > 0 && (
                    <Section title="Clinical Experience" icon={Briefcase}>
                        {data.experience.map(exp => (
                            <div key={exp.id} className="mb-3">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-sm">{exp.role}</h3>
                                    <p className="text-[11px] font-medium text-gray-600">{exp.date}</p>
                                </div>
                                <p className="text-xs italic text-gray-700">{exp.company}</p>
                                <ul className="mt-1 list-disc list-inside text-[11px] text-gray-600 space-y-0.5">
                                    {exp.description.split('\n').map((item, i) => item.trim() && <li key={i}>{item.replace('•','').trim()}</li>)}
                                </ul>
                            </div>
                        ))}
                    </Section>
                )}

                {data.education.length > 0 && (
                    <Section title="Education" icon={GraduationCap}>
                        {data.education.map(edu => (
                            <div key={edu.id} className="mb-2">
                                 <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-sm">{edu.school}</h3>
                                    <p className="text-[11px] font-medium text-gray-600">{edu.date}</p>
                                </div>
                                <p className="text-xs italic">{edu.degree}</p>
                            </div>
                        ))}
                    </Section>
                )}
                
                <div className="grid grid-cols-2 gap-x-4">
                     {data.skills.length > 0 && (
                        <Section title="Skills" icon={Lightbulb}>
                            <p className="text-[11px]">{data.skills.join(', ')}</p>
                        </Section>
                    )}

                    {data.projects.length > 0 && (
                        <Section title="Research" icon={FolderKanban}>
                            {data.projects.map(proj => (
                                <div key={proj.id} className="mb-2">
                                    <h3 className="font-bold text-sm">{proj.name}</h3>
                                    <p className="text-[11px] text-gray-600">{proj.description}</p>
                                </div>
                            ))}
                        </Section>
                    )}
                </div>


                {data.certificates.length > 0 && (
                    <Section title="Licenses & Certifications" icon={Award}>
                        {data.certificates.map(cert => (
                            <div key={cert.id} className="flex justify-between items-baseline mb-1">
                                <p className="text-[11px]"><span className="font-bold">{cert.name}</span> - {cert.issuingBody}</p>
                                 <p className="text-[11px] text-gray-600">{cert.date}</p>
                            </div>
                        ))}
                    </Section>
                )}
            </div>
        </div>
    );
}
