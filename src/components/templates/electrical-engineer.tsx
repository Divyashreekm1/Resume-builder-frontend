
import type { TemplateProps } from './types';
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Lightbulb, Award, FolderKanban } from 'lucide-react';

const Section = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType, children: React.ReactNode }) => (
    <div className="mb-4">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-2 mb-2 flex items-center">
            <Icon className="h-5 w-5 mr-3 text-gray-600" />
            {title}
        </h2>
        {children}
    </div>
);

export default function ElectricalEngineerTemplate({ data }: TemplateProps) {
    return (
        <div className="bg-white text-gray-800 p-6 font-serif w-full h-full text-sm flex flex-col overflow-hidden">
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold tracking-wider">{data.name}</h1>
                <div className="flex justify-center items-center gap-x-3 gap-y-1 mt-2 text-xs flex-wrap">
                    <span className="flex items-center"><MapPin className="h-3 w-3 mr-1.5" />{data.location}</span>
                    <span className="flex items-center"><Mail className="h-3 w-3 mr-1.5" />{data.email}</span>
                    <span className="flex items-center"><Phone className="h-3 w-3 mr-1.5" />{data.phone}</span>
                </div>
            </header>

            {data.description && (
                <p className="text-center mb-6 text-xs italic">{data.description}</p>
            )}

            <div className="flex-grow overflow-y-auto pr-2">
                {data.experience.length > 0 && (
                    <Section title="Experience" icon={Briefcase}>
                        {data.experience.map(exp => (
                            <div key={exp.id} className="mb-3">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-bold text-base">{exp.role}</h3>
                                    <p className="text-xs font-medium text-gray-600">{exp.date}</p>
                                </div>
                                <p className="text-sm italic text-gray-700">{exp.company}</p>
                                <ul className="mt-1 list-disc list-inside text-xs text-gray-600 space-y-0.5">
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
                                    <h3 className="font-bold text-base">{edu.school}</h3>
                                    <p className="text-xs font-medium text-gray-600">{edu.date}</p>
                                </div>
                                <p className="text-sm italic">{edu.degree}</p>
                            </div>
                        ))}
                    </Section>
                )}

                <div className="grid grid-cols-2 gap-x-6">
                    {data.skills.length > 0 && (
                        <Section title="Technical Skills" icon={Lightbulb}>
                            <p className="text-xs">{data.skills.join(', ')}</p>
                        </Section>
                    )}

                    {data.projects.length > 0 && (
                        <Section title="Projects" icon={FolderKanban}>
                            {data.projects.map(proj => (
                                <div key={proj.id} className="mb-2">
                                    <h3 className="font-bold text-sm">{proj.name} {proj.link && <span className="font-normal text-xs text-blue-600 hover:underline">({proj.link})</span>}</h3>
                                    <p className="text-xs text-gray-600">{proj.description}</p>
                                </div>
                            ))}
                        </Section>
                    )}
                </div>
            </div>
        </div>
    );
}
